# Polkadot.js NoCode Plugin

- **Team Name:** EzCode
- **Payment Address:** (USDT) 0x9DF3B01aeE76D0eDcC48873667f6F05B4F94A288
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:


### Overview

A free polkadot.js wrapped into a NoCode plugin tool for one of the biggest no-code platforms.
Users will be able to build projects on Polkadot without code. So, this is a tool to use the main tool but without code.
All main features from the polkadot.js will be implemented in the plugin and it will be free to use.

The plugin will open a door to the Polkadot ecosystem for a big community of no-code developers.

### Project Details

First, let me shortly introduce you to the Bubble, a no-code platform.
Bubble.io is the most powerful no-code platform for creating web apps. Being flexible for any use case, it has many unique features such as customizable backend API and database, plugins, and much more, all without code!

The main tool that Bubble has is, plugins (similar to WordPress plugins), a plugin can be paid or free, it can add a variety of new powerful features to your app.

A plugin can have different "elements" in it, each element can add visual or technical additions to Bubble.
The final version of the Polkadotjs plugin will have a separate element for each category that Polkadot.js has (Extension, API, Contracts etc.)
For example, the plugin currently has one element called Polkadot.js Wallet, this element will have all features related to the Polkadot.js Extension.
Other elements will be divided just like in the official documentation of the polkadot.js
Polkadot.js API
Polkadot.js Utilities
Polkadot.js Contracts
etc.

Currently, the plugin will be available in the frontend only, it will not have any backend elements because of the limitation of the Bubble backend functionality.

### Ecosystem Fit

The main target of this plugin is every potential user of the Substrate / Polkadot / Kusama ecosystem. No-Code requires much less time to start work with, making it very easy for everyone that wants to experiment with it to bring their ideas to life.

We see it as a big potential for the Polkadot ecosystem and Bubble ecosystem, since currently there are no similar plugins that could do this for Polkadot without code.
So far we have to build a few Web3 plugins for other networks like Ethereum or Solana, and from the activity on those plugins forum thread, turns out there are a lot of no-code developers interested in building something with it even if they are paid.
So the potential for a free plugin that will bring the Polkadot ecosystem to no-code is big.

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
Recently won a grant on Rarible Protocol for integration of their SDK into a similar free plugin.
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
- **Total Costs:** 18,000 USD

### Milestone 1 Implement: Extension, Utilities

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Demo pages | Open source demo pages that will demonstrate the available features and how to implement them |
| 0c. | Documentation | A documentation page that will explain the plugin element fields, what they mean, what parameters are needed, and how to use the element actions (For example, action to connect the wallet or to Sign a message) |
| 0d. | Testing Guide | Since No-Code doesn't have any type of testing, we will provide demo pages that will cover 100% of all plugin features that can be tested directly on the page with a description in the documentation |
| 0e. | Forum post | We will create a thread on Bubble's forum describing the plugin features with all links to the plugin, demo, and documentation |
| 1. | Extension | Plugin element that will implement all Extension features |  
| 2. | Utilities | Plugin element with the Utility features | 
| 3. | Deploy v.1.0 | First deployment, the potential users will help to identify any bugs |


### Milestone 2 Implement: API, Keyring

- **Estimated Duration:** 1 month
- **FTE:**  2 FTE
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Demo pages | Open source demo pages that will demonstrate the available features and how to implement them |
| 0c. | Documentation | A documentation page that will explain the plugin element fields, what they mean, what parameters are needed, and how to use the element actions. |
| 0d. | Testing Guide | Since No-Code doesn't have any type of testing, we will provide demo pages that will cover at least 50% of all plugin features that can be tested directly on the page with a description in the documentation |
| 0e. | Forum post | Post updates with the new features and elements |
| 1. | API | Plugin element that will implement main API features |  
| 2. | Keyring | Plugin element with the Keyring features | 
| 3. | Deploy v.2.0 | Deploy newly created elements |


## Future Plans

As with all our plugins, we provide constant support on the Bubble Forum, the plugin will have a separate thread where we will help users, answer their questions and post updates.
If there will be any updates in the polkadot.js that may break currently working plugin features, we will implement those updates in the plugin as well.
So, the main focus is to provide constant support for the plugin users after its release.

## Additional Information :heavy_plus_sign:

Important info about Bubble itself. 
Does it worth it to build plugins for it? 
Our team works only with Bubble for 3 years now, building templates, plugins, and apps for clients, we certainly can say that it is worth it.

Here are a few numbers about Bubble:

- Bubble recently reached one million users.
https://twitter.com/bubble/status/1408451614415937543

- The Bubble has closed a $100M round led by Insight Partners.
https://bubble.io/blog/bubble-series-a-100m/ 

All our crypto-related plugins 
- Web3: https://bubble.io/plugin/web3--metamask-1612784921335x464807902025875460
- Rarible SDK: https://bubble.io/plugin/rarible-sdk---nft-marketplace-1627909974342x941739732723564500
- Phantom - Solana wallet: https://bubble.io/plugin/phantom---solana-wallet-1632210886040x530006335001722900
- WalletConnect: https://bubble.io/plugin/walletconnect-1636974372019x518724777637576700
- OpenSea SDK: https://bubble.io/plugin/opensea-sdk-1627297783875x495330366364581900

**How did you hear about the Grants Program?** Web3 Foundation Website 
