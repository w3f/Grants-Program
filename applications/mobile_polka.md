# MobilePolka: Unveiling Polkadot's Depths on the Go

- **Team Name:** Datascience computing plc
- **Payment Address:** 144DdTtMC5mymcowKrrDy2iCUb5f2VUatBwNrmzXMjkAFJuG (USDT - Polkadot Network)
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

![](https://drive.google.com/uc?export=view&id=1Y1Uvy74xaNiMB7QQ3ucLzNYsQspDaBR3)

![](https://drive.google.com/uc?export=view&id=1DxLA__kq3RphjruQP4pvQTYL99EeiugX)

##### Transaction Analysis:
- **Transfer Detail**: Real-time information on the transfer of DOT in circulation, contributing to a comprehensive understanding of the market.
- **Transactions Amount in DOT**: Display the total value of transactions in DOT, aiding in the assessment of network activity.
- **Attributes**: Showcase transaction attributes incurred during the transfer, providing transparency of the network transactions.
- **Transactions**: Present the total number of transactions conducted within the Block, giving users an indication of network throughput.
- **Search Transfers**: Show transfers in order by Date range, Block start, Block end, and Account.

![](https://drive.google.com/uc?export=view&id=1hcWMfG2JRrbfZpsEC3I9dqd6SO9Wx37w)

![](https://drive.google.com/uc?export=view&id=1YC4BJ89CFoHPzrDw5e3SqQeZDjWwaAGo)

##### Event Information:
- **Event list**: Identify and display events list, allowing users to explore the details of specific events.
- **Event Information**: Show event information in detail. The information includes but not limited to event id, timestamp, extrinsic, pallet, and event name.
- **Event Number**: Display the current Event number, providing users with real-time information on the current state of the blockchain.
- **Event Extrinsic Number**: Show the extrinsic number within the Event, aiding users in understanding the blockchain's temporal progression.
- **Runtime ID**: Display the runtime number, allowing users to track the blockchain's activity at a granular level.
- **Event History**: Provide a historical overview of past events, enabling users to analyze trends and patterns.
- **Search Events**: Show events in order by Date range, Block start, Block end, and Account.

![](https://drive.google.com/uc?export=view&id=1n7AV2-NBvwkNUqxLMhb33MuH5_I97GEZ)
![](https://drive.google.com/uc?export=view&id=1iGwjax5bQLg4E09Ou39aF4J_HDJxfgYa)

##### Extrinsics Analysis:
- **Extrinsics list**: Identify and display extrinsics list, allowing users to explore the details of specific extrinsics.
- **Extrinsics Information**: Show extrinsics information in detail. The information includes but not limited to extrinsics id, timestamp, block, pallet, call, and signed status.
- **Extrinsics Events**: Highlight the extrinsics with the Events list with event id, pallet and event name data's, offering insights into events in detail.
- **extrinsics History**: Provide a historical record of extrinsics, enabling users to analyze the extrinsicschain's evolution over time.
- **Filter Extrinsics**: Show extrinsics in order by Date range, Block start, Block end, and Account.

![](https://drive.google.com/uc?export=view&id=164ZcJ2p-le3qHF4uIjpX7MfstrlRS_xW)
![](https://drive.google.com/uc?export=view&id=1y-PXkBxXBFUIXI3DlpkDnIsy0u03uEo1)

#### Account and Address Analysis:
##### General Information:
- **Balance**: Display the current balance of DOT associated with the account, allowing users to quickly assess the account's financial status.
- **Balance Status**: Display Total, Free, Transferable, Locked, Reserved, Redeemable, Bonded and Unbonding balance of the account.
- **Events**: Provide a breakdown of the various events held in the account, contributing to a comprehensive overview of the user's portfolio.
- **Transactions List**: Showcase the list of transactions conducted by the account, indicating its historical activity.
- **Signed Extrinsics**: Highlight the signed extrinsics of the account's recorded activity, offering insights into its inception.
- **Last Activity**: Display the date of the account's most recent activity, aiding users in tracking recent engagement.

![](https://drive.google.com/uc?export=view&id=13tclYRPkL258sIVi5zW8p_I7vd3YBqKv)
![](https://drive.google.com/uc?export=view&id=1yu0jWXrI2Un2-zkALB3C8eJoENiwvoEJ)

##### Rewards Information:
- **Earned Rewards**: Show the total rewards earned by the account over its history, providing a measure of its overall contribution to the network.
- **Unspent Rewards**: Display the rewards that have not yet been claimed or spent, contributing to an understanding of the account's financial choices.
- **First Rewards**: Identify the block when the account first started earning rewards, allowing users to track its participation from inception.
- **Latest Rewards**: Display the block of the account's most recent rewards, indicating ongoing engagement.
- **Reward Amount in DOT**: Display the rewarded value of staking in DOT, aiding in the assessment of network activity.

![](https://drive.google.com/uc?export=view&id=1MsshD6hYLWyH7mU-5VhIXJ7hk-c_fCZS)
![](https://drive.google.com/uc?export=view&id=1uRZ3hiQRhF5wl7sqlvm6P2M556v35KQQ)

#### Runtime Explorer:
##### General Information:
- **Runtime Lists**: Display list of runtimes, including its name, version, number of pallets, events, call functions storage functions and constants.
- **Runtime Pallets List**: Provide additional informations associated with the runtime, contributing to a more comprehensive understanding.

![](https://drive.google.com/uc?export=view&id=1--XWsrd9CX9p64fWVQN9K0XYxw0hpuTw)
![](https://drive.google.com/uc?export=view&id=16pZdVBUD8IT1fZGHt2r3ZeLT8UEl3cSp)

##### Pallet Details:
- **Pallet Name**: Present the human readable name assigned to the pallet, aiding users in quickly identifying and referencing the pallet.
- **Pallet Call Functions**: Display list of name, lookup and arguments of call functions of the pallet, offering a unique identifier for technical purposes.
- **Pallet Events**: Display list of name, lookup and arguments of events of the pallet, offering a unique identifier for technical purposes.
- **Pallet Storage Functions**: Display list of name, and type of storage functions of the pallet.
- **Pallet Constants**: Display list of name, type, and value of constants of the pallet.
Supply Information:
- **Pallet Error Messages**: Display list of name, index, and documentation of error messages of the pallet for technical purposes.

![](https://drive.google.com/uc?export=view&id=1VmCeErO6YTLBnABJe2dCbaVLje1CnVsT)


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

### Ecosystem Fit

- **Where and How**: Our project, the Polkadot Explorer mobile app, fits into the Polkadot ecosystem by providing a mobile interface for users to explore and analyze blockchain data. It integrates with Substrate technology to access real-time data from the Polkadot network, offering a comprehensive view of network activities.

- **Target Audience**: Our target audience includes blockchain enthusiasts, investors, developers, and stakeholders within the Polkadot community. Additionally, it targets users seeking accessible and user-friendly tools for exploring blockchain data on their mobile devices.

- **Meeting Needs**: Our project meets the need for accessible and user-friendly tools for blockchain analysis on mobile platforms. This need was identified through discussions within the Polkadot community, feedback from users seeking mobile solutions, and observations of the increasing demand for mobile access to blockchain data.

- **Differentiation**: While there are existing projects in the Polkadot ecosystem that provide blockchain analysis tools, our project stands out by focusing specifically on mobile accessibility and user experience. Other projects may offer similar functionalities, but our emphasis on intuitive design, real-time updates, and comprehensive features sets us apart.

- **Similar Projects**: There are indeed other projects in the Polkadot ecosystem offering blockchain analysis tools, such as desktop applications and web platforms. However, our project distinguishes itself by catering specifically to mobile users, filling a gap in the market for on-the-go access to blockchain data. In related ecosystems, there may be similar projects, but our focus on Polkadot and mobile accessibility makes us unique in our niche.

- **Availability**: The Polkadot Explorer mobile app will be published on Google Play, ensuring widespread accessibility to Android users. This platform choice aligns with our goal of reaching a broad audience and making blockchain exploration convenient for mobile users.

## Team :busts_in_silhouette:

### Team members

- **Esubalew Amenu**: (Team leader) [BSc in Computer Science](https://drive.google.com/file/d/1jdVCjDgwIPjMnBgvw2jS_KkyEl_SBKYO/view?usp=drive_link), [MSc in Software Engineering](https://drive.google.com/file/d/1srLK67BwraL95o8DOaD0v0eRPVfsUfXc/view?usp=drive_link), BA in Management. Co-founder of DataScience and Herma computing plc. Over 8 years of experience in blockchain and fintech industries. Successfully led multiple projects from conception to implementation, ensuring timely delivery and client satisfaction.
- **Eyasu Bihanu**: Has a strong background in blockchain applications.
- **Minilik Eshetu**: Experienced backend developer proficient in building robust and scalable systems for blockchain applications.
- **Khalid Abdurahiman**: Skilled mobile app developer adept at creating intuitive and feature-rich applications for various platforms, specializing in blockchain solutions.
- **Tadesse Duressa**:Talented UI/UX designer with a focus on crafting engaging and intuitive user experiences for blockchain applications, ensuring seamless navigation and user satisfaction.

### Contact

- **Contact Name:** Esubalew Amenu
- **Contact Email:** esubalew.a2009@gmail.com
- **Website**: [DataScience plc](https://datascienceplc.com)
- **Google play**: [ETH Developers](https://play.google.com/store/apps/developer?id=ETH+Developers), [Herma computing](https://play.google.com/store/apps/developer?id=Herma+plc)

### Legal Structure

- **Registered Address:** 3rd Floor, RIZQ bldg, Gabon Street, Addis Ababa, Ethiopia
- **Registered Legal Entity:** DataScience computing plc

### Team's experience

#### Our Capability:
- **Track Record**: Our previous mobile app projects showcase our proficiency, with successful applications boasting high download numbers (100,000+) and active user engagement(50,000+).
- **Collaboration**: We've established a reputation for collaboration, evident in our partnerships with industry leaders. We have been recognized by prominent entities, aligning with our commitment to excellence in software development. Our project has joined Microsoft for Startups Founders Hub with a mix of 38 technical benefits and business resources.
![](https://drive.google.com/uc?export=view&id=1exlnsCUpFD_m0wvlEL_tqp1oYeehQk-e)

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

- https://github.com/EsubalewAmenu/Android_Text_Books
- https://github.com/Herma-Computing/ExpertsWay


### Team members GitHub account

- https://github.com/esubalewAmenu
- https://github.com/eyasubirhanu
- https://github.com/MilaBooot
- https://github.com/khalinoid

### Team LinkedIn Profiles

- https://www.linkedin.com/in/esubalew-amenu/
- https://www.linkedin.com/in/eyasu-birhanu-4665701a3
- https://www.linkedin.com/in/menilik-eshetu-22b094198
- https://www.linkedin.com/in/khalid-abdurahman-247157222


## Development Status :open_book:

We've begun preparing a Postman collection to streamline API endpoint integration, facilitating smooth development.
![](https://drive.google.com/uc?export=view&id=1LGekBSpsI2DsZCOGoB050OIsMPLNQd8v)

## Development Roadmap :nut_and_bolt:

### Overview
- **Description**: An intuitive Polkadot Explorer mobile app, empowering users to seamlessly analyze blockchain data, enhancing accessibility and understanding.
- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 5
- **Total Costs:** 10,000 USD

### Milestone 1 — API Endpoint Preparation

- **Estimated duration:** 2 weeks
- **FTE:**  2
- **Costs:** 2,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Comprehensive Documentation covering: - Configuration setup for Postman environment - Detailed descriptions of each API endpoint and its purpose - Instructions for using environment variables and dynamic configurations - Explanation of request headers, authentication methods, and other parameters |
| **0c.** | Testing and Testing Guide | Testing guide to ensure the functionality and reliability of API requests: - Step-by-step instructions for conducting manual tests within Postman environment - Criteria for validating responses and verifying data accuracy - Instructions for setting up automated tests if applicable - Guidelines for handling and reporting issues or discrepancies encountered during testing |
| **0d.** | Docker | There will be no dockerfile at this stage, we will share the postman collection instead that can be used to test all the endpoints delivered with this milestone. |
| 1. | Configuration | Set up Postman environment - Define configuration for API endpoints including environment variables - Specify configurations for each API endpoint including chain endpoint sections and methods, authentication keys, and other necessary parameters. |
| 2. | Polkadot API Integration | Implement Polkadot API integration in Postman - Set up requests for accessing Polkadot blockchain data including blocks, transactions, accounts, and other relevant information. |
| 3. | Documentation | Document API specifications, including request and response formats - Include detailed descriptions of each API endpoint, parameters, and expected outputs.


### Milestone 2 — Core Feature Development and Alpha Release

- **Estimated duration:** 6 weeks
- **FTE:**  3
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated Documentation covering: - Additions to the existing documentation from Milestone 1 - Detailed descriptions of newly developed core features - Instructions for using and accessing new features within the Polkadot Explorer mobile app - Testing guide updated to include testing procedures for newly added features |
| **0c.** | Testing and Testing Guide | Updated Testing guide to ensure the functionality and reliability of newly developed core features: - Step-by-step instructions for conducting manual tests within the Polkadot Explorer mobile app - Criteria for validating responses and verifying data accuracy - Instructions for setting up automated tests if applicable - Guidelines for handling and reporting issues or discrepancies encountered during testing |
| **0d.** | Docker | There will be no dockerfile at this stage, we will share the documentation how users can test it on emulator or on their mobile phone. |
| 1. | Core Feature Development | Implement core features identified in the project proposal: - Blockchain overview functionalities, Account and Address Analysis functionalities, and Runtime Explorer - Ensure seamless integration of features with the Polkadot Explorer mobile app architecture. |
| 2. | Internal Testing and QA | Conduct thorough testing of newly developed core features - Ensure functionality, usability, and performance meet project requirements - Identify and resolve any bugs or issues encountered during testing. |
| 3. | Alpha Release Preparation | Prepare the Polkadot Explorer mobile app for alpha release on Google Play Store: - Compile the app build with newly developed core features integrated - Set up alpha testing environment on Google Play Developer Console - Perform internal testing of the alpha build to ensure stability and functionality. |
| 4. | Alpha Release Deployment | Deploy the alpha version of the Polkadot Explorer mobile app on Google Play Store for limited community testing: - Submit the alpha build to Google Play Developer Console - Configure alpha testing settings and permissions - Notify selected testers and provide access instructions. 


### Milestone 3 — Feature Refinement, Validation, and Beta Version Development

- **Estimated duration:** 4 weeks
- **FTE:**  3
- **Costs:** 3,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Updated Documentation covering: - Additions to the existing documentation from previous milestones - Detailed descriptions of refined features based on feedback - Instructions for accessing and testing the beta version within the Polkadot Explorer mobile app |
| **0c.** | Testing and Testing Guide | Updated Testing guide to ensure the functionality and reliability of refined features: - Step-by-step instructions for conducting manual tests within the Polkadot Explorer mobile app - Criteria for validating responses and verifying data accuracy for refined features - Instructions for setting up automated tests if applicable - Guidelines for handling and reporting issues or discrepancies encountered during testing |
| **0d.** | Docker | There will be no dockerfile at this stage, we will share the documentation how users can test it on emulator or on their mobile phone. |
| **0e.** | Article | We will write a Medium article that explains the work done as part of the grant.|
| 1. | Feature Refinement | Refine core features based on feedback from alpha testing: - Address any bugs or issues reported by alpha testers - Implement usability improvements based on user feedback - Optimize performance and stability of core features. |
| 2. | Data Validation Tools | Develop and implement tools for validating blockchain data accuracy: - Implement validation checks for blockchain data obtained through the Stable Platform API - Ensure accuracy and consistency of data displayed within the Polkadot Explorer mobile app - Address any discrepancies or inaccuracies identified during the validation process. |
| 3. | Beta Version Development | Develop additional features and enhancements for the beta version of the Polkadot Explorer mobile app: Integrate additional blockchain analysis tools and metrics - Ensure seamless integration of new features with existing app architecture. |
| 4. | Beta Release Preparation | Prepare the Polkadot Explorer mobile app for beta release on Google Play Store: - Compile the app build with refined features and additional enhancements integrated - Set up beta testing environment on Google Play Developer Console |
| 5. | Beta Release Deployment | Deploy the beta version of the Polkadot Explorer mobile app on Google Play Store for wider community testing: - Submit the beta build to Google Play Developer Console - Configure beta testing settings and permissions - Notify selected testers and provide access instructions. 



## Future Plans

- **Long-term Maintenance and Development Financing**: We plan to sustain the project's long-term maintenance and development through a combination of revenue streams and strategic partnerships. This includes exploring opportunities for app monetization such as premium features, subscription models, and partnerships with blockchain projects for sponsored content.
- **Short-term Utilization, Enhancement, and Promotion**: In the short term, we aim to leverage the beta release of the Polkadot Explorer mobile app to gather user feedback, refine features, and enhance usability. We will actively engage with the Polkadot community through social media, forums, and developer meetups to promote the app and encourage adoption.
- **Team's Long-term Plans and Intentions**: Our team is committed to the long-term success and sustainability of the Polkadot Explorer mobile app. We envision continued development and iteration of the app to incorporate new features, support emerging blockchain technologies, and address evolving user needs. Furthermore, we aim to establish the app as the go-to platform for blockchain exploration and analysis within the Polkadot ecosystem.


## Additional Information :heavy_plus_sign:

### Dependency

Our project will be dependent on the official Polkadot Explorer site or related sites for API. The dependency on this API is essential for obtaining real-time and accurate blockchain data, which is crucial for the functionality and success of our Polkadot Explorer mobile app. We acknowledge the significance of this external resource and will ensure compliance with any usage terms and conditions set by the platforms.

### Work Already Done:
Initiated preparation of the Postman API collection for streamlined development processes.
![](https://drive.google.com/uc?export=view&id=1LGekBSpsI2DsZCOGoB050OIsMPLNQd8v)

### Financial Contributions from Other Teams:

At this stage, we have not received financial contributions from other teams for this project. However, we are open to collaboration and partnership opportunities with organizations or teams that share our vision and goals for the Polkadot Explorer mobile app.

### Previous Grants and Funding:

While we have not applied for specific grants related to the Polkadot Explorer mobile app, our team has successfully secured funding and grants for previous projects in the mobile app development space. We have a track record of effectively utilizing grant funds to drive innovation, accelerate development, and deliver impactful solutions to our users.