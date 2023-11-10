# Name of your Project

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`).
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Team Name:** Kaladin LLC
- **Payment Address:** 
0x06293bA89A49bD5279705250F16b2c72ef4a1600 for ETH or USDT on ERC20
- **[3](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 

> :exclamation: *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

Kaladin's cross-chain protocol allows the exchange of assets between blockchains without an intermediary or bridge. The Kaladin protocol can enable to direct transfers and exchanges between any blockchain asset with <0.1% transaction fees and in <0.25 seconds without using a bridge or a central third party. Swaps between Bitcoin variants, ETH chains, Stellar and Algorand can be done in less than 1 second, and we can support over 6,000 tps for exchanges.

### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Kaladin.com
- swap.kaladin.com
- Python, Javascript, HTML, CSS, Solidity
https://kaladin.gitbook.io/api-docs/quick-start

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  Our project would create trustless cross-chain infrastructure which would create a bridge to trade without just trading on an exchange where your funds could be compromised. We support Moonbeam at the moment for polkadot to be able to trade into eth or btc or any other chain we currently support.

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  Our target audience are large liquidity providers and daily users
- What need(s) does your project meet?
  Our project meets the needs of cross chain swaps without having to trust an exchange or brokerage.
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
    No, lightning would be closest but they are bitcoin only.

## Team :busts_in_silhouette:

### Team members

- Name of team leader. Sean Costello
- Names of team members. Caia Costello, Jake Koffman, Vincent Truong

### Contact

- **Contact Name:** Full name of the contact person in your team
  Sean Costello
- **Contact Email:** Contact email (e.g. john@duo.com)
  sean@kaladin.com
- **Website:** Kaladin.com
  swap.kaladin.com


### Legal Structure

- **Registered Address:** 17661 vista ave, Monte Sereno, CA 95030
- **Registered Legal Entity:** Kaladin Inc.

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past.

If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here.

### Team Code Repos

- https://github.com/Kaladinn/stormLibrary
- we have some others that are privitized

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/seanaocostello
- https://github.com/Jake-Koffman
- https://github.com/caiacostello
- https://github.com/VinceVT

### Team LinkedIn Profiles (if available)
- https://www.linkedin.com/company/kaladin-inc/
- https://www.linkedin.com/in/sean-costello-090a7620b/
- https://www.linkedin.com/in/jake-koffman-743084150/
- https://www.linkedin.com/in/caia-costello-5b4064216/
- https://www.linkedin.com/in/vincevtruong/


## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs) (requests for proposal),
- academic publications relevant to the problem,
https://www.kaladin.com/Kaladin_Whitepaper.pdf
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project with anyone from the Web3 Foundation,
- previous interface iterations, such as mock-ups and wireframes.

### Overview

- **Total Estimated Duration:** 2 years, 6-12 months duration left. 
- **Full-Time Equivalent (FTE):**  4 Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** 110,000

### Milestone 1 - Push for Mainnet

- **Estimated duration:** 3
- **FTE:**  4
- **Costs:** 30,000


> :exclamation: **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** |  Unlicense |
| **0b.** | Documentation | All our of documentation is currently at https://kaladin.gitbook.io/api-docs/quick-start as well as 
| **0c.** | Testing and Testing Guide | Our test are within our private library for our backend servers but the website is up and running on swap.kaladin.com and kaladin.com incase you would like to try and test it out
| **0d.** | Docker | No Docker file
| 1. | Deployment of application and smart contract onto the main net.
| 2. | We support moonbeam and are live on moonbase alpha with smart contracts implemented in Solidity, but we're also looking to building out an ink! smart contract to support additional parachains. Smart contract development can be broadly split into 3 main stages: 
- Building out the library for the smart contracts, which would include creating and removing channels as well as other basic functionalities such as adding and removing funds fromt he contract.
- Specifying the arbitration process and implmenting both the start dispute, trump and reveal hash secret functions
- To add in updateChannelBalances which would update adding and removal of funds in channels without destroying the channels
| 3. | Smart contracts: Our Solidity smartcontracts are here https://github.com/Kaladinn/stormLibrary and we have completed smart contract audits on these contracts with Certik.

Push for mainnet launch, already on testnet, developing a wasm smart contract for polkadot. Push for filing of money transmitter license.

### Milestone 2 — Additional features and Push for licensing

- **Estimated Duration:** 3
- **FTE:**  4
- **Costs:** 40000

| **0a.** |  Unlicense |
| **0b.** | Documentation | All our of documentation is currently at https://kaladin.gitbook.io/api-docs/quick-start as well as 
| **0c.** | Testing and Testing Guide | Our test are within our private library for our backend servers but the website is up and running on swap.kaladin.com and kaladin.com incase you would like to try and test it out
| **0d.** | Docker | No Docker file
| 1. | Creation and deployment of our advanced trading platform once main net is stable.
| 2. | Finish up on polkadot and attempt to put on other chains. 
| 3. | Smart contracts: Our Solidity smartcontracts are here https://github.com/Kaladinn/stormLibrary and we have completed smart contract audits on these contracts with Certik.

Finish up polkadot and start development test wasm chains. Start deployment to watch tower, add more order types, work on advanced trading UI.

### Milestone 3 — Trading Platform + mainnet swap launch

- **Estimated Duration:** 3-6
- **FTE:**  4
- **Costs:** 40000

| **0a.** |  Unlicense |
| **0b.** | Documentation | All our of documentation is currently at https://kaladin.gitbook.io/api-docs/quick-start as well as 
| **0c.** | Testing and Testing Guide | Our test are within our private library for our backend servers but the website is up and running on swap.kaladin.com and kaladin.com incase you would like to try and test it out
| **0d.** | Docker | No Docker file
| 0e. | Article | We will publish an arcticle that explains Kaladin.
| 1. | Finish up other small features such as LP trades.
| 2. | Launch Trading platform
| 3. | Smart contracts: Our Solidity smartcontracts are here https://github.com/Kaladinn/stormLibrary and we have completed smart contract audits on these contracts with Certik.


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.


 We aim to push for large adoption by exchanges and banks as well as users as we believe that this will create a safer future for crypto.

- **Payment Address:** 
0x06293bA89A49bD5279705250F16b2c72ef4a1600 for ETH or USDT on ERC20


## Additional Information :heavy_plus_sign:

We originally heard about this Grants program from a medium article which refered us to the Web3 Foundation Website.

We were selected as part of the Bridge Bounty program for the Stellar Development Foundation, and we have been working on this project for approximately 2 years. We have completed implementations of our protocol in Solidity, Bitcoin Scripts and Stellar opcodes, and we are looking to expand to other ecosystems.
