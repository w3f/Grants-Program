# W3F Open Grant Proposal for *Front-End for Staking Rewards Collector*

* **Project Name:** CryptoLab Staking Reward Collector
* **Team Name:** CryptoLab
* **Payment Address:** 0x064530BBA1ea3aaE6cC68207Ec75EEa6a7C0c78b (DAI)

## Project Overview :page_facing_up:

This application is in response to https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md

### Overview

The Staking Rewards Collector requests us to make a front-end UI so that non-technical-background people can utilize the tool in a simple way. As the requested features are quite similar to what we have done recently, We intend to implement the requests from the rfps on https://www.cryptolab.network.

### Project Details

* Mockup UI

1. Staking Reward Dashboard

![image](https://user-images.githubusercontent.com/5772463/120571225-3fb02880-c44c-11eb-89b3-59328790e19f.png)

See the image above, CryptoLab already have a similar page for users to query their rewards. We plan to enhance the page by adding a toggle for users to choose whether they want to use data from CryptoLab or the Staking Reward Collector.

If users choose to use Staking Reward Collector, a filter (see 2.) would be provided and they can export data to either JSON or CSV.

![image](https://user-images.githubusercontent.com/5772463/120571143-1c857900-c44c-11eb-8b26-594d42c34f4e.png)

2. Staking Reward Filter

Upon clicking the filter icon, a dialog would appear and provide the following options as requested.

![image](https://user-images.githubusercontent.com/5772463/120569762-2ce82480-c449-11eb-84fb-4f6ba38a1960.png)

To further enhance the function, we plan to auto-fill the *Start Balance* by getting the info from Polkascan if possible.

![image](https://user-images.githubusercontent.com/5772463/120570179-18f0f280-c44a-11eb-9ec6-3a68e91803b3.png)

* Tech Stack

Front End: Vue.js

Back End: Rust, NodeJS

* Architecure

### Ecosystem Fit

The staking-rewards-collector is a tool to gather staking rewards for given addresses and cross-reference those with daily price data. This is a very useful tool for every validator and nominator in the ecosystem. However, since it has currently a CLI and requires some technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users getting access to this tool and enjoy the benefits.

## Team :busts_in_silhouette:

### Team members

* Yu-kai Tseng [GitHub](https://github.com/yktseng) has an master's degree in Computer Science. He also had 9-year working experience on developing Industrial Network Management Softwares/Services, and is now a freelancer. Yu-kai is familiar with backend service developing and had experience on leading large distributed system design and develop.

* Yao-hsin Chen [GitHub](https://github.com/iisaint) has a PhD in Computer Science. 

### Contact

* **Contact Name:** Yu-kai Tseng
* **Contact Email:** tanistseng@gmail.com
* **Website:** https://www.cryptolab.network

### Legal Structure

* **Registered Address:** N/A
* **Registered Legal Entity:** N/A

### Team's experience

We have already developed the [Cryptolab.Network](https://www.cryptolab.network) website and telegram bots for both Kusama and Polkadot validators, which were tipped from both chain's council.

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

* **Estimated Duration:** 12 days
* **FTE:**  9
* **Costs:** 3500 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | UI for user input | Develop an UI to request necessary data from the users. |
| 2.  | UI for data visualizer  | Develop an environment to display the output (.csv and .json) for the end user in a pleasurable way. |
| 3.  | Get Start Balance from Polkascan and on-chain | Auto-fill the Start Balance. |
| 4.  | Help pages / comments  | Implement help texts and descriptions for users. |
| 5.  | Internal testing  | Unit tests covering the functionality and logic |


### Milestone 2 (Testing)

* **Estimated Duration:** 3 days
* **FTE:**  3 days
* **Costs:** 500 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Deployment | Deploy the code on a centralized server. |
| 2. | Test live environment | Test the homepage with various different OS and browsers and provide a report |
| 3. | Polishing | Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc. |


## Future Plans

In this stage, two independent versions of staking rewards (CryptoLab and Staking Rewards Collector) would be on the website. In future, we will see which one is used more often and see how we integrate them into one.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We see the RFP on the github and think it is very similar to what we have already done. We think we are suitable on working on it because CryptoLab has provided tools for both validators and nominators. 
