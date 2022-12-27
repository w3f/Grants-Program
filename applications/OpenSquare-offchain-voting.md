# OpenSquare off-chain voting for Polkadot ecosystem

* **Team Name:** OpenSquare
* **Payment Address:** 0x4905083abdD13bd95345A871701Fd0b08AbD46d1 (USDT)

## Project Overview :page_facing_up:

### Overview

In short, you can see this proposed platform as [snapshot](https://snapshot.org) in the polkadot ecosystem.

Though Polkadot/Kusama and most other Substrate based chains have on-chain governance and runtime can be easily upgraded with democracy. We think this platform still make sense with following reasons:
* Compared to the formal on-chain votes, this platform provides not so formal off-chain signed polls which may help token holders and community members engage **more** in the ecosystem building.
* Compared to Polkassembly polls on post:
  * users have to sign their votes and the signed data will be stored on IPFS
  * users don’t have to do any registration.
  * Different strategies can also be provided to calculate the final result, rather than simply count the vote numbers.
* Not all on-chain systems with assets on Substrate based chains can upgrade with democracy, like assets issued on Statemine, ERC-20 assets which may be issued on Moonriver, Karura, Shiden, etc.

### Project Details

Off-chain votes will be an important part of OpenSquare collaboration platform. Other planned collaboration forms include bounties, payment QA, short term employment, etc. Key components in this proposal include:
* Predefined spaces where users can create proposals. It will definitely include Kusama and Polkadot, current para-chains with very high possibility.
* Proposal list in one space where users can view the closed or ongoing proposals.
* Proposal detail page where users can view the detail and the signed votes.
* A proposal discussion arena where users submit the signed messages and here we expect chaos.
* An authoring page where users can create proposals, and set the corresponding snapshot height, start and end date(height).
* Archive nodes interaction with which we read users’ balances on the corresponding snapshot block height.
* A backed server to interact with the node(Polkadot, Kusama, etc), store the organized data to DB, handle IPFS storage, provide APIs to get data.

![os_grant_voting](https://user-images.githubusercontent.com/2264908/127607269-5d54f0b0-d8b8-48f1-9c7a-fc8c205bc645.png)

Some implementation notes:
* We have to call polkadot.js extension to sign the voting/poll, and some discussion messages.
* About voting power, since Polkadot/Kusama have proxy accounts, so we have to support proxy account vote on behalf of the original one.
* In this proposal, we will implement `balance of account` and `quadratic balance of account` strategies for Polkadot and Kusama. It means if Alice's balance is 100 at one chain height, her voting power will be 100 and 10 by these 2 strategies.  
* We have a partnership with [Crust](https://crust.network/), and we may store data to IPFS through [decoo](https://decoo.io/) that crust granted.

### Ecosystem Fit

- Providing off-chain voting/polls to help token holders/community members engage more in ecosystem building.
* Flexible strategies help produce different voting/poll results which bring us different opinions from the on-chain tallying methods.
* [snapshot](https://snapshot.org) is popular for Ethereum stack projects, mainly for governance, and currently we didn't see similar projects in Polkadot ecosystem.

## Team :busts_in_silhouette:

### Team members

- Yongfeng Li(@wliyongfeng), Full stack developer
* Chaojun Huang(@hyifeng), Full stack developer
* Wentao Chen(@qiyisi), Full stack developer
* Yizhou Xin(@YoshiyukiSakura), Full stack developer
* Alcazar(@Popoulosss), Designer
* Yaping Wu, BD and execution member

You can see our team with this [link](https://www.opensquare.network/team/).

### Contact

* **Contact Name:** Yongfeng Li
* **Contact Email:** wliyongfeng@gmail.com
* **Website:** <https://www.opensquare.network>

### Legal Structure

* **Registered Address:** 3 FRASER STREET #05-25, DUO TOWER, SINGAPORE 189352
* **Registered Legal Entity:** OPENSQUARE FOUNDATION LTD.

### Team's experience

We have more than 3 years experience with Substrate/Polkadot related tech stack. Our recently developing products include:
* [doTreasury](https://www.dotreasury.com/). We can now see it as a treasury business explorer but it aims to improve the treasury mechanism with retrospection.
* [Statescan](https://www.statescan.io), a fungible asset explorer for Statemint implementation chains.
* OpenSquare bounties business built on substrate. We got a grant for this, and please check details [here](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/open_square_network.md).

We are honored that either dotreasury or statescan get support from kusama or polkadot treasury, and our work about bounties is granted by w3f previously. We are confident to deliver a high quality and usable off-chain voting site.

### Team Code Repos
<https://github.com/opensquare-network/>

Team members github accounts:

* <https://github.com/wliyongfeng>
* <https://github.com/hyifeng>
* <https://github.com/qiyisi>
* <https://github.com/YoshiyukiSakura>
* <https://github.com/Popoulosss>

## Development Roadmap :nut_and_bolt:

Only 1 milestone in this proposal, while the main goal is to check the feasibility of off-chain voting in the polkadot ecosystem.
We will put more features like more plugins and strategies in future proposals, but after this proposal we will launch it and make it available to the community.

Milestone 1 — Implement Basic off-chain voting/polls logic for Polkadot & Kusama
* Estimated duration: 2 weeks
* FTE: 3
* Costs: 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Code | Code will be open source, organized in one monorepo by [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), hosted on [OpenSquare github account](https://github.com/opensquare-network/). It will be implemented in JavaScript, [React](https://reactjs.org/) for fronted, [koa](https://koajs.com/) for backend. Either fronted and backed will depend on polkadot.js, while fronted will also depend on [extension-dapp](https://github.com/polkadot-js/extension/tree/master/packages/extension-dapp) to interact with polkadot{.js} extension. |
| 0c. | Documentation | We will provide a documentation site to explain necessary concepts, how this site work, and some user workflows. |
| 0d. | Test cases | Core functions will be covered by unit tests to ensure functionality and robustness. They will could be verified in simple npm scripts. |
| 1. | User story 1 | Alice opens OpenSquare.io(domain not finally decided) and she can see spaces at least include polkadot and kusama. She can see a closed and ongoing proposal list after clicking a space. |  
| 2. | User story 2 | Alice will see the proposal description, votes records and the final result or analysis/distribution on a closed proposal page. |  
| 3. | User story 3 | Alice votes yes on an ongoing proposal with polkadot{.js} extension, she can see her vote and re-vote to override the previous one. The reason that she changed her vote is that she checked the discussion and found some related news. |  
| 4. | User story 4 | Alice created a proposal with the title “Should there be a specified UI for the society features?” and some description, and there are 2 choices: yes and no. She chose the voter balance as the final result strategy, while she can also choose sqrt balance as the strategy. With a very high sumed balance vote yes to Alice’s proposal, she now is very confident to seek more support to go on with following actions. |  
| 5. | User story 5 | Bob wanted to create a proposal at kusama height 1000, but failed, because his account has 0 balance. Anybody can create a proposal, but the minimum requirement is having at least 10 KSM at the target height. |  

## Future Plans

* Add more spaces, and in the future users may create their own space and customize it.
* Support plugins and more strategies so users can customize the process and voting result.
* Support voting by assets issued on statemine or erc-20 tokens.
