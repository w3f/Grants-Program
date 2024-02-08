# MobilePolka: Unveiling Polkadot's Depths on the Go

> This document will be part of the terms and conditions of your agreement and, therefore, needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g., `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Datascience computing plc
- **Payment Address:** In the case of fiat payment, please share your bank account privately with grants@web3.foundation via your contact email (see below) and enter the date when you shared the information with us (e.g. Fiat 24.12.1971, 11:59) here. Otherwise, provide the Polkadot (for USDC & USDT) payment address. Please also specify the currency. (e.g. 0x8920... (USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

Our project aims to develop the Polkadot Explorer mobile app, providing users with a seamless and intuitive platform to explore and analyze the Polkadot blockchain. With comprehensive features spanning from Event information to stake pool analytics, our app enhances accessibility and understanding of blockchain data.

Our project integrates deeply with the Polkadot ecosystem, leveraging Substrate technology to access and analyze blockchain data. By providing a mobile interface for exploring Polkadot's blockchain, we contribute to the ecosystem's accessibility and usability.

Our team is passionate about blockchain technology and its potential to revolutionize various industries. We believe in the vision of decentralized networks like Polkadot and are excited to contribute to its growth by providing users with powerful tools for exploring and understanding blockchain data on the go.

### Project Details

Our solution, the Polkadot Explorer mobile app, is designed to provide a holistic and user-friendly exploration of the Polkadot blockchain. It encompasses a range of features catering to various aspects of blockchain analysis:
#### Blockchain Overview:
##### Block Analysis:
- **Block detail**: Identify and display blocks containing transactions, allowing users to explore the details of specific blocks.
- **Block Information**: Show block information in detail. The information includes but not limited to block id, timestamp, hash, parent hash, state root, extrinsics root, extrinsics count, events count, and runtime.
- **Block Height**: Show the height of each block, aiding users in tracking the blockchain's structural integrity.
- **Block Extrinsics**: Highlight the blocks with the Extrinsics Module and Call, offering insights into extrinsics variability.
- **Block Events**: Highlight the blocks with the Events list, offering insights into each event.
- **Block History**: Provide a historical record of blocks, enabling users to analyze the blockchain's evolution over time.

##### Transaction Analysis:
- **Transfer Detail**: Real-time information on the transfer of DOT in circulation, contributing to a comprehensive understanding of the market.
- **Transactions Amount in DOT**: Display the total value of transactions in DOT, aiding in the assessment of network activity.
- **Attributes**: Showcase transaction attributes incurred during the transfer, providing transparency of the network transactions.
- **Transactions**: Present the total number of transactions conducted within the Block, giving users an indication of network throughput.
- **Search Transfers**: Show transfers in order by Date range, Block start, Block end, and Account.

##### Event Information:
- **Event list**: Identify and display events list, allowing users to explore the details of specific events.
- **Event Information**: Show event information in detail. The information includes but not limited to event id, timestamp, extrinsic, pallet, and event name.
- **Event Number**: Display the current Event number, providing users with real-time information on the current state of the blockchain.
- **Event Extrinsic Number**: Show the extrinsic number within the Event, aiding users in understanding the blockchain's temporal progression.
- **Runtime ID**: Display the runtime number, allowing users to track the blockchain's activity at a granular level.
- **Event History**: Provide a historical overview of past events, enabling users to analyze trends and patterns.
- **Search Events**: Show events in order by Date range, Block start, Block end, and Account.

##### Extrinsics Analysis:
- **Extrinsics list**: Identify and display extrinsics list, allowing users to explore the details of specific extrinsics.
- **Extrinsics Information**: Show extrinsics information in detail. The information includes but not limited to extrinsics id, timestamp, block, pallet, call, and signed status.
- **Extrinsics Events**: Highlight the extrinsics with the Events list with event id, pallet and event name data's, offering insights into events in detail.
- **extrinsics History**: Provide a historical record of extrinsics, enabling users to analyze the extrinsicschain's evolution over time.
- **Filter Extrinsics**: Show extrinsics in order by Date range, Block start, Block end, and Account.



#### Account and Address Analysis:
##### General Information:
- **Balance**: Display the current balance of DOT associated with the account, allowing users to quickly assess the account's financial status.
- **Balance Status**: Display Total, Free, Transferable, Locked, Reserved, Redeemable, Bonded and Unbonding balance of the account.
- **Events**: Provide a breakdown of the various events held in the account, contributing to a comprehensive overview of the user's portfolio.
- **Transactions List**: Showcase the list of transactions conducted by the account, indicating its historical activity.
- **Signed Extrinsics**: Highlight the signed extrinsics of the account's recorded activity, offering insights into its inception.
- **Last Activity**: Display the date of the account's most recent activity, aiding users in tracking recent engagement.

##### Rewards Information:
- **Earned Rewards**: Show the total rewards earned by the account over its history, providing a measure of its overall contribution to the network.
- **Unspent Rewards**: Display the rewards that have not yet been claimed or spent, contributing to an understanding of the account's financial choices.
- **First Rewards**: Identify the block when the account first started earning rewards, allowing users to track its participation from inception.
- **Latest Rewards**: Display the block of the account's most recent rewards, indicating ongoing engagement.
- **Reward Amount in DOT**: Display the rewarded value of staking in DOT, aiding in the assessment of network activity.



#### Runtime Explorer:
##### General Information:
- **Runtime Lists**: Display list of runtimes, including its name, version, number of pallets, events, call functions storage functions and constants.
- **Runtime Pallets List**: Provide additional informations associated with the runtime, contributing to a more comprehensive understanding.
##### Pallet Details:
- **Pallet Name**: Present the human readable name assigned to the pallet, aiding users in quickly identifying and referencing the pallet.
- **Pallet Call Functions**: Display list of name, lookup and arguments of call functions of the pallet, offering a unique identifier for technical purposes.
- **Pallet Events**: Display list of name, lookup and arguments of events of the pallet, offering a unique identifier for technical purposes.
- **Pallet Storage Functions**: Display list of name, and type of storage functions of the pallet.
- **Pallet Constants**: Display list of name, type, and value of constants of the pallet.
Supply Information:
- **Pallet Error Messages**: Display list of name, index, and documentation of error messages of the pallet for technical purposes.

### Unique Aspects:
- **Live Data Updates**: Real-time updates ensure users have access to the latest information, reflecting the dynamic nature of the Polkadot blockchain.
- **User-Friendly Interface**: The app prioritizes an intuitive design, making blockchain data accessible to users with varying levels of expertise.
### Benefits:
- **Comprehensive Analysis**: Users can perform detailed analyses of events, blocks, transactions, accounts, and addresses, fostering a deeper understanding of the Polkadot ecosystem.
- **User Empowerment**: The app empowers users, developers, and stakeholders by providing a robust set of tools for blockchain exploration and analysis.
- **Community Engagement**: Features such as reward detail analytics encourage community engagement, supporting Polkadot's decentralized and collaborative ethos.
### Impact Demonstration:
- **Usage Metrics**: Monitor user engagement with different features to understand which aspects of the blockchain are most relevant to the community.
- **Feedback Channels**: Establish channels for community feedback, ensuring continuous improvement based on user suggestions and preferences.


Our solution strives to create a comprehensive Polkadot Explorer mobile app that goes beyond standard functionalities, catering to the diverse needs of the Polkadot community and blockchain enthusiasts at larg


### Dependency

Our project will be dependent on the official Polkadot Explorer site or related sites for API. The dependency on this API is essential for obtaining real-time and accurate blockchain data, which is crucial for the functionality and success of our Polkadot Explorer mobile app. We acknowledge the significance of this external resource and will ensure compliance with any usage terms and conditions set by the platforms.

### Ecosystem Fit

- **Where and How**: Our project, the Polkadot Explorer mobile app, fits into the Polkadot ecosystem by providing a mobile interface for users to explore and analyze blockchain data. It integrates with Substrate technology to access real-time data from the Polkadot network, offering a comprehensive view of network activities.

- **Target Audience**: Our target audience includes blockchain enthusiasts, investors, developers, and stakeholders within the Polkadot community. Additionally, it targets users seeking accessible and user-friendly tools for exploring blockchain data on their mobile devices.

- **Meeting Needs**: Our project meets the need for accessible and user-friendly tools for blockchain analysis on mobile platforms. This need was identified through discussions within the Polkadot community, feedback from users seeking mobile solutions, and observations of the increasing demand for mobile access to blockchain data.

- **Differentiation**: While there are existing projects in the Polkadot ecosystem that provide blockchain analysis tools, our project stands out by focusing specifically on mobile accessibility and user experience. Other projects may offer similar functionalities, but our emphasis on intuitive design, real-time updates, and comprehensive features sets us apart.

- **Similar Projects**: There are indeed other projects in the Polkadot ecosystem offering blockchain analysis tools, such as desktop applications and web platforms. However, our project distinguishes itself by catering specifically to mobile users, filling a gap in the market for on-the-go access to blockchain data. In related ecosystems, there may be similar projects, but our focus on Polkadot and mobile accessibility makes us unique in our niche.

- **Availability**: The Polkadot Explorer mobile app will be published on Google Play, ensuring widespread accessibility to Android users. This platform choice aligns with our goal of reaching a broad audience and making blockchain exploration convenient for mobile users.

## Team :busts_in_silhouette:

> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Esubalew Amenu
- **Contact Email:** esubalew.a2009@gmail.com
- **Website:** [DataScience plc](https://datascienceplc.com)

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Name of your registered legal entity, if available. (e.g. Duo Ltd.)

### Team's experience

#### Our Capability:
- **Track Record**: Our previous mobile app projects showcase our proficiency, with successful applications boasting high download numbers (100,000+) and active user engagement(50,000+).
- **Collaboration**: We've established a reputation for collaboration, evident in our partnerships with industry leaders. We have been recognized by prominent entities, aligning with our commitment to excellence in software development. Our project has joined Microsoft for Startups Founders Hub with a mix of 38 technical benefits and business resources.

- **Software Development Expertise**: Our team comprises skilled professionals experienced in blockchain, mobile app, and web system development.
Demonstrated success in delivering diverse technical projects with positive user outcomes.
In-depth understanding of blockchain technologies, particularly tailored to Polkadot's ecosystem.
- **Open Source Engagement**: Active contributors to open-source projects, showcasing our dedication to collaborative development and knowledge sharing within the developer community.
- **Project Management Skills**: Proven project management capabilities demonstrated by the successful development and deployment of impactful systems.
Our project is led by individuals holding BSc, MSc, and BA degrees, along with recognized certifications.
#### Feasibility Validation:
- **Technical Prototyping**:Initiated the development of a technical prototype, providing a tangible demonstration of key features for the proposed Polkadot Explorer and Analytics app.
- **API Integration Tests**:Conducting rigorous integration tests with relevant APIs to ensure seamless real-time data retrieval, contributing to the reliability of our solution.
- **Continuous Evaluation and adaptation**:Implementing an iterative approach to development, allowing us to continuously adapt the solution based on real-time user feedback and evolving technology trends.

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
- **Description**: An intuitive Polkadot Explorer mobile app, empowering users to seamlessly analyze blockchain data, enhancing accessibility and understanding.
- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** 10,000 USD

### Milestone 1 — API Endpoint Preparation

- **Estimated duration:** 2 weeks
- **FTE:**  1.5
- **Costs:** 2,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Comprehensive Documentation covering: - Configuration setup for Postman environment - Detailed descriptions of each API endpoint and its purpose - Instructions for using environment variables and dynamic configurations - Explanation of request headers, authentication methods, and other parameters - Testing guide with step-by-step instructions for validating API requests |
| **0c.** | Testing and Testing Guide | Testing guide to ensure the functionality and reliability of API requests: - Step-by-step instructions for conducting manual tests within Postman environment - Criteria for validating responses and verifying data accuracy - Instructions for setting up automated tests if applicable - Guidelines for handling and reporting issues or discrepancies encountered during testing |
| **0d.** | Docker | There will be no dockerfile at this stage, we will share the postman collection instead that can be used to test all the endpoints delivered with this milestone. |
| 1. | Configuration | Set up Postman environment - Define configuration for API endpoints including environment variables - Specify configurations for each API endpoint including chain endpoint sections and methods, authentication keys, and other necessary parameters. |
| 2. | Polkadot API Integration | Implement Polkadot API integration in Postman - Set up requests for accessing Polkadot blockchain data including blocks, transactions, accounts, and other relevant information. |
| 3. | Documentation | Document API specifications, including request and response formats - Include detailed descriptions of each API endpoint, parameters, and expected outputs.

### Milestone 2 — Core Feature Development and Alpha Release

- **Estimated duration:** 2 weeks
- **FTE:**  1.5
- **Costs:** x,000 USD

> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated Documentation covering: - Additions to the existing documentation from Milestone 1 - Detailed descriptions of newly developed core features - Instructions for using and accessing new features within the Polkadot Explorer mobile app - Testing guide updated to include testing procedures for newly added features |
| **0c.** | Testing and Testing Guide | Updated Testing guide to ensure the functionality and reliability of newly developed core features: - Step-by-step instructions for conducting manual tests within the Polkadot Explorer mobile app - Criteria for validating responses and verifying data accuracy - Instructions for setting up automated tests if applicable - Guidelines for handling and reporting issues or discrepancies encountered during testing |
| **0d.** | Docker | There will be no dockerfile at this stage, we will share the documentation how users can test it on emulator or on their mobile phone. |
| 1. | Core Feature Development | - Implement core features identified in the project proposal: - Blockchain overview functionalities, Account and Address Analysis functionalities, and Runtime Explorer - Ensure seamless integration of features with the Polkadot Explorer mobile app architecture. |
| 2. | Internal Testing and QA | Conduct thorough testing of newly developed core features - Ensure functionality, usability, and performance meet project requirements - Identify and resolve any bugs or issues encountered during testing. |
| 3. | Alpha Release Preparation | Prepare the Polkadot Explorer mobile app for alpha release on Google Play Store: - Compile the app build with newly developed core features integrated - Set up alpha testing environment on Google Play Developer Console - Perform internal testing of the alpha build to ensure stability and functionality. |
| 4. | Alpha Release Deployment | Deploy the alpha version of the Polkadot Explorer mobile app on Google Play Store for limited community testing: - Submit the alpha build to Google Play Developer Console - Configure alpha testing settings and permissions - Notify selected testers and provide access instructions. 



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
