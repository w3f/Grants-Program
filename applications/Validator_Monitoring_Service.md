# Validator Monitoring Service

- **Team Name:** [P2P.ORG](http://p2p.org/) Validator
- **Payment Address:** 0xE22211Ba98213c866CC5DC8d7D9493b1e7EFD25A (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

Our application seeks to fund the development of a monitoring platform for validator operators.

### Overview and Ecosystem Fit

Validator Monitoring Service is a monitoring platform designed to track the performance of validators in the Polkadot and Kusama networks.

In the existing ecosystem of the Polkadot network, there is a lack of comprehensive historical information available about how validators perform as ParaValidators and their participation in consensus. Public scanners like Subscan offer limited insights into validator performance, with scarce information such as earned points and rewards displayed only after an era's end. This limitation prevents the use of existing scanners as real-time monitoring tools.

However, active participation in consensus is crucial for upholding network security. Each consensus round relies on obtaining 2/3 precommits, and validators failing to reach this threshold cannot contribute to blockchain security. If numerous validators encounter participation issues, it can reduce block production speed, adversely affecting the overall network.

**We truly believe that every validator operator should understand their role and significance in ensuring blockchain security.**

Furthermore, the information provided by public scanners predominantly focuses on individual addresses and specific events. At the same time, it allows for retrieving on-chain data such as reward payments and rewards points for a particular account. Scanners generally lack the capability to compare these rewards with those of other validators. This limitation hinders a comprehensive understanding of a chosen validator's performance relative to others in the network. 

**Our monitoring service effectively addresses this challenge by providing real-time data on validator performance and enabling performance comparisons with other validators.**

Moreover, besides public scanners, there are several existing solutions available for validator monitoring, such as [P.A.N.I.C.](https://github.com/SimplyVC/panic_polkadot), [Polkalert](https://github.com/galacticcouncil/polkalert), [B-Harvest](https://github.com/nodebreaker0-0/substrate/tree/prometheus_v0.3), [nmonpolkadot](https://github.com/stakezone/nmonpolkadot), [Polkadot-K8s-Monitor](https://github.com/ironoa/polkadot-k8s-monitor), [Polkadot-Watcher](https://github.com/w3f/polkadot-watcher), [ex-1KV Telegram Bot](https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot), as well as, grant-supported dashboards [Cyclops](https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md). Our solution stands out due to several significant differences:

1. **Out-of-the-box Solution:** Unlike many existing applications that require hosting arrangements, our platform offers a hassle-free experience. Users can effortlessly try our product and assess its suitability for their needs by simply interacting with our Telegram bot and setting up a live dashboard. This accessibility enhances the popularity and adoption of our solution.
2. **Comprehensive Data:** While most solutions provide standard on-chain data such as reward points, reward amounts, and on-chain events like offences or payouts, our platform goes beyond that. We offer unique data, including information on participation in the consensus, the selection of a para-validator, and para-validator points per session (not just per era). This granular data provides users with a more comprehensive understanding of validator performance.
3. **Ongoing Support:** Many existing applications are developed by small teams and may need more ongoing support, with some repositories needing to be updated. In contrast, we are one of the largest validators in the network, and we commit to supporting and maintaining our validator monitoring platform. Additionally, we utilize the same system for our internal purposes, ensuring its reliability and continuous improvement.

### Potential users

Our monitoring system caters to various parties within the community who can derive significant benefits from its usage:

1. **Validator Operators:** Our service is a valuable tool for validator operators, particularly small teams and independent validators who may lack the time and resources to develop their monitoring systems. For instance, meeting the strict requirements of programs like the 1KV program can be challenging for small and independent validators. With our monitoring system, they gain the ability to track an extensive range of metrics. By leveraging our service, validator operators can thrive within the decentralized ecosystem and enhance performance.
2. **Nominators:** Nominators play a crucial role in the network by selecting validators to nominate. Our service provides nominators with detailed performance comparisons among different validators. They can evaluate critical metrics such as consensus participation, and block production efficiency relative to other validators. Our service empowers nominators to make informed decisions when choosing validators to nominate, optimizing their returns, and actively contributing to the network's health.
3. **Foundation:** By having access to comprehensive information on validator participation in consensus, block production efficiency, and other crucial metrics, the Foundation can identify and address any security vulnerabilities or potential risks promptly. This proactive approach helps to maintain a robust and secure network for all participants. Moreover, the Foundation can offer greater transparency to the community regarding validator performance

Lastly, our team possesses extensive experience in maintaining validators within the Polkadot and Kusama networks, and we have developed the necessary monitoring and maintenance tools. **We firmly believe that this knowledge should be shared for the benefit of the entire network rather than being kept private.** Therefore, we seek a grant to further develop our monitoring system and contribute to the network's advancement.

### Project Details

We have developed a comprehensive monitoring platform as a service. This platform provides validator operators with an effortless monitoring solution, saving them valuable time and effort. With our service, operators can focus on other critical aspects of validator operations, knowing that their monitoring needs are taken care of.

**Our system could be depicted in the following picture:**

![](https://github.com/avtishin/maas/blob/main/pic_7.png)

Our current solution already offers a Grafana instance, which serves as a powerful dashboard. This dashboard displays real-time metrics of validators, enabling users to access and analyze the data easily. To simplify the setup process, we have integrated our platform with a user-friendly Telegram bot, @p2pvalidator_monitoring_bot. Through this bot, users can quickly configure their personal dashboards by selecting the validators they wish to monitor.

The live dashboard provides users with a comprehensive overview of all essential metrics related to their validators. These metrics are updated automatically every 20-40 seconds, ensuring real-time visibility into the performance of validators. This rapid update frequency enables users to respond to any changes or issues that may arise promptly.

Furthermore, we understand the importance of historical data in analyzing validator behavior and identifying potential issues. Therefore, our platform collects and stores data on all active validators for up to one month. This means that users have access to historical performance data, allowing them to conduct in-depth analyses of their validators over time. Such insights are invaluable for optimizing performance and addressing any emerging concerns.

In conclusion, our monitoring platform provides validator operators with a hassle-free solution, streamlining the monitoring process and offering real-time and historical data to support informed decision-making and efficient operations.

### System workflow

A user initiates a conversation with a Telegram bot and selects from options such as creating a new dashboard or connecting to support. When the user inputs the validator addresses they wish to monitor on the dashboard, our system verifies the authenticity of these addresses, confirming that they belong to validators. Then, the system generates the dashboard and sends the user their access credentials. Subsequently, the system resets the client's session to prevent potential 'double' events. This involves preserving the user's current position in the workflow, for instance, preventing the triggering of a dashboard deletion before its creation.

![](https://github.com/avtishin/maas/blob/main/pic_9.png)

Upon receiving a user's request to deploy a dashboard, their specified validator addresses are recorded in a key-value file (values.yaml) associated with their Telegram ID and subsequently committed to Git. ArgoCD, set to check the repository every 5 minutes, will recognize if there isn't a Grafana instance associated with the particular Telegram ID and proceed to deploy a new instance. As ArgoCD prepares the dashboard, GitHub Actions concurrently monitors the availability of this new instance. Once the instance is fully operational, GitHub Actions triggers a notification to the client, providing them with their login credentials.

![](https://github.com/avtishin/maas/blob/main/pic_11.png)

Our data collection process is anchored on utilizing exporters from the Blockchain. These exporters operate incessantly, amassing raw data directly from the Blockchain. Each exporter functions as an HTTP web endpoint for the scrapper, supplying plain text with specific metric values. Subsequently, this data is channeled into the Victoria Metrics cluster using VM insert, which timestamps each value. Ultimately, designated data is selected by a specific dashboard (Grafana instance) using VM select.

![](https://github.com/avtishin/maas/blob/main/pic_8.png)

In our current implementation, we provide insights on the following key metrics:

- General indicators: we track session/era progression and staking data.
    
    ![](https://github.com/avtishin/maas/blob/main/pic_6.png)
    
- Validator data per epoch: we provide information on rewards points, active validators, and their position in the active set.
    
    ![](https://github.com/avtishin/maas/blob/main/pic_5.png)
    
- Era and epoch points for ParaValidators: we monitor ParaValidator points earned and their relation to the network's average, median, and 95th percentile.
    
    ![](https://github.com/avtishin/maas/blob/main/pic_4.png)
    
    ![](https://github.com/avtishin/maas/blob/main/pic_3.png)
    
- Finality metrics (GRANDPA): we track blocks' prevotes and precommits, and their ratio to ideally processed blocks.
    
    ![](https://github.com/avtishin/maas/blob/main/pic_2.png)
    
    ![](https://github.com/avtishin/maas/blob/main/pic_1.png)
    

## Team :busts_in_silhouette:

### Team members

- Aleksandr Tishin, product manager, https://github.com/avtishin
- Anton Zhbanov, tech team lead, https://github.com/base1217
- Sergey Radchenko, SRE Engineer and Developer, https://github.com/SergeyRadchenkoP2P
- Boris Simonov, SRE Engineer and Developer, https://github.com/xxbbxb

### Team Code Repos

Project repo:

- https://github.com/p2p-org/polkadot_monitoring_service

### Team's experience

The P2P development team, part of the reputable validator and non-custodial staking platform P2P, is the main driving force behind our monitoring solution. P2P is well-known for its expertise in validating Substrate-based networks such as Polkadot, Kusama, Moonbeam, and Moonriver, as well as other networks like Solana (Lido in Solana) and Cosmos (Neutron).

As a team, we have already successfully completed a grant for the development of [Multiblockchain ETL](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md), an indexer specifically designed for substrate-based networks. This indexer allows for the efficient indexing of events, extrinsics, blocks, and staking data from the on-chain environment. We actively maintain and update the Multiblockchain ETL indexer, ensuring its reliability and functionality. The code for this project is publicly available on [GitHub](https://github.com/p2p-org/polkadot-profit-transformer).

Given P2P's established expertise and solid reputation in the industry, we are well-equipped to carry out further development of our monitoring tool. Our focus remains on delivering a monitoring solution that brings significant benefits to the community, promoting transparency and empowering validator operators and stakeholders.

### Contact

- **Contact Name:** Aleksandr Tishin
- **Contact Email:** [aleksandr.tishin@p2p.org](mailto:aleksandr.tishin@p2p.org)
- **Website:** [p2p.org](http://p2p.org/)

### Legal Structure

- **Registered Address:** P.O. box 2775, 67 Fort Street, Grand Cayman, KY1-1111, Cayman Islands
- **Registered Legal Entity:** P2P Staking, a Cayman Islands Company, registration number 381601

## Development Status :open_book:

Current service already offers a convenient and user-friendly experience through a Telegram bot named @p2pvalidator_monitoring_bot. This bot serves as the gateway to our comprehensive validator monitoring capabilities, covering various aspects of validator performance.

At the core of our product, we have developed an exporter that takes raw data and translates it into a format compatible with Victoria Metrics, our chosen data storage solution. The data is securely stored for one month, during which it is transformed into meaningful metrics. These metrics are then transmitted to Grafana dashboards, providing users with a visually appealing and informative monitoring interface.

Through the Telegram bot, users have access to a range of features. On the user's side, they can deploy a personal dashboard, allowing them to monitor their validators efficiently. They also have the ability to destroy their personal dashboard when needed. Additionally, the bot provides support options, enabling users to seek assistance and receive prompt replies.

On the admin side, there are several options available for managing the system. These include the ability to deploy/destroy Grafana instances, and ban/unban specific users. Admins can also engage in support-related tasks, such as replying to support inquiries and closing support conversations as necessary.

By utilizing our Telegram bot, users can easily interact with our monitoring tool, deploy personalized dashboards, access support, and enjoy a seamless monitoring experience. Meanwhile, admins have the necessary tools to manage the system and provide timely assistance to users efficiently.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** $29,000

### Milestone 1 — Events and Dashboard UX

- **Estimated duration:** 1 month
- **FTE:** 1.5
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a documentation page about how to self-host events exporter, grafana setup dashboard instance. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to run events exporter locally, set up Grafana instance, and auto-removing tool. |
| 1. | Events exporter | We will create an events exporter (all on-chain events) to show events in the dashboard related to the selected validator addresses. This feature will track all on-chain events and present related events in the user's dashboard for their selected validator addresses. |
| 2. | Telegram bot UI + support chat upgrades | We aim to rebuild user inference of a bot to add more interaction opportunities with the service. As well as we will improve communication with support. Instead of the current one-message ticket system, we will implement a more interactive conversation mode allowing for multiple messages dialog. |
| 3. | Create a landing page | We will create a landing page to ease user onboarding to the service. |

### Milestone 2 — Expand the functionality

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide a tutorial page that explains how a user can set up monitoring for selected validators. We show how our functionality works and give reasoning and explanations for all metrics that are shown to the user.  |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to self-host the telegram bot and check the functionality.  |
| 0e. | Article | We will publish an article that explains the user flow of our system and promotes using monitoring for validators operators.  |
| 1. | Telegram bot adding alerting based on events | We will introduce a feature that allows users to subscribe to specific events. This means users can opt to receive Telegram notifications when their chosen validators receive rewards, are elected into the active set, and more. |
| 2. | Improve UX Dashboard | We plan to streamline Grafana's interface by removing surplus controls, enhancing the quality of our charts, and implementing Kiosk mode. We aim to bolster security through provisioning measures, such as enforcing password changes for users. |
| 3. | Cover monitoring for parachains | We will add the support of the most popular parachains such as Moonbeam, Moonriver, Acala, Karura, Astar, Shiden  |
| 4. | Auto-remove instances | We will develop a system that identifies and removes inactive Grafana instances. |

## **Referral Program (optional) 💰**

Not applicable

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

Web3 Foundation Website and previous grants: [Multiblockchain ETL](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md)
