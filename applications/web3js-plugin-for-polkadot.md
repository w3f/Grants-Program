# Advancing Web3.js Plugin for Polkadot

Propose to work more on the npm package: [`web3-plugin-polkadot`](https://www.npmjs.com/package/@conx3/web3-plugin-polkadot) and its website www.web3polka.com

- **Team Name:** ConX3
- **Payment Address:** 11xK5C1XUMsSUSAmguBoHTQLD8EguJCAxaTm1MnjDJ78Vdt (USDC or better in DOT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

### Overview

The npm package: `web3-plugin-polkadot` is a plugin for web3.js to enable communicating with Polkadot, Kusama, and Substrate nodes using web3.js and its development-style. The plugin currently supports calling all RPC methods. This grant request aims to advance the project one step further.

Note: The project was initially developed for the Polkadot Hackathon Winter 2023. You can view its submission here: https://github.com/parity-asia/hackathon-2023-winter/tree/main/projects/32-web3-plugin-polkadot. And it passed the technical filtering with a total of 25 projects. You can find it as the third in the list at [the announcement on X (Twitter)](https://x.com/OneBlock_/status/1739949571525271716?s=20). The final announcement of the winners is yet to be made on the Hackathon's Demo Day on 14 January 2024.

### Project Details

Web3.js Plugin for Polkadot ([`web3-plugin-polkadot`](https://www.npmjs.com/package/@conx3/web3-plugin-polkadot)) currently enables the basic interactions by supporting RPC methods calls. You can check [its details at the npm registry](https://www.npmjs.com/package/@conx3/web3-plugin-polkadot) or at [its repository readme file](https://github.com/conx3/web3-plugin-polkadot). However, it is currently very basic and needs more work to become more useful.

In this grant request, I propose to first focus on improving documentation, testing in CI/CD, Docker files, and branding and website content to popularize the current functionality. The details of this foundational work can be checked in the 1st milestone below. After that, I propose to work on support for subscribing/unsubscribing to blockchain events as the next functionality to be added. And in preparation for the next step, an analysis will also be made on how Polkadot, Kusama, and Substrate accounts could be integrated into web3.js inside this plugin.

Polkadot, Kusama, and Substrate nodes provide subscription in a way that differs from Ethereum, which has only 2 endpoints for all subscriptions: `'eth_subscribe'` and `'eth_unsubscribe'`. Therefore, the proposal is to work on inheriting and modifying the `SubscriptionManager` that is developed by web3.js so it handles subscription using the methods:

```
'beefy_subscribeJustifications',
'beefy_unsubscribeJustifications',
'chain_subscribeAllHeads',
'chain_subscribeFinalisedHeads',
'chain_subscribeFinalizedHeads',
'chain_subscribeNewHead',
'chain_subscribeNewHeads',
'chain_subscribeRuntimeVersion',
'chain_unsubscribeAllHeads',
'chain_unsubscribeFinalisedHeads',
'chain_unsubscribeFinalizedHeads',
'chain_unsubscribeNewHead',
'chain_unsubscribeNewHeads',
'chain_unsubscribeRuntimeVersion',
'grandpa_subscribeJustifications',
'grandpa_unsubscribeJustifications',
'state_subscribeRuntimeVersion',
'state_subscribeStorage',
'subscribe_newHead',
'unsubscribe_newHead',
```

And regarding the accounts, analyzing how Polkadot, Kusama, and Substrate accounts could be integrated into web3.js inside this plugin is important. Next to that, I would apply for a grant or ask for sponsorship for the analyzed and estimated work. However, some modification might need to be done at web3.js to facilitate this. Therefore, I will analyze the work to be done there in order to open an MR for it if it makes sense to propose some modifications.

### Ecosystem Fit

The target audience of this package are JavaScript and TypeScript developers creating tools or dApps for Polkadot, Kusama, and Substrate. There are 3 key benefits to this:

#### Development Experience and Learning Curve
Developers already familiar with web3.js would be able to quickly start comunicating with Polkadot and Substrate nodes with fewer new concepts to learn. All they need to do is link web3.js with a Polkadot, Kusama, or Substrate provider, register the plugin, and start working as usual with slight adjustments.

#### Code Portability
Existing Ethereum DApp code using web3.js could be adapted with relative ease to work with Polkadot and Substrate. Only a few changes to current code would be needed. This means developers may use the same codebase for interacting with both Ethereum-based nodes and Substrate nodes, with some custom handling.

#### Diversity
Providing developers with an additional alternative to `@polkadot/api` is beneficial. This way, developers can choose which library they feel more comfortable working with.



## Team :busts_in_silhouette:

### Team members

- Muhammad Altabba, Blockchain Tools Developer

### Contact

- **Contact Name:** Muhammad Altabba
- **Contact Email:** maltabba@conx3.com
- **Website:** http://www.conx3.com/ (under construction)

### Legal Structure

Applying as an individual.

### Team's experience

Muhammad Altabba has nearly 15 years experience in software development and the last 5+ years was in the blockchain and decentralized identity space. And is currently working with the team developing and maintaining web3.js.

### Team Code Repos

Project repo: 
- https://github.com/conx3/web3-plugin-polkadot

GitHub account: 
- https://github.com/Muhammad-Altabba

### Team LinkedIn Profiles

- https://linkedin.com/in/muhammadaltabba


## Development Status :open_book:

The initial version of the library has been developed during Polkadot Hackathon 2023 Winter in Hong Kong. And the following are already available:
- A full functional web3.js plugin that provides access to all RPC methods in the web3.js style.
- Limit the RPC methods to what is available at Polkadot, Kusama and Substrate, out-of-the-box.
- Developers can provide their list and the types specifications of the supported RPC methods for any variant network, or customized node, and they will have the IntelliSense accordingly.
- Tests with 100% coverage.
- The npm package has been published up to [version 0.0.2 at the npm registry](https://www.npmjs.com/package/@conx3/web3-plugin-polkadot/v/0.0.2?activeTab=versions).
- A basic documentation has been provided in the readme file.


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 0.25+ (will utilize professional paid work, in addition to 0.25 FTE, especially for design and content-related tasks)
- **Total Costs:** 5,000 USD

### Milestone 1 — Misc tasks on the current functionality

Work on documentation, testing in the CI/CD, Docker files, and the popularization of the current functionality.

- **Estimated duration:** 1 month
- **FTE:** 0.25+
- **Costs:** 2,500 USD


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Keep using MIT but add a license comment to every file header |
| **0b.** | Documentation | Review the code to ensure providing enough **inline documentation**. However, 2 **tutorials** will be written as in '0e' that has been listed in the next 2 rows. |
| **0c.** | Testing and Testing Guide | There is already 100% test coverage for the current code. And in the readme file, it is already mentioned how to run those tests. However, I will setup and fix the GitHub Actions that should run the tests successfully on every commit.  |
| **0d.** | Docker | Provide a Dockerfile(s) that can be used to test all the functionality that has been already provided by the plugin. |
| 0e. | Tutorials | Write a tutorial, and possibly a publish a video, that explains registering and using the plugin to call RPC methods. And another tutorial, and possibly a video, that explains how to work with a substrate node, which has a customized list of RPC methods.|
| 0f. | Branding | Reconsider the current website branding, adopt identity colors and use a logo and a better banner.|
| 0g. | Website content | Put helpful content at the website https://web3polka.com/ that is currently almost empty.|

### Milestone 2 — Support Subscribing/Unsubscribing to blockchain events

- **Estimated duration:** 1 month
- **FTE:** 0.25+
- **Costs:** 2,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | Provide both **inline documentation** of the code and a basic **tutorial**, and possibly a video, that explains how a user can use the plugin to subscribe/unsubscribe to events. |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | Publish an **article** that explains what had been im implemented in this grant featuring the work on the subscription and the playground. |
| 1. | Support subscribe/unsubscribe | Polkadot, Kusama and Substrate nodes provide subscription in a way the differs a bit from Ethereum that has only 2 endpoints for all subscriptions: `'eth_subscribe'` and `'eth_unsubscribe'`. For that, work on inheriting and modifying the `SubscriptionManager` developed by web3.js to handle subscription using the RPC methods available on Polkadot, Kusama and Substrate nodes |
| 2. | In-browser playground | Add a playground that can be used in the browser to try the plugin.|
| 3. | Analyze integrating Accounts with web3.js (in the next plugin version) | Analyze how Polkadot, Kusama and Substrate accounts could be integrated into web3.js inside this plugin. (Next to that, apply for a grant or asking for sponsoring the analyzed and estimated work.). However, there could be some modification to be done at web3.js to ease this. And so analze the work to be done there in order to open an MR for it.|

## Future Plans

- Implement additional functionalities, such as accounts handling and smart contract interactions. There will be subsequent grant requests for these and other functionalities.
- Popularize the library through tutorials, illustrative videos, workshops, and sponsoring bounties at hackathons.
- Develop more plugins for the Polkadot ecosystem.

This project will rely on grants and sponsorships as it serves the entire ecosystem and its decentralized vision. There will be further grant requests, starting with this initial modest application to familiarize ourselves with the processes.

For the related plugin and libraries, additional applications for grants and sponsorships to the various Substrate networks and beneficiaries, for each different plugin serving different parts of the ecosystem, will be considered.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website and Raul Ritti at Element.