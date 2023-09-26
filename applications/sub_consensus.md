# Sub-Consensus Module
- **Team Name:** Antier Solutions Pvt. Ltd.
- **Payment Address:** Fiat
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3
## Project Overview :page_facing_up:
This application is in response to the open RFP: [Sub-Consensus Mechanism](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/sub-consensus.md)
### Overview
- Current Challenge: The text mentions that the time it takes for a block produced by a collator on a parachain to become finalized is too long for some applications deployed on that parachain. In other words, the current consensus process is slow, which can be a problem for certain use cases.
- Proposed Solution: The proposal suggests introducing a mechanism that allows parachain collators to achieve consensus among themselves on the "best" block faster than the existing process.
- Mechanism Details:
1. Additional Runtime Module: This proposed mechanism would likely be implemented as an additional runtime module within the parachain. This means it's an optional component that can be added to the parachain's functionality.
2. Participation: All collators on the parachain can choose to participate in this mechanism, but it's not mandatory. Collators can decide whether or not to use it.
3. Purpose: The primary purpose of this mechanism is to provide a quicker way for users of the parachain applications to see "quasi-finalized" blocks. Quasi-finalized means that these blocks are not fully finalized on the relay chain (the main Polkadot chain), but they are considered as a more immediate form of consensus on the parachain itself.
4. Independence from Relay Chain: It's important to note that this sub-consensus mechanism on the parachain will operate independently of the decision made by relay chain validators. In other words, the relay chain validators' votes on the main chain may differ from the outcome of this sub-consensus mechanism on the parachain.
- Incentives for Collators:
1. Opt-In: Collators can choose to participate in this mechanism voluntarily. It's not forced upon them.
2. Bonding Stake (Stick): To encourage honest participation, collators are incentivized to bond (lock up) a small amount of cryptocurrency as a stake. This stake acts as a security deposit. If a situation arises where a relay-chain-finalized block causes a reorganization (reorg) in the sub-consensus mechanism on the parachain, collators who participated dishonestly or caused issues may have their bonded stake slashed (reduced or confiscated) as a penalty.
3. Reward (Carrot): Incentives are also provided in the form of a small reward. The parachain's governance (the decision-making body for the parachain) can decide to allocate rewards to collators who participated honestly in this mechanism. These rewards are typically tied to the decisions made by the governance regarding whether or not to include and use this specific module.

### Ecosystem Fit
- Quicker Finalization: The sub-consensus module expedites the process of reaching consensus within a parachain. In traditional blockchain networks like Polkadot, the global consensus process on the relay chain can be relatively slow due to its complexity, involving validators from across the network. The sub-consensus module allows parachains to reach consensus among their own collators more swiftly, leading to faster confirmation times for transactions and blocks within that specific parachain.
- Parachain Autonomy: Each parachain in the ecosystem typically serves a distinct purpose or use case. By implementing a sub-consensus mechanism, each parachain can have autonomy over its consensus process. This means that the parachain can independently determine the validity and finality of its own transactions and blocks without relying entirely on the slower relay chain consensus. This autonomy is critical for maintaining the unique characteristics and requirements of each parachain.
- Customized Consensus Rules: Different parachains might have diverse consensus requirements. For instance, a parachain used for a high-frequency trading application may prioritize low-latency block finalization, while a privacy-focused parachain may require specialized consensus rules. The sub-consensus module enables parachains to define and implement their own consensus rules tailored to their specific use cases. This customization is vital for optimizing the performance of individual parachains.
- Resilience and Isolation: The sub-consensus mechanism enhances the resilience of individual parachains. If one parachain faces issues or disruptions, it won't necessarily impact the consensus process on other parachains or the relay chain. This isolation helps maintain the overall stability and security of the broader blockchain ecosystem, ensuring that issues in one parachain do not cascade across the entire network.
## Team :busts_in_silhouette:
### Team members
- Ipsa Gupta
- Shubham Gupta
- Upendra Singh
### Contact
- **Contact Name:** Karan Chopra
- **Contact Email:** karan.chopra@antiersolutions.com
### Legal Structure
- **Registered Address:** E-221, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059
- **Registered Legal Entity:** Antier Solutions Pvt. Ltd.
### Team's experience
- Antier is a thought-to-finish partner for customers in their blockchain journey. We advise and consult our clients on blockchain technologies and tailor solutions utilising our powerful blockchain ecosystem. We help customers experiment and deploy proof-of-concepts on blockchain technologies and incrementally expand to scale to production releases. Our thought leaders regularly educate customers, partners, CXOs on the power of blockchain for today and tomorrow.
- Workdone by Antier in Substrate ecosystem
1. Antier worked on the validator and nominator apps for substrate based blockchains to offer a unique and better user experience .
2. We have also worked on creating an optimised and homogenised design focused on improving the navigation, information architecture, user flow tasks, content design and graphic elements for a seamless and easy browsing experience.
3. We have customised the default reward mechanism in the staking pallet of the substrate chain by integrating the sustainability and reliability score(which is calculated by ESG scores and Uptime of the validators repectively) of the validators in the current reward system.
4. We were able to run EVM and WASM machines natively in the substrate chain so that the chain will be able to support both EVM(Metamask, Remix, Web3.js, etc) and WASM(WebAssembly target, INK framework, etc) tooling.
5. We were able to replicate the whole polkadot ecosystem(Relay chain, Parachains, XCM), Where parachains are use case specific chains and communicate through XCM protocol with each other.
- Our team has been proactively participating in the Substrate Stack exchange and we ask/answer question related to ink!, Substrate, parachain. We rank in the top 6% people in the Substrate Stack Exchange. 
- Profiles of our team:
1. https://substrate.stackexchange.com/users/2372/arunjot-singh
2. https://substrate.stackexchange.com/users/2281/amit-kumar-yadav
3. https://substrate.stackexchange.com/users/354/shubham-gupta
4. https://substrate.stackexchange.com/users/3136/wakar-seraj-khan
5. https://substrate.stackexchange.com/users/3414/ipsa-gupta
### Team Code Repos
- [Shubham Gupta](https://github.com/s-h-ubham)
- [Amit Kumar Yadav](https://github.com/Amit191kumar)
- [Ipsa Gupta](https://github.com/Ipsa11)
- [Arunjot Singh](https://github.com/arunjot12)
### Team LinkedIn Profiles

## Development Roadmap :nut_and_bolt:
### Overview
* **Total Estimated Duration:** 5 months
* **Full-time equivalent (FTE):** 2
* **Total Costs:** 40,000 USD

### Milestone 1 - Research and technical specification

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 20,000 USD

At the end of the milestone, a detailed document that contains, the following parts:
- summary of the current technical implementation and its limitations
- technical proposal, including full specification of any pallets needed, as well as necessary changes (if any) to upstream substrate/cumulus repositories
- security analysis of the proposed solution
- summary of adoption of the proposed solution by a parachain team (either case study or general guidelines)

### Milestone 2 - PoC

* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):** 3
* **Total Costs:** 20,000 USD

The scope of this milestone is highly dependant on the research done and the proposal submitted in M1.

## Future Plans
## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Grants Portal