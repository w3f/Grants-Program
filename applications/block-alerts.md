# Block Alerts

- **Team Name:** Block Alerts
- **Payment Address:** USDT 0x123FfB2efB8D74D10d6B3a882A94531D99234B11
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

Block Alerts provide a platform to set up alerts in your smart contracts. Whether you want to get alerts for any transaction or events, the block alerts platform will listen to the alert and send it to your Slack, MS teams, etc.

### Project Details

Our solution consists of a backend service that keeps track of all the blocks that are being produced and will keep on processing all the blocks. Once we have the required data, it makes a POST request on the webhook, whether it’s Slack, MS Teams, Telegram, etc.

### Use cases

 - Alerting will tell you whether a smart contract is working as expected.
 - In case of multiple smart contract failure transactions, you will be notified.
 - It is very much useful for debugging purposes.
 - You don’t have to check polkascan again and again. You will be alerted once transaction is completed.


### Ecosystem Fit

- Where and how does your project fit into the ecosystem?
Right now, there is no alerting infrastructure available in the ecosystem, this is where we fit.
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
User who wants to setup alerts for transaction/events are our users.

## Team :busts_in_silhouette:

### Team members

 - David

### Contact

- **Contact Name:** David
- **Contact Email:** david@block-alerts.xyz

### Legal Structure

- **Registered Legal Entity:** Not yet registered

### Team

- https://github.com/davidzindex999

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 weeks
- **Full-Time Equivalent (FTE):**  1 FTE
- **Total Costs:** $8,000 USD

### Milestone 1

- **Estimated duration:** 2 weeks
- **FTE:**  1
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can consume the data using our code. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/ that explains how you can send alerts in your slack, teams, TG, Discord. |
| 0. | Creation of a backend service | This backend service written in Python since we will be using **py-substrate-interface** library https://github.com/polkascan/py-substrate-interface library to process the blocks. |


### Milestone 2

- **Estimated Duration:** 2 weeks
- **FTE:**  1
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use our webapp. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive integration tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/ that explains how you can use our UI to send alerts in your slack, teams, TG, Discord. |
| 0. | Creation of UI | We will be using vanilla HTML, CSS and JS to create our frontend. It will communicate with our backend. Frontend will be used to configure alerts, installing webhooks and address/transaction/block we want alerts for. |

...


## Additional Information :heavy_plus_sign:

We will be implementing all of this in substrate ecosystem.
