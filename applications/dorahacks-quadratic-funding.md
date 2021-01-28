
# Quadratic Funding Pallet

* **Project Name:** Quadratic Funding Grant
* **Team Name:** DoraHacks
* **Payment Address:** 0x032c451Fe54774E7D1841a5353967bB8Edc30031

## Project Overview
We would like to bring quadratic funding grants to Polkadot and Kusama ecosystem so that there is a way for the community to support early-stage developer projects on Polkadot and Kusama.

### Overview

Quadratic Funding was proposed in Vitalik Buterin's paper Quadratic Payments https://vitalik.ca/general/2019/12/07/quadratic.html. It's now been proven as an effective way to encourage grass-root innovation from the developer community and a unique mechanism to allow community contributors to directly support early-stage projects. Currently, GitCoin's ETH Grant and HackerLink's BSC Grant are already practicing this idea.

This project develops a substrate pallet that implements the quadratic funding process. The pallet will be tested on a local substrate node, and a simple frontend interface will be created based on Substrate Frontend Template.

We are building tools to incentivize open source blockchain development on HackerLink.io/en, and we have already implemented quadratic funding grant. Binance Smart Chain community is running its first quadratic funding grant on HackerLink, and we have seen amazing projects being uploaded since its launch. GitCoin is also doing a good job working with the Ehtereum Foundation to host Ethereum quadratic funding grants.

This is the first step we want to take to eventually bring quadratic funding grants to Polkadot, Kusama, and all parachains that need it.

### Project Details 
Any quadratic funding grant will consist of two funding pools -- a community contributors' donation pool and a matching pool donated by ecosystem partners. Community contributors will be able to directly donate to projects they like and complete voting in the same time. The distribution of the matching pool will be determined by quadratic voting results from community contributors. Therefore, all community contributors will have a direct impact on the allocation of the matching pool.

Here is a detailed explanation of HackerLink quadratic funding (use DOT as example):

![Polkadot Quadratic Funding Grant.jpeg](https://ssimg.frontenduse.top/article/2021/01/26/3e4af1509b0450e838d2bb6efbbfa026.jpeg)

The on-going BSC quadratic funding grant can be accessed here: https://hackerlink.io/en/grant

A Chinese version to explain Quadratic Funding can be found here: https://matataki.io/p/6113

### Ecosystem Fit 

Since quadratic funding is a community driven funding mechanism for early-stage grants, it will introduce a more community-driven method to fund developer community projects in the Polkadot and Kusama ecosystem.

It's also exciting to implement quadratic funding as an on-chain governance module and add it to Polkadot governance stack.


### Team members
* DoraHacks Dev Team -- a team of developers who has built HackerLink.io/en and implemented the first quadratic funding smart contract on BSC.


### Contact
* **Contact Name:** Eric Zhang
* **Contact Email:** jiannan@dorahacks.com
* HackerLink.io/en

### Legal Structure 
* Twenty-Second Century Dora Technology Holdings Inc.

### Team Code Repos
* https://github.com/dorahacksglobal/BSCQuadraticFundingGrant

## Development Roadmap

### Overview
* **Total Estimated Duration:** 2 months
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 1000 DAI

### Milestone 1 -- Implement Quadratic Funding Pallet
* **Estimated Duration:** 5 weeks
* **FTE:**  2
* **Costs:**  500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Quadratic Funding Substrate Pallet | An open-source prototype of a quadratic funding substrate pallet. The pallet will implement quadratic voting algorithm and the quadratic funding process: project registration, direct donation, voting, fund distribution. |
| 2. | Test | Deploy the runtime module to Substrate testnet and test quadratic funding functions: project registration, direct donation, voting, fund distribution. (No security audit here)｜

### Milestone 2  -- Frontend Integration
* **Estimated Duration:** 3 weeks
* **FTE:**  3
* **Costs:** 500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT |
| 0b. | Testing Guide | The code will have unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests | 
| 1. | Connecting to PolkadotJS extension | If not installed, direct users to install. If installed, ask users to select an account. Popup window for interactions: project registration, voting, donating, fund redemption.  | 
| 2. | Frontend Integration | Create a minimalistic front end with substrate-front-end-template for a demo Quadratic Funding Grant. Create a list of sample projects and a virtual "matching pool". Users can donate to these projects and vote, and matching pool will be distributed according to quadratic funding rules. |
| 3. | HackerLink Integration | Deploy a substrate node and connect it to the HackerLink test line. Similar user experience to BSC Grant Round-1. |
| 4. | Test | We will test the frontend before milestone delivery. |

## Future Plans

After implementation of quadratic funding pallet on Substrate, we will plan a quadratic funding grant as soon as the Kusama Network is available. This effort will be in coordination with the Kusama Council. We will audit the pallet code and the frontend code before launching.

Eventually, we hope to run KSM and DOT quadratic funding grants on a regular basis, and make it a continuous effort to support and incubate developer projects from the community, by the community. Meanwhile, we want to make the pallet availale as a module for every other parachain to run their own quadratic funding grant.


## Additional Information
DoraHacks' blockchain developer platform HackerLink is currently hosting the Binance Smart Chain Quadratic Funding Grant Round-1. The BSC foundation donated $50,000 to this round to support BSC-based developer projects. This grant can be accessed at https://hackerlink.io/en/grant.

There is a smart contract deployed on the BSC mainnet to process all quadratic voting and funding activities, and the smart contract has been audited by Certik. https://github.com/dorahacksglobal/BSCQuadraticFundingGrant

DoraHacks is an active hackathon organizer and developer community in the blockchain space. DoraHacks has been organizing blcokchain hackathons and developer communities in 8 countries and ~20 cities around the world (Boston, SF, San Jose, Beijing, Hangzhou, Bangalore, Berlin, Oxford, Tokyo, Seoul... etc.)