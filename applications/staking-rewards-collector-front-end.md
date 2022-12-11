# Staking Rewards Viewer

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/#pencil-process) on how to submit a proposal.

* **Team Name:** Jackson Harris III
* **Payment Address:** Ethereum (DAI) payment address 0x2E07c8624da45FF0Bd4ba18dE7b9156995C44034.

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

This application is in response to [Front-End for Staking Rewards Collector](https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md)

### Overview

This is a Staking Rewards Viewer for Polkadot and Kusama allowing users to view their staking rewards and easily download their search results.
This implementation will take the work started in the [staking-rewards-collector](https://github.com/w3f/staking-rewards-collector) and integrate it with an easy to use modern front end using Next.js and deployed on Vercel with the goal of deploying to IPFS.

I am interested in utilizing my current Software engineering skills to contribute to the Polkadot ecosystem. I have been following the project for a few years and have been looking for a way to participate.

[Propsoal Repo](https://github.com/jackson-harris-iii/staking-rewards-viewer) with a screenshot of mockup created in Adobe Xd. Here is a quick demo video of a work in progress [Video](https://www.loom.com/share/435c92cb3abe4984b18716642d01f631) and a [Deployed](https://staking-rewards-viewer.vercel.app/) demo on vercel. (currently, the vercel version is not making requests. Looking at swapping out the curlRequest for fetch API calls.

### Project Details

#### MockUp

![](https://github.com/jackson-harris-iii/staking-rewards-viewer/blob/main/mockup.png)

#### Technologies

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

* Mockups/designs Adobe Xd
* Front End: Next.js, Material Design Bootstrap React
* Back End: N/A (The applicatoin will use a serverless design on Vercel/Fleek)

### Ecosystem Fit

The [staking-rewards-collector](https://github.com/w3f/staking-rewards-collector) is a tool to gather staking rewards for given addresses and cross-reference those with daily price data. This is a very useful tool for every validator and nominator in the ecosystem. However, since it has currently a CLI and requires some technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users getting access to this tool and enjoy the benefits.

## Team :busts_in_silhouette:

### Team members

* Jackson Harris [Linkedin](https://www.linkedin.com/in/jacksonharris3/) [GitHub](https://github.com/jackson-harris-iii)

### Contact

* **Contact Name:** Jackson Harris III
* **Contact Email:** jackson.harris3@gmail.com
* **Website:** <https://www.linkedin.com/in/jacksonharris3/>

### Legal Structure

* **Registered Address:** Can Provide Home Address offline
* **Registered Legal Entity:** Freelance/Contractor for tax purposes I am an Independent Contractor

### Team's experience

Jackson Harris: Software Engineer 3 years, Digital Marketing/Business Development 10 years.

### Team Code Repos

* <https://github.com/jackson-harris-iii/staking-rewards-viewer>

### Team LinkedIn Profiles

* <https://www.linkedin.com/in/jacksonharris3/>

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

* Original [RFP](https://github.com/w3f/General-Grants-Program/blob/master/rfps/staking-rewards-collector-front-end.md) (requests for proposal),
* Conversation reference to my original [submission](https://github.com/w3f/General-Grants-Program/pull/439) with @axl of w3f

## Development Roadmap :nut_and_bolt:

### Milestone 1 (Implementation & Testing)

* **Estimated Duration:** 12 days
* **FTE:**  12
* **Costs:** 4000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | UI for user input | Develop an UI to request necessary data from the users. |
| 2a. | Address LookUp Functionality | Allow users to enter multiple wallet addresses for either or both the Polkdaot and/or Kusama networks and deploy these features to Vercel. |
| 2b. | CSV/JSON Download | Enable users to download a copy of their lookup results in either CSV or JSON format. |
| 3. | Form validation | Add form validation to wallet address input while still allowing for multiple addresses to be entered. Validation for fiat amounts that will properly display based on the selected currency. |
| 4.  | UI for data visualizer  | Develop an environment to display the output (.csv and .json) for the end user in a pleasurable way. |
| 5. | Tooltips/Helpers | Implement help texts and tooltips to explain the different features and inputs to users. |
| 6. | Testing | Write tests to confirm the application behaves as expected |
| 7. | Polishing & Delivery | Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc. |

## Future Plans

* Collaborate with the original RFP proposer to determine how to best promote the finished application throughout the community.
* Ask the community for suggestions to improve and add new features as necesary.
* Refactor and Deploy to IPFS

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

* I watched a video, on youtube, with Gavin Wood where he mentioned the Web3 Foundation and the grants program.
