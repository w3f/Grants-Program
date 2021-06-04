# Open Grant Proposal for *Front-End for Staking Rewards Collector*

* **Project Name:** CryptoLab Staking Reward Collector
* **Team Name:** CryptoLab
* **Payment Address:** 0x064530BBA1ea3aaE6cC68207Ec75EEa6a7C0c78b (DAI)

## Project Overview :page_facing_up:

This application is in response to https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md

### Overview

The Staking Rewards Collector requests us to make a front-end UI so that non-technical-background people can utilize the tool in a simple way. As the requested features are quite similar to what we have done recently, We intend to implement the requests from the rfps on https://www.cryptolab.network.

### Project Details

We plan to utilize the current Staking Reward webpage (https://www.cryptolab.network/tools/dotSR) on CryptoLab as the design base. However, we will change the data source from our DB to Staking Rewards Collector, retrieving rewards from the subscan because the subscan stores all rewards data.

* Mockup UI

1. Staking Reward Dashboard

![image](https://user-images.githubusercontent.com/5772463/120571225-3fb02880-c44c-11eb-89b3-59328790e19f.png)

See the image above, CryptoLab already have a similar page for users to query their rewards. We are going to enhance the followings

* Filter as requested
* Export to CSV or JSON

![image](https://user-images.githubusercontent.com/5772463/120603398-920a3d00-c47e-11eb-9b0e-4541fecc89b5.png)

The table content would also be re-worked to the Staking Rewards Collector one, mockup as below.

![image](https://user-images.githubusercontent.com/5772463/120638628-f0e1ad80-c4a2-11eb-8297-911efdb9aa20.png)


One thing needs to discuss is that is the Tax column necessary? As it is not an input variable, users cannot enter their rates in their countries. We intend to remove the column from the webpage if you're ok.

2. Staking Reward Filter

Upon clicking the filter icon, a dialog would appear and provide the following options as requested. A help button would be in this dialog to give users hints of how to use it.

![image](https://user-images.githubusercontent.com/5772463/120784731-fc92aa00-c55e-11eb-9dee-f71f5b3ba49c.png)

* Tech Stack

Front End: Vue.js

Back End: Rust, NodeJS

* Architecture

Currently, CryptoLab is served on a single VPS, thus the Staking Rewards Collector would be an application on it. When a user want to see the rewards, the website would call an API on the *cryptolab-web-backend*, and it then spawns a thread to call the Staking Rewards Collector and parse the responses in files. The image below show the concept of architecture of the service.

![image](https://user-images.githubusercontent.com/5772463/120573135-b0a50f80-c44f-11eb-912a-d625ba4112fd.png)
 
 The modules in white blocks are what we have now. We plan to call Staking Rewards Collector from the *cryptolab-web-backend* and parse the json output to respond to the query from the website.

### Ecosystem Fit

The staking-rewards-collector is a tool for gathering staking rewards for given addresses and cross-referencing those with daily price data. It is a handy tool for every validator and nominator in the ecosystem. However, since it currently has a CLI and requires technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users reach this tool and enjoy the benefits.

## Team :busts_in_silhouette:

### Team members

* Yu-Kai Tseng [GitHub](https://github.com/yktseng) has a master's degree in Computer Science. He also had 9-year working experience in developing Industrial Network Management Softwares/Services and is now a freelancer. Yu-kai is familiar with backend service development and had experience in leading large distributed system design and development.

* Yao-Hsin Chen [GitHub](https://github.com/iisaint) has a Ph.D. in Computer Science focusing on information security. He is a big believer in blockchain and is a co-founder of a blockchain-based solar technology company in Taiwan. Currently, he is organizing a small start-up to deliver services in the Polkadot ecosystem.

### Contact

* **Contact Name:** Yu-kai Tseng
* **Contact Email:** tanistseng@gmail.com
* **Website:** https://www.cryptolab.network

### Legal Structure

* **Registered Address:** N/A
* **Registered Legal Entity:** N/A

### Team's experience

We have already developed the [Cryptolab.Network](https://www.cryptolab.network) website and telegram bots for both Kusama and Polkadot validators, which were tipped from both chain's councils.

### Team Code Repos

* https://github.com/cryptolab-network/polkadot-staking-site
* https://github.com/cryptolab-network/cryptolab-web-server
* https://github.com/cryptolab-network/chain-data-collector

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* https://github.com/yktseng
* https://github.com/iisaint

### Team LinkedIn Profiles (if available)

N/A

## Development Status :open_book:

* Original [RFP](https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md) (requests for proposal)

## Development Roadmap :nut_and_bolt:

### Milestone 1 (Implementation)

* **Estimated Duration:** 15 days
* **FTE:**  1
* **Costs:** 4000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. (1 day) |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. (2 days) |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. (3 days)|
| 1.  | Integrate Staking Rewards Collector to CryptoLab | Develop CryptoLab backend so that it can call the Staking Rewards Collector and parse the output files. (2 days) |
| 2.  | Integrate Staking Rewards Collector to CryptoLab Website | Add RESTful APIs to allow parameter input and retrieve the output files. (1 day)|
| 3.  | UI for filter | Develop a dialog to allow user input necessary parameters. (1 day) |
| 4.  | UI for data visualizer  | Modify the table on our current Staking Reward Viewer to fit the requested one. (1 day) |
| 5.  | Drop-down List for download report  | Modify the download button to allow users select either CSV or JSON. (0.5 day) |
| 6.  | Help page  | Implement help texts and descriptions for users. (0.5 day)|
| 7.  | Deployment | Deploy the code on CryptoLab. (1 day) |
| 8.  | Test live environment | Test on both Chrome and Firefox and provide a report (1 day) |
| 9.  | Polishing | Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc. (TBD days)|


## Future Plans

Ask users to enter the *Start Balance* is bothersome. To further enhance the Staking Rewards Collector, it is technically possible to auto fill the *Start Balance* of the start date by recording the block number at 12:00 am each day and then collecting the balances during the block number from Polkascan. However, it requires specific works and would not be included in the planned 3-week duration. We may do it if feedbacks from users are positive.

![image](https://user-images.githubusercontent.com/5772463/120570179-18f0f280-c44a-11eb-9ec6-3a68e91803b3.png)

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We see the RFP on the github and think it is very similar to what we have already done. We think we are suitable for working on it because CryptoLab has provided tools for both validators and nominators. Thus current CryptoLab users can enjoy the benefit from the Staking Rewards Collector. The CryptoLab can also attract more Staking Rewards Collector users to use the site.
