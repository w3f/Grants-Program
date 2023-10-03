# Research on Sub-Consensus Module
- **Team Name:** Antier Solutions Pvt. Ltd.
- **Payment Address:** Fiat
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
## Project Overview :page_facing_up:
This application is in response to the open RFP: [Sub-Consensus Mechanism](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/sub-consensus.md)
### Overview
- Current Challenge: The text mentions that the time it takes for a block produced by a collator on a parachain to become finalized is too long for some applications deployed on that parachain. In other words, the current consensus process is slow, which can be a problem for certain use cases.
- Proposed Solution: The proposal suggests introducing a mechanism that allows parachain collators to achieve consensus among themselves on the "best" block faster than the existing process.
- Mechanism Details:
1. Additional Runtime Module: This proposed mechanism would likely be implemented as an additional runtime module within the parachain. This means it's an optional component that can be added to the parachain's functionality.
2. Participation: All collators on the parachain can choose to participate in this mechanism, but it's not mandatory. Collators can decide whether or not to use it.
3. Purpose: The primary purpose of this mechanism is to provide a quicker way for users of the parachain applications to see "quasi-finalized" blocks. Quasi-finalized means that these blocks are not fully finalized on the relay chain (the main Polkadot chain), but they are considered as a more immediate form of consensus on the parachain itself.
4. Independence from Relay Chain: It's important to note that this sub-consensus mechanism on the parachain will operate independently of the decision made by relay chain validators. In other words, the relay chain validators' votes on the main chain may differ from the outcome of this sub-consensus mechanism on the parachain.
- Incentives for Collators:
1. Opt-In: Collators can choose to participate in this mechanism voluntarily. 
2. Bonding Stake (Stick): To encourage honest participation, collators are incentivized to bond a small amount of cryptocurrency as a stake. This stake acts as a security deposit. If a situation arises where a relay-chain-finalized block causes a reorganization (reorg) in the sub-consensus mechanism on the parachain, collators who participated dishonestly or caused issues may have their bonded stake slashed as a penalty.
3. Reward (Carrot): Incentives are also provided in the form of a small reward. The parachain's governance can decide to allocate rewards to collators who participated honestly in this mechanism. These rewards are typically tied to the decisions made by the governance regarding whether or not to include and use this specific module.
### Project Details
We're planning to use an established consensus mechanism to help nodes on parachain reach sub-consensus before sending a block to the relay chain. This means we'll have a block that's almost finalized within the parachain before it's sent to the relay chain for full confirmation.
Once the relay chain confirms the block's finality, we'll have a system in place to reward honest participants and penalize those who aren't. To do this, we're considering two consensus mechanisms: Proof of Stake (POS) and Proof of Authority (POA).
#### Problems to be investigated:
Scalability: Blockchain growth brings scalability challenges. Slow confirmation times limit network throughput, impacting decentralized apps (dApps).
1. User Experience: Slow confirmations cause transaction and block delays, harming user experience, especially in real-time apps like DeFi, gaming, and IoT.
2. Application Viability: Long confirmations can make some parachain dApps impractical, hindering innovation and blockchain utility.
3. Competition: Faster confirmation networks gain a competitive edge. Investigating and resolving confirmation time issues is crucial for blockchain sustainability.
4. Optimization: Studying confirmation times offers a chance to optimize consensus and block finalization, introducing sub-consensus mechanisms for speed and security.
5. User Incentives: Understanding how incentives like bonding stakes and rewards influence user behavior is vital for robust blockchain protocol design.
#### Hypothesis
The research hypothesis for this proposal could be formulated as follows:
"Hypothesis: Introducing an opt-in sub-consensus mechanism for parachain collators, where they can achieve consensus among themselves on the 'best' block, will significantly reduce confirmation times for parachain dApps. This mechanism, which may include bonding stakes and rewards, will provide a faster and more efficient way for parachain applications to see quasi-finalized blocks. However, it is expected that this sub-consensus mechanism may occasionally diverge from the outcomes on the relay chain, leading to potential reorganizations.
In other words, the hypothesis suggests that by allowing collators to participate in a sub-consensus mechanism, it will speed up block finalization for parachain dApps, but it may also introduce some level of divergence from the main relay chain consensus. Further research and experimentation would be needed to test this hypothesis and determine the actual impact on confirmation times and the reliability of the proposed sub-consensus mechanism.

We plan to conduct the research in the following manner:
1. Literature Review:Conduct a comprehensive review of existing literature and research related to parachains, consensus mechanisms, and blockchain scalability. This will help you understand the existing challenges and potential solutions.
2. System Design:Collaborate with blockchain developers and experts to design the sub-consensus mechanism module and the associated bonding and reward system.
3. Data Analysis:Analyze the data collected during the experiments. Measure the confirmation times for parachain dApps with and without the sub-consensus mechanism. Assess the frequency and impact of divergences from the relay chain consensus.
4. Simulation Environment:Create a simulation environment that mimics the behavior of a real parachain network and its interaction with the relay chain. You can use blockchain simulation tools like Substrate or custom-built simulators.
5. Statistical Testing:Use statistical tests to determine if the observed differences in confirmation times are statistically significant. This will help validate or refute the hypothesis.
6. Conclusion and Reporting:Summarize the findings of the research and experiments. Discuss whether the hypothesis was supported or rejected and provide insights into the trade-offs between confirmation times and divergence from the relay chain consensus.
7. Future Work:
    1. Implementation:Develop and implement the proposed sub-consensus mechanism within the simulation environment. Ensure that it can be opt-in for collators, and includes the bonding and reward components.
    2. Experimentation:Run a series of experiments within the simulation environment, simulating various scenarios and workloads. Vary parameters such as the size of the bonding stake and reward mechanisms.
    3. Data Collection:Collect data on confirmation times for parachain dApps in the absence of the proposed sub-consensus mechanism. This will serve as a baseline for comparison.
    4. Adjustments and Optimization:Based on the findings and feedback, we will make necessary adjustments to the sub-consensus mechanism's parameters and design and optimize it for better performance and reliability.
    5. Suggest potential future research directions and improvements for the sub-consensus mechanism or alternative approaches

### **It's important to note that this methodology involves a combination of theoretical research, software development, and experimentation. The results and conclusions will be crucial in determining the viability and effectiveness of the proposed sub-consensus mechanism for parachain dApps.We'll continue our research to figure out which one works best for our specific needs.**

#### Data Collection Procedure:
1. Baseline Data (Without Sub-Consensus Mechanism): Collect data on confirmation times for parachain dApps without the sub-consensus mechanism in place. This data serves as a reference point for comparison.
2. Experimental Data (With Sub-Consensus Mechanism): Conduct experiments in your simulation environment with the sub-consensus mechanism enabled Record confirmation times for parachain dApps in this experimental setup
3. Parameter Variation: Run experiments with different parameters related to the sub-consensus mechanism, such as:
    a. Bonding stake amounts (varying from low to high values)
    b. Reward mechanisms (e.g., fixed rewards, proportional to stake)
    c. Participation rates of collators (e.g., from minimal participation to full participation)
    d. Divergence scenarios (simulate scenarios where the sub-consensus diverges from relay chain consensus
4. Data Points to Collect: For each experiment, record the following data points:
    a. Timestamp of block production by parachain collators.
    b. Timestamp of block finalization on the relay chain.
    c. Confirmation time (finalization time - block production time).
    d. Any occurrences of reorganizations or divergences from relay chain consensus
    e. Bonding stakes and rewards for participating collators.
5. Data Analysis Procedure:
Data Cleaning:Clean the collected data to remove outliers and ensure data integrity

Descriptive Statistics:Calculate basic descriptive statistics for confirmation times, including mean, median, standard deviation, and percentiles. Compare these statistics between the baseline and experimental data.

Statistical Testing:Perform statistical tests (e.g., t-tests, ANOVA) to determine if the differences in confirmation times between the baseline and experimental data are statistically significant. This helps assess whether the sub-consensus mechanism has a significant impact on confirmation times.

Divergence Analysis:Analyze the occurrences of reorganizations or divergences from relay chain consensus in the experimental data. Assess the frequency and impact of these divergences on the overall system reliability.

Parameter Sensitivity Analysis:Analyze how changes in the sub-consensus mechanism's parameters (e.g., bonding stake amounts, reward mechanisms) affect confirmation times. Identify optimal parameter settings for desired outcomes.

Conclusion and Recommendations:Summarize the findings from the data analysis.
Draw conclusions regarding the effectiveness of the sub-consensus mechanism in reducing confirmation times while considering potential trade-offs.
Provide recommendations for optimizing the sub-consensus mechanism or addressing any identified issues.

Visualization:Create visualizations (e.g., charts, graphs) to present key findings and trends in the data to make it more accessible to a broader audience.

#### Following are the expected results and ways the grants team can double-check the data analysis for reproducibility:
##### Expected Results:
1. Confirmation Time Reduction: The expected result is a reduction in confirmation times for parachain dApps when the sub-consensus mechanism is enabled compared to the baseline (without the mechanism). This reduction should be statistically significant.
2. Impact of Parameters: Insights into how different parameters of the sub-consensus mechanism (e.g., bonding stake amounts, reward mechanisms) affect confirmation times. Identify optimal parameter settings for desired outcomes.
3. Divergence Analysis: Understanding the frequency and impact of divergences or reorganizations from relay chain consensus when the sub-consensus mechanism is active. This helps assess the reliability of the proposed mechanism.
4. User Feedback: Feedback from users and collators regarding their experiences, satisfaction, and any issues encountered while participating in the sub-consensus mechanism.
##### Reproducibility:
1. Detailed Documentation:The research team should provide comprehensive documentation of the entire research process, including data collection, analysis scripts, and parameters used in experiments. This documentation should be made available to the grants team.
2. Open Source Code and Tools:Share open-source code and tools used for data collection and analysis on a platform like GitHub. This allows the grants team to review the code and rerun the analysis to verify results.
3. Data Availability:Ensure that the raw data collected during experiments is accessible to the grants team. This allows them to verify calculations and conduct their analysis if necessary.
4. Methodology Transparency:Clearly outline the methodology, statistical tests, and assumptions made during the analysis. Explain how statistical significance was determined.
5. Peer Review:Encourage peer review of the research by experts in the field. Peer review helps validate the analysis and findings independently.
6. Independent Replication:The grants team can attempt to replicate the experiments using the provided documentation, code, and raw data. Replicating the results independently ensures consistency.
7. External Audit:If the research is deemed critical and high-impact, the grants team can consider commissioning an external audit or review by third-party experts to verify the research findings.
8. Feedback Gathering:The grants team can also solicit feedback from the broader blockchain community and experts in the field. External feedback can provide additional perspectives and insights.
9. Reproducibility Checklist:Develop a checklist or guideline for the grants team to follow when reviewing research proposals. This checklist can include items related to data availability, code transparency, and methodological details.
10. Transparency Reports:Require the research team to submit transparency reports that detail their efforts to ensure reproducibility. These reports should include information on data sources, code repositories, and any challenges encountered during the research process.
### Ecosystem Fit
- Quicker Finalization: The sub-consensus module expedites the process of reaching consensus within a parachain. In traditional blockchain networks like Polkadot, the global consensus process on the relay chain can be relatively slow due to its complexity, involving validators from across the network. The sub-consensus module allows parachains to reach consensus among their own collators more swiftly, leading to faster confirmation times for transactions and blocks within that specific parachain.
- Parachain Autonomy: Each parachain in the ecosystem typically serves a distinct purpose or use case. By implementing a sub-consensus mechanism, each parachain can have autonomy over its consensus process. This means that the parachain can independently determine the validity and finality of its own transactions and blocks without relying entirely on the slower relay chain consensus. This autonomy is critical for maintaining the unique characteristics and requirements of each parachain.
- Customized Consensus Rules: Different parachains might have diverse consensus requirements. For instance, a parachain used for a high-frequency trading application may prioritize low-latency block finalization, while a privacy-focused parachain may require specialized consensus rules. The sub-consensus module enables parachains to define and implement their own consensus rules tailored to their specific use cases. This customization is vital for optimizing the performance of individual parachains.
- Resilience and Isolation: The sub-consensus mechanism enhances the resilience of individual parachains. If one parachain faces issues or disruptions, it won't necessarily impact the consensus process on other parachains or the relay chain. This isolation helps maintain the overall stability and security of the broader blockchain ecosystem, ensuring that issues in one parachain do not cascade across the entire network.
## Team :busts_in_silhouette:
### Team members
- Shubham Gupta (Team Lead)
- Upendra Singh (Developer)
- Ipsa Gupta (Developer)
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
### Google Scholar Profiles (Or other research indexer profile, ex. Researchgate)
- [Shubham Gupta](https://scholar.google.com/citations?user=13I0w4UAAAAJ&hl=en&authuser=1)
## Development Status :open_book:
Research has been started on this, however there is nothing to show as of now. Our main resourse for now is the official [Polkadot documentation](https://wiki.polkadot.network/docs/learn-parachains-protocol).
## Development Roadmap :nut_and_bolt:
### Overview
- **Total Estimated Duration:** 3 Months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 20,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | Copyright and Licenses | CC0 / CC BY 4.0 / Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation/Tutorial | We will provide both **artifacts documentation** of the deliverables and a basic **tutorial** that explains how a user can visualize data or use any artifacts included. |
| **0c.** | Methodology | Detailed explanation of how the results were achieved and how to reproduce/verify the results. |
| **0d.** | Infrastructure | We will provide the list of all infrastructure requirements (text editors with proper versions, software packages, data packages, etc) that can be used to verify the deliveries with this milestone. |
| **0e.** | Article | We will send an **article** or part of it (with source code) that explains in the English language [...]  For level 2 and 3 grants, the article must contain the following statement in an acknowledgments section:  This work was supported by a research grant from the Web3 Foundation. |
| 1. | List of academic papers regarding finality in parachain ecosystem | We will systematically search the literature on block finality and deliver a list of papers to read with web links to them |
| 2. | Data to be extracted from the papers | Data fields with the explanation of each that will be extracted from the papers ... |
| 3. | Analysis procedures | We gonna describe all the procedures planned for the analysis that will be conducted in the next milestone ... |
## Future Plans
We're currently working on a Layer 0 blockchain, known as a peer chain. Our main research objective is to find ways to make block finality more efficient and reliable within this chain. Ultimately this will be vital for the Substrate Ecosystem.
## Additional Information :heavy_plus_sign:
**How did you hear about the Grants Program?** Grants Portal
We are currently working on 2 more grants. For each of these grants we have delivered the first milestone successfully. Following are the links to the files:
1. [Grant Management Webapp](https://github.com/w3f/Grants-Program/blob/master/applications/Grant_management_webapp.md)
2. [Security Marketplace](https://github.com/w3f/Grants-Program/blob/master/applications/Security_Marketplace.md)
After this milestone we will submit a different proposal for the development of the POC for the same.