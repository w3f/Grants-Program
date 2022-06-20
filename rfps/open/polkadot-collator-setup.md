# Polkadot Collator Setup

* **Status:** Open
* **Proposer:** mmagician
* **Your Project(s):** https://mmagician.github.io/
* **Projects you think this work could be useful for** Any parachain team

## Project Description :page_facing_up: 

This is meant as a companion repository to [polkadot-validator-setup](https://github.com/w3f/polkadot-validator-setup), which allows anyone to launch a validator node in an automated and secure fashion.

I would like to standardize (as much as possible) the process of spinning up new collator nodes for different parachains.

I understand it might be tricky to bundle all the parachain launch setups into one repository, but there are some ideas of how this can be tackled:
1. Have a single collator ansible role, and each branch would correspond to a specific parachain
2. Have multiple ansible roles, and the main.yml in the project root to coordinate which roles get deployed.

I would lean towards the second option. While it might lead to large repo size due to multiple collator setups (and multiple networks - the setup might be different on Kusama or Polkadot), it gives more flexibility to spin up multiple collators for independant chains without meddling with git branching too much.

## Deliverables :nut_and_bolt:

Ideally the PoC would 
Please list the deliverables of the project in as much detail as possible. Please also estimate the amount of work required and try to divide the project into meaningful milestones.

* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Amount of time (in days) required for a single person to complete this project ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** Amount of Payment in USD for the whole project. 
### Milestone 1

Please add additional milestones in the same way: 
* **Estimated Duration:** Duration of milestone 1 
* **FTE:**  Amount of time (in days) required for a single person to complete this milestone
* **Costs:** Amount of Payment in USD for milestone 1


| Number | Deliverable | Specification | 
| ------------- | ------------- | ------------- |
| 1. | Title of the deliverable | Please describe the deliverable here as detailed as possible |  
| 2.  | ... |...| 
