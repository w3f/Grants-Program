# W3F Grant Proposal

- **Project Name:** PANIC
- **Team Name:** Simply VC
- **Payment Address:** 0x672b62B64abe450F8C6957785fA5c79E33422aEF (ETH/USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

This grant request is a follow-up on a [previous agreement](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/panic_by_simply_vc.md) that has been terminated to allow for a value-first approach for the delivery of PANIC increments.

### Overview

PANIC by Simply VC is an open-source monitoring and alerting solution for blockchain node operators. PANIC monitors a node operator’s setup, and sends relevant alerts via multiple alerting channels. The main objectives are to give node operators insight about the state of their systems, and to promptly raise alerts in case of an issue that may degrade the availability of their service. 

This grant request revolves around expanding the base tool together with the UI to cater for high priority Substrate metrics. This will allow PANIC users to monitor and be alerted on a growing number of metrics. Below is a table of what is in scope for this grant:

#### Table 1
| Type | Metric |
| -----: | ----------- |
| Consensus | Blocks authored |
| Consensus | Validator status in consensus (active, disabled, elected) |
| Consensus | Grandpa consensus rounds |
| Consensus | Slashing events |
| Consensus | I'm online events |
| Consensus | Validator rewards per era and pending payouts |  
| Governance Activity | Pending votes for the validator |  
| Node | Syncing status|  
| Node | Best block height| 
| Node | Finalised block height |
| Node | Sync target height |
| Node Stash | New Controller |
| Payout | Payout Occurred |

PANIC is built around the needs of our own node operations team. We believe in dogfooding as it allows us to better assess the strengths and weaknesses of what is being built and ultimately provide a better product for external node operations teams.

### Project Details

#### Mockups of UI components

For the scope of this iteration, the installer will remain mostly unchanged, with the exception of the [Alerts Configuration](https://drive.google.com/file/d/1R1wScmHhDo_63mylVvKF45mUthdzlPrO/view?usp=sharing) page. During the installation process, the node operator can manage out-of-the-box thresholds and severities for a list of alerts that will include the metrics listed in [Table 1](#table-1)

The [first iteration of the UI](https://drive.google.com/file/d/1Tnd6QKmLI9JuigryYkiJSo2DRZUTuKqO/view?usp=sharing) includes a high-level dashboard from which node operators will be able to review all implemented alerts across all chains setup during installation. Also provided is a low-level system metrics dashboard which displays real-time data related to the host systems’ performance. The UI will remain unchanged but node operators will be able to view new alerts on the metrics listed in [Table 1](#table-1).

#### Technology stack being used

- Alerter - Python
- UI (backend) - Node.js, TypeScript
- UI (frontend) - TypeScript, Stencil JS, Sass
- Docker

#### Core components and architecture

PANIC is a Publisher-Subscriber system consisting of a number of components where each component is either a publisher, a subscriber or both. PANIC uses RabbitMQ to forward messages between components classified the table below:

##### Table 2
| Components | Description |
| -----: | ----------- |
| Monitors | The role of a monitor is to track the status of a monitorable (node/repository/network) by periodically obtaining a set of metrics from various sources (such as prometheus/rpc endpoints) and forwarding these metrics to RabbitMQ|
| Data Transformers | Each data transformer listens to metric data from the monitors. Depending to what monitorable the data belongs to, the data transformer outputs two sets of data, one for saving and another for alerting |
| Alerters | The role of the alerters is to load the alert rules set up during installation and listen to transformed data from the data transformer. When this is received, an alerter checks the alert rules and raises alerts with the appropriate severity when needed |
| Data Stores | The data stores receive transformed data and store the metric data inside Redis and MongoDB. Redis data will be used to load the current metrics state in the UI dashboards, whereas MongoDB data will be used to load historic data on the UI |
| Alert Router | The role of the alert router is to forward the raised alert to the appropriate channel, depending on the severity-channel mapping set during installation |
| Channels Manager | The channels manager receives alerts from the alert router and forwards these alerts to the channel determined by the alert router. The channels manager contains all the logic required by PANIC to communicate with a specific channel |

PANIC’s architecture diagram can be found [here](https://drive.google.com/file/d/187MzJo-vy9oZNGCXVzDx6wK4D3B-rJUk/view?usp=sharing).

### Ecosystem Fit

PANIC’s main objective is to become the go-to tool for node operators active on various chains, including Substrate-based ones. PANIC’s focus is on alerting in the event that an issue arises that directly impacts the service being maintained. This grant request is against the investigation, development, testing, and delivery of additional metrics with the goal of providing node operators with a more complete monitoring and alerting solution as per [Table 1](#table-1).

Currently a number of node operators are using other tools, such as [Grafana](https://grafana.com/) in collaboration with [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/), but this is not without fault. Such solutions require considerable setup effort and offer no default configurations. On the other hand, PANIC is built with ease of use in mind. The node operator is taken intuitively through the installation process which is clean and quick, with out-of-the-box thresholds and severities that can be configured if required. Once the installation is finalised, the UI will be made available with [visual representations of alerts](https://drive.google.com/file/d/1Tnd6QKmLI9JuigryYkiJSo2DRZUTuKqO/view) in line with the setup installed.

## Team :busts_in_silhouette:

### Team members

- **Team lead and full stack developer**: Dylan Galea
- **Full stack developer**: Guilherme Zimmermann 
- **Full stack developer**: Daniel Cherrett
- **Full stack developer**: Francesco Borg Bonello
- **Full stack developer**: Ríder Cantuária
- **Product owner**: Christian Falzon

### Contact

- **Contact Name:** Christian Falzon
- **Contact Email:** chris@simply-vc.com.mt
- **Website:** https://simply-vc.com.mt/

### Legal Structure

- **Registered Address:** 33, Pope Alexander VII Street, Balzan, BZN 1530, Malta (subject to change)
- **Registered Legal Entity:** SIMPLY VC LTD is a Limited Liability Company registered in Malta with the Company reg no C 61022.

### Team's experience

For a more in-depth review of the team’s past experiences, go to the team’s [LinkedIn profiles](#Team-LinkedIn-Profiles) section.

Dylan Galea has been involved in the development of [PANIC for Polkadot](https://github.com/SimplyVC/panic_polkadot) in both frontend and backend work. He has been part of the backend team during the implementation of the [Polkadot API server](https://github.com/SimplyVC/polkadot_api_server) and [PANIC for Cosmos](https://github.com/SimplyVC/panic_cosmos) and helped in the fulfilment of technical reviews for [PANIC for Oasis](https://github.com/SimplyVC/panic_oasis).

Guilherme Zimmermann was previously a full stack developer on the [blog](https://www.betsson.com/en/blog/) and [promotions platform](https://www.betsson.com/en/promotions) of Betsson Group. He was also involved in the [public billing module](https://www.philips.ae/healthcare/resources/landing/tasy) of Philips Healthcare as a full stack developer. His efforts are now focused on the PANIC UI together with the development of Simply VC’s open source [UI Kit](https://www.npmjs.com/package/@simply-vc/uikit).

In July 2019 Daniel Cherrett joined Betsson Group as a QA Engineer on their [affiliates program](https://www.betssongroupaffiliates.com/brands/). He is also the sole developer of [Call2Let](https://call2let.com/), a Maltese property letting platform. He is now involved in developing the PANIC backend.

Francesco Borg Bonello worked as a developer for [Melita](https://www.melita.com/), a Maltese telecommunications company. Together with Dylan and Daniel he is now working on PANIC’s backend. 

### Team Code Repos

- https://github.com/SimplyVC/
- https://github.com/SimplyVC/panic
- https://github.com/SimplyVC/panic_cosmos
- https://github.com/SimplyVC/panic_polkadot
- https://github.com/SimplyVC/polkadot_api_server
- https://github.com/SimplyVC/panic_oasis
- https://github.com/SimplyVC/oasis_api_server

The GitHub accounts of the team members are listed below:

- Dylan Galea - https://github.com/dillu24
- Guilherme Zimmermann  - https://github.com/zimaah
- Daniel Cherrett - https://github.com/Cherrett
- Francesco Borg Bonello - https://github.com/itsciccio
- Ríder Cantuária - https://github.com/simplyrider
- Christian Falzon - https://github.com/crsfalzon

### Team LinkedIn Profiles

- Dylan Galea - https://www.linkedin.com/in/dylan-galea-8352b0173/
- Guilherme Zimmermann  - https://www.linkedin.com/in/guilhermezima/
- Daniel Cherrett - https://www.linkedin.com/in/daniel-cherrett/
- Francesco Borg Bonello - https://www.linkedin.com/in/francesco-borg-bonello-521933221/
- Ríder Cantuária - https://www.linkedin.com/in/ridercantuaria/
- Christian Falzon - https://www.linkedin.com/in/christian-falzon-5a2691b3/

## Development Status :open_book:

### Conversations with the Web3 Foundation

At Simply VC we strive to keep our external stakeholders aware of product progress. For PANIC, this is achieved by the issue of an [end-of-month progress report](https://docs.google.com/document/d/1Du6YOdcP4l1M3GVQ5sQWDRHk_Awxo3VtAh_8tAKBOBc/edit?usp=sharing), which includes our latest releases, changes to the team structure and way of working, current priorities, and what features will be tackled in the short-term. Also included is a high-level roadmap to allow for longer-term visibility.

### Initial investigation

Following an initial investigation, we envisage that for Substrate **node monitoring and alerting**, PANIC will operate as follows:

1. When the Monitors Manager Process receives the configurations, it starts as many Substrate Node Monitors as there are Substrate configurations to be monitored.
2. Each Substrate Monitor extracts the Substrate data from the node's websocket url and forwards this data to the Substrate Data Transformer via RabbitMQ.
3. The Substrate Node Data Transformer starts by listening for data from the Substrate Node Monitors via RabbitMQ. Whenever a Substrate node's data is received, the Substrate Node Data Transformer combines the received data with the Substrate node's state obtained from Redis, and sends the combined data to the Data Store and the Substrate Node Alerter via RabbitMQ.
4. The Substrate Node Alerter starts by listening for data from the Substrate Node Data Transformer via RabbitMQ. Whenever a Substrate node's transformed data is received, the Substrate Node Alerter compares the received data with the alert rules set during installation, and raises an alert if any of these rules are triggered. This alert is then sent to the Alert Router via RabbitMQ .
5. The Data Store also receives data from the Substrate Node Data Transformer via RabbitMQ and saves this data to both Redis and MongoDB as required.
6. When the Alert Router receives an alert from the Substrate Node Alerter via RabbitMQ, it checks the configurations to determine which channels should receive this alert. As a result, this alert is then routed to the appropriate channel and the Data Store (so that the alert is stored in a Mongo database) via RabbitMQ.
7. When a Channel Handler receives an alert via RabbitMQ, it simply forwards it to the channel it handles and the Node Operator would be notified via this channel.

For Substrate **network monitoring and alerting**, PANIC will operate as follows:

1. When the Monitors Manager Process receives the configurations, it starts one Substrate Network Monitor per chain and keeps the configurations updated. A Substrate Network monitor chooses the first syncing and accessible node it finds to retrieve network metrics.
2. Each Substrate Network Monitor extracts the Substrate network data from the selected substrate node's websocket url endpoint and forwards this data to the Substrate Network Data Transformer via RabbitMQ.
3. The Substrate Network Data Transformer starts by listening for data from the Substrate Network Monitors via RabbitMQ. Whenever a Substrate network's data is received, the Substrate Network Data Transformer combines the received data with the Substrate Network's state obtained from Redis, and sends the combined data to the Data Store and the Substrate Network Alerter via RabbitMQ.
4. The Substrate Network Alerter starts by listening for data from the Substrate Network Data Transformer via RabbitMQ. Whenever a Substrate Network's transformed data is received, the Substrate Network Alerter compares the received data with the alert rules set during installation, and raises an alert if any of these rules are triggered. This alert is then sent to the Alert Router via RabbitMQ .
5. The Data Store also receives data from the Substrate Network Data Transformer via RabbitMQ and saves this data to both Redis and MongoDB as required.
6. When the Alert Router receives an alert from the Substrate Network Alerter via RabbitMQ, it checks the configurations to determine which channels should receive this alert. As a result, this alert is then routed to the appropriate channel and the Data Store (so that the alert is stored in a Mongo database) via RabbitMQ.
7. When a Channel Handler receives an alert via RabbitMQ, it simply forwards it to the channel it handles and the Node Operator would be notified via this channel.

## Development Roadmap :nut_and_bolt:

This grant request consists of a single milestone with the aim of expanding the base tool together with the UI to cater for high priority Substrate metrics.

### Overview

- **Total Estimated Duration:** 71 days
- **Full-Time Equivalent (FTE):** 3
- **Total Costs:** ＄49,984 (USD)

#### Table 3
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | Update of design and setup documentation present on our repository |
| 0c. | Testing Guide | Backend functions will be covered by unit tests. Frontend components will go through unit and end-to-end testing. When deliverables 1 - 7 are implemented and tested, a release candidate will be provided to our staking team for UAT |
| 0d. | Docker | Our system will run on Docker. We will make available Dockerfiles to make the running and testing of the product possible |
| 0e. | Article | Delivery of a Medium article on the need fulfilled by PANIC, together with a high-level description of the product and what’s coming next |
| 1. | Research | Research about the metrics and data sources |
| 2. | Monitors | Develop Substrate monitors |
| 3. | Data Transformers | Develop Substrate data transformers |
| 4. | Data Store | Develop Substrate data store |
| 5. | Alerter | Develop Substrate alerter |
| 6. | UI | Update high-level dashboards with new metric information |
| 7. | UAT | User acceptance testing carried out by Simply VC’s staking team |

## Future Plans

We see PANIC as being the go-to tool for node operators active on Substrate, Cosmos, and Chainlink networks. For this to be achieved we will continue to introduce more metrics for monitoring and alerting from various data sources. Considerable time and effort will be invested in the UI to introduce new functionality such as MFA and low-level dashboards for additional visual representations on node, governance, and consensus data.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Element

### Work already done

In its current state, PANIC provides node operators with:
1. A base tool that monitors host systems that the Substrate/Cosmos-SDK/Chainlink nodes are running on.
2. Monitoring and alerting on:
    - Chainlink nodes
    - Chainlink contracts
    - EVM nodes
    - GitHub repositories
    - DockerHub repositories
3. Channels designed to notify node operators of the status of monitored metrics and any issues that might require immediate attention :
    - Telegram
    - Slack
    - Email
    - Twilio
    - PagerDuty
    - Opsgenie
    - Console
    - Log files
4. Basic control over the alerter (such as mute alerts and check status) via Telegram bots and Slack apps.
5. A quick installation through an intuitive UI setup and configuration process.
6. Out-of-the-box alert thresholds for metrics monitored and associated severity levels of alerts (Info, Warning, Major, and Critical), customisable by node operators.
7. A UI which consists of a high-level dashboard from which node operators can review all alerts together with a low-level dashboard which allows node operators to review the performance of their host infrastructure.

May 2022 will see an additional release which will allow node operators to get alerted on high priority metrics for Cosmos based chains. 
