# MobilePolka: Unveiling Polkadot's Depths on the Go

> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Datascience computing plc
- **Payment Address:** In the case of fiat payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and enter the date when you shared the information with us (e.g. Fiat 24.12.1971, 11:59) here. Otherwise, provide the Polkadot (for USDC & USDT) payment address. Please also specify the currency. (e.g. 0x8920... (USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Our project aims to develop the Polkadot Explorer mobile app, providing users with a seamless and intuitive platform to explore and analyze the Polkadot blockchain. With comprehensive features spanning from epoch information to stake pool analytics, our app enhances accessibility and understanding of blockchain data.

Our project integrates deeply with the Polkadot ecosystem, leveraging Substrate technology to access and analyze blockchain data. By providing a mobile interface for exploring Polkadot's blockchain, we contribute to the ecosystem's accessibility and usability.

Our team is passionate about blockchain technology and its potential to revolutionize various industries. We believe in the vision of decentralized networks like Polkadot and are excited to contribute to its growth by providing users with powerful tools for exploring and understanding blockchain data on the go.

### Project Details

Our solution, the Polkadot Explorer mobile app, is designed to provide a holistic and user-friendly exploration of the Polkadot blockchain. It encompasses a range of features catering to various aspects of blockchain analysis:
Blockchain Overview:
1. Block Analysis:
**Block detail**: Identify and display blocks containing transactions, allowing users to explore the details of specific blocks.
**Block Height**: Show the height of each block, aiding users in tracking the blockchain's structural integrity.
**Block Extrinsics and Events**: Highlight the blocks with the Extrinsics and Events activity, offering insights into network variability.
**Block History**: Provide a historical record of blocks, enabling users to analyze the blockchain's evolution over time.
2. Transaction Analysis:
Circulating Supply: Real-time information on the total supply of USDT in circulation, contributing to a comprehensive understanding of the market.
Transactions Amount in USDT: Display the total value of transactions in USDT for the current epoch, aiding in the assessment of network activity.
Fees: Showcase transaction fees incurred during the epoch, providing transparency on the cost of network transactions.
Transactions: Present the total number of transactions conducted within the epoch, giving users an indication of network throughput.
2. Epoch Information:
* Epoch Number: Display the current epoch number, providing users with real-time information on the current state of the blockchain.
* Epoch Slot Number: Show the current slot number within the epoch, aiding users in understanding the blockchain's temporal progression.
Slot Number: Display the current slot number, allowing users to track the blockchain's activity at a granular level.
Epoch History: Provide a historical overview of past epochs, enabling users to analyze trends and patterns.
Stakeholder and Pool Metrics:
Epoch Stake: Showcase the total stake for the current epoch, providing insights into the network's overall staking activity.
Active Stake: Display the stake actively participating in the network, distinguishing it from inactive or dormant stake.
Pools with Stake: List stake pools along with their respective stake, giving users an overview of the distribution of staking across different pools.
Additional Block Metrics:
Max Block Epoch: Identify the epoch with the maximum block production, helping users understand periods of heightened blockchain activity.
Min Block Epoch: Identify the epoch with the minimum block production, contributing to an understanding of network stability.
Avg Block: Present the average block production per epoch, aiding users in assessing the network's baseline performance.
Block Size Analysis:
Max Block Size and Min Block Size: Highlight blocks with the maximum and minimum sizes, providing insights into the network's capacity and variability.
Sum Block Size: Display the total size of blocks within the epoch, contributing to an understanding of overall network load.
Blocks with Transactions: Identify blocks containing transactions, allowing users to focus on periods of heightened activity.

Token Explorer:
Token Policy:
Policy Information: Display details about the token's policy, including its parameters and rules governing its creation and distribution.
Policy Met USDTta: Provide additional met USDTta associated with the token policy, contributing to a more comprehensive understanding of its purpose.
Asset Details:
Asset Name: Present the human-re USDTble name assigned to the token, aiding users in quickly identifying and referencing the token.
Asset Name Hex: Display the hexadecimal representation of the asset name, offering a unique identifier for technical purposes.
Supply Information:
Token Supply: Showcase the total supply of the token in circulation, providing insights into its overall distribution and scarcity.
Circulating Supply: Display the portion of the token supply actively in circulation, helping users understand the market dynamics.
Transaction History:
First Transaction: Identify the initial transaction involving the token, indicating its inception and the address where it was first sent or received.
First Transaction Time: Display the timestamp of the token's first transaction, allowing users to trace its historical activity.
Last Transaction: Highlight the most recent transaction involving the token, providing insights into its recent usage.
Last Transaction Time: Present the timestamp of the token's last transaction, aiding users in tracking recent engagement.

Account and Address Analysis:
General Information:
Balance: Display the current balance of USDT and tokens associated with the account, allowing users to quickly assess the account's financial status.
Token Holdings: Provide a breakdown of the various tokens held in the account, contributing to a comprehensive overview of the user's portfolio.
Transactions Count: Showcase the total number of transactions conducted by the account, indicating its historical activity.
First Activity: Highlight the date of the account's first recorded activity, offering insights into its inception.
Last Activity: Display the date of the account's most recent activity, aiding users in tracking recent engagement.
Rewards Information:
Earned Rewards: Show the total rewards earned by the account over its history, providing a measure of its overall contribution to the network.
Unspent Rewards: Display the rewards that have not yet been claimed or spent, contributing to an understanding of the account's financial choices.
First Rewards: Identify the epoch when the account first started earning rewards, allowing users to track its participation from inception.
Latest Rewards: Display the epoch of the account's most recent rewards, indicating ongoing engagement.
Epochs with Rewards: Present a historical record of epochs during which the account received rewards, aiding users in identifying patterns of active engagement.
Delegation Metrics:
Current Epoch Delegation: Show the stake delegated by the account in the current epoch, providing real-time information on its current involvement.
Active Stake: Display the stake actively participating in the network, indicating the account's influence on the ongoing epoch.
Next Epoch Delegation: Provide information on the account's planned delegation for the next epoch, allowing users to anticipate changes.
Next Active Stake: Display the projected stake actively participating in the network in the next epoch, aiding users in planning their delegation strategy.
Epoch: Highlight the epoch during which the account's delegation information is relevant, contributing to a contextual understanding of the data.

Stake Pool Analytics:
Financial Metrics:
Margin: Display the margin percentage set by the stake pool operator, indicating the portion of rewards retained by the pool.
Fixed Cost: Showcase the fixed cost associated with delegating to the stake pool, providing insights into the pool's fee structure.
Pledge: Present the amount of USDT pledged to the stake pool by the operator, contributing to an understanding of the operator's commitment.
Delegation Metrics:
Delegators: Display the total number of delegators actively contributing to the stake pool, indicating its level of community support.
Active Stake: Showcase the stake actively delegated to the pool, aiding users in assessing its current influence.
Active Pool Size: Present the pool's current size based on active stake, contributing to insights into its competitiveness.
Active Saturation: Display the saturation level based on active stake, indicating the pool's capacity to produce blocks.
Stake Pool Details:
Live Stake: Show the total live stake, combining both active and inactive stakes, providing a holistic view of the pool's influence.
Leverage: Present the leverage ratio, indicating the pool's capacity to produce blocks relative to its live stake.
Pool Registration Date: Highlight the date when the stake pool was registered, offering insights into its historical presence.
Block Production and Performance:
Epochs with Block: Identify the epochs during which the pool successfully produced blocks, indicating its active participation.
Lifetime Blocks: Display the total number of blocks produced by the stake pool over its operational lifetime.
Lifetime Luck: Present the luck factor over the pool's lifetime, providing insights into its block production performance.
Rewards and Returns:
Pool Fee: Showcase the fee percentage charged by the stake pool, contributing to users' decision-making regarding delegation.
Total Rewards: Display the cumulative rewards earned by the stake pool, indicating its overall success.
Lifetime Return on Stake (ROS): Present the return on stake percentage over the pool's lifetime, aiding users in assessing its historical performance.
Identification and Hashing:
Pool Hash: Display the hash representation of the stake pool's public key, uniquely identifying it on the blockchain.
Pool ID: Present the stake pool's identification string, facilitating easy reference and delegation.


Unique Aspects:
Live Data Updates: Real-time updates ensure users have access to the latest information, reflecting the dynamic nature of the Polkadot blockchain.
User-Friendly Interface: The app prioritizes an intuitive design, making blockchain data accessible to users with varying levels of expertise.
Educational Resources: Embedded educational content provides insights into blockchain concepts, enhancing user understanding.
Benefits:
Comprehensive Analysis: Users can perform detailed analyses of epochs, blocks, transactions, accounts, addresses, and stake pools, fostering a deeper understanding of the Polkadot ecosystem.
User Empowerment: The app empowers users, developers, and stakeholders by providing a robust set of tools for blockchain exploration and analysis.
Community Engagement: Features such as stake pool analytics encourage community engagement, supporting Polkadot's decentralized and collaborative ethos.
Impact Demonstration:
Usage Metrics: Monitor user engagement with different features to understand which aspects of the blockchain are most relevant to the community.
Feedback Channels: Establish channels for community feedback, ensuring continuous improvement based on user suggestions and preferences.
Our solution strives to create a comprehensive Polkadot Explorer mobile app that goes beyond standard functionalities, catering to the diverse needs of the Polkadot community and blockchain enthusiasts at larg


### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
- What need(s) does your project meet?
- How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - If so, how is your project different? Please identify and assess any projects addressing the same need and explain how your project is distinct. Feel free to include applicable research data, statistics, or metrics.
  - If not, please indicate why such a project might not have been possible, successful, or attempted. 
- Are there any projects similar to yours in related ecosystems? 

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. john@duo.com)
- **Website:** Your website

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/<your_organisation>/<project_1>
- https://github.com/<your_organisation>/<project_2>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_1>
- https://github.com/<team_member_2>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_1>
- https://www.linkedin.com/<person_2>


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../docs/Support%20Docs/grant_guidelines_per_category.md). Since these will be part of the agreement, it helps to describe *the functionality we should expect in as much detail as possible*, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We *recommend* that teams structure their roadmap as 1 milestone ≈ 1 month.

> :exclamation: If any of your deliverables are based on somebody else's work, make sure you work and publish *under the terms of the license* of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! **Projects that submit other people's work without proper attribution will be immediately terminated.**

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language, and medium should reflect your target audience described above.) |
| 1. | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be implemented for the first milestone. You can refer to details provided in previous sections.) |
| 2. | Substrate module: Y | The Y Substrate module will... |
| 3. | Substrate module: Z | The Z Substrate module will... |
| 4. | Substrate chain | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: ABC | We will deliver a JS library that will implement the functionality described under "ABC Library" |
| 6. | Smart contracts: ... | We will deliver a set of ink! smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to finance the project's long-term maintenance and development,
- how you intend to use, enhance, and promote your project in the short term, and
- the team's long-term plans and intentions in relation to it.

## Referral Program (optional) :moneybag:

You can find more information about the program [here](../README.md#moneybag-referral-program).

- **Referrer:** Name of the Polkadot Ambassador or GitHub account of the Web3 Foundation grantee
- **Payment Address:** Polkadot/Kusama (USDT/USDC) payment address. Please also specify the currency. (e.g. 0x8920... (USDT))

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
