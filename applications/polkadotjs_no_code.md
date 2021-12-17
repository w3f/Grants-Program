# W3F Grant Proposal

- **Project Name:** Polkadot.js NoCode Plugin
- **Team Name:** EzCode
- **Payment Address:** (USDT) 0x0d2254A9B732484210776Bcd303b938F0E814F87
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


### Overview

A free polkadot.js wrapped into a NoCode plugin tool for one of the biggest no-code platforms.
Users will be able to build projects on Polkadot without code. So, this is a tool to use the main tool but without code.
All main features from the polkadot.js will be implemented in the plugin and it will be free to use.

The plugin will open a door to many new developers that could build apps in the Polkadot ecosystem without code.

About your interest in this.
Our main focus is to bring as many crypto tools to the no-code as possible making our plugins the first you think of when building crypto-related apps on Bubble.
Polkadot.js plugin would be a new really powerful tool attracting new developers and potential clients that we can work with.

### Project Details

First, let me shortly introduce you to the no-code platform so you know why we see a big perspective in this plugin.
Bubble.io is the most powerful no-code platform for creating web apps. It is flexible, with many unique features such as customizable backend API, database, and database API, all without code!

The main tool that Bubble has is plugins (similar to WordPress plugins), a plugin can be paid or free, it can add new powerful features to your app.

The final version of the plugin will have a separate element for each category that Polkadot.js has. 
For example, currently Polkadot.js Wallet, this element will have all features related to the Polkadot.js Extension.
Other elements will be divided just like in the official documentation of the polkadot.js
Polkadot.js API
Polkadot.js Utilities
Polkadot.js Contracts
etc.

Currently, the plugin will be available in the frontend only, it will not have any backend elements because of the limitation of the Bubble backend functionality.

### Ecosystem Fit

The main target of this plugin is for every potential user of the Substrate / Polkadot / Kusama ecosystem not only developers because no code is easy and the plugin is free to use, everyone can try to build something with it.

Developers will be able to build dapps and users will be able to connect their wallets to it.
All while without a single line of code. 
The potential here is big since currently there are no similar plugins that could do this for Polkadot.
There are a few other plugins that do the same thing but for other chains (those were built by us as well) and all of them became pretty popular, even the paid ones. 
So the potential for a free plugin that will bring the Polkadot ecosystem is big, there are no other no-code solutions for Polkadot/Substrate/Kusama

## Team :busts_in_silhouette:

### Team members

- CEO: Pavel Popov
- Full-stack Developer: Alex A.
- Bubble developer: Alexandru M.
- Support: Andrew

### Contact

- **Contact Name:** Andrew
- **Contact Email:** support@ezcode.co
- **Website:** https://ezcode.co/

### Team's experience

Providing services and building templates&plugins on the Bubble platform for 3 years now.
Recently we won a grant on Rarible Protocol for integration of their SDK into a free plugin as well.
Here is a link to it:
https://snapshot.org/#/rarible.eth/proposal/Qmcy5SxiJRHDW8vrcjVZdJm3BngENjdGsM4KSHQDQEXipB

Rarible SDK plugin
https://bubble.io/plugin/rarible-sdk---nft-marketplace-1627909974342x941739732723564500

First of its kind, Web3.js No-Code plugin:
https://bubble.io/plugin/web3--metamask-1612784921335x464807902025875460

### Team Code Repos

Open source projects that we can share:
- https://bubble.io/plugin_editor?id=1627909974342x941739732723564500&tab=tabs-4 
- https://github.com/inartin/rarible_protocol_sdk_browser

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/popov-pavel/
- https://www.linkedin.com/in/artinalex/

## Development Status :open_book:

PoC
We did a basic integration into a plugin, you can see it in work here:
https://polkadotjs.bubbleapps.io/version-test/simple_connect

We can send an invitation to the plugin editor page for anyone from Web3 that will review this proposal. It is not available to the public yet since it is not deployed, that's how the Bubble plugins works) after deployment in Milestone 1, it will be available for everyone.

Features that are already implemented and you can see them in the demo:
- Detects if any extensions are installed.
- Loads the connected wallets if any and subscribes to account updates.
- Disconnect the wallet
- Sign a message
- Publishing needed info such as wallet address or signature in states that can be used in Bubble.
- Triggering various events for Bubble such as Message Signed, Wallet not connected, etc.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):**  2 FTE
- **Total Costs:** 20,000 USD

### Milestone 1 Implement: Extension, Utilities

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Demo pages | Open source demo pages that will demonstrate the available features and how to implement them |
| 0c. | Documentation | A documentation page that will explain the plugin element fields, what they mean, what parameters are needed, and how to use the element actions (For example, action to connect the wallet or to Sign a message) |
| 0d. | Testing Guide | Since No-Code doesn't have any type of testing, we will provide demo pages that will cover at least 50% of all plugin features that can be tested directly on the page with a description in the documentation |
| 0e. | Forum post | We will create a thread on Bubble's forum describing the plugin features with all links to the plugin, demo, and documentation |
| 1. | Extension | Plugin element that will implement all Extension features |  
| 2. | Utilities | Plugin element with the Utility features | 
| 3. | Deploy v.1.0 | First deployment, the potential users will help to identify any bugs |


### Milestone 2 Implement: API, Contracts, Keyring

- **Estimated Duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Demo pages | Open source demo pages that will demonstrate the available features and how to implement them |
| 0c. | Documentation | A documentation page that will explain the plugin element fields, what they mean, what parameters are needed, and how to use the element actions. |
| 0d. | Testing Guide | Since No-Code doesn't have any type of testing, we will provide demo pages that will cover at least 50% of all plugin features that can be tested directly on the page with a description in the documentation |
| 0e. | Forum post | Post updates with the new features and elements |
| 1. | API | Plugin element that will implement all API features |  
| 2. | Contracts | Plugin element with the Contracts features | 
| 3. | Keyring | Plugin element with the Keyring features | 
| 4. | Deploy v.2.0 | Deploy newly created elements |


## Future Plans

As with all our plugins, we provide constant support on the Bubble Forum, the plugin will have a separate thread where we will help users and answer their questions.
If there will be any updates in the polkadot.js and may break currently working plugin features, we will implement that update in the plugin as well.
In case of any bugs, we will fix them and deploy updates.

## Additional Information :heavy_plus_sign:

Important info about Bubble itself. 
Does it worth it to build plugins for it? 
Our team works only with Bubble for 3 years now, building templates, plugins, and apps for clients so, we can say it is worth it.

Bubble recently reached one million users.
https://twitter.com/bubble/status/1408451614415937543

The Bubble has closed a $100M round led by Insight Partners.
https://bubble.io/blog/bubble-series-a-100m/ 

All our crypto-related plugins 
- Web3: https://bubble.io/plugin/web3--metamask-1612784921335x464807902025875460
- Rarible SDK: https://bubble.io/plugin/rarible-sdk---nft-marketplace-1627909974342x941739732723564500
- Phantom - Solana wallet: https://bubble.io/plugin/phantom---solana-wallet-1632210886040x530006335001722900
- WalletConnect: https://bubble.io/plugin/walletconnect-1636974372019x518724777637576700
- OpenSea SDK: https://bubble.io/plugin/opensea-sdk-1627297783875x495330366364581900

**How did you hear about the Grants Program?** Web3 Foundation Website 
