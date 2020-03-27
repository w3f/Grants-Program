# Open Grant Proposal

* **Project:** PolkaKey
* **Proposer:** @HiZhaoYun
* **Payment Address:** 1NUYKUgjDrzXox7ebeT6xkFN5A64S419Xm

## Project Description :page_facing_up:

When user claim their DOTs, they need a native Polkadot address. Now, there are [several ways](https://claims.polkadot.network/) to generate a Polkadot address. Polkadot.js and Polkadot.js browser plugin is less secure than using Subkey. Subkey is secure, but it is ecommended for technically advanced users who are comfortable with command line and compiling Rust code, it is not recommended for general users.

PolkaKey planned to provide a secure and simple way to generate a Polkadot address for general and technically advanced users.

PolkaKey is a desktop app build with [Electron](https://www.electronjs.org/) and can run on three platforms (MacOS, Windows, and Linux).

PolkaKey can generate a Polkadot address without internet connection. In fact, we also recommend that users use it when disconnected from the network. It is secure than using Polkadot.js and Polkadot.js browser plugin.

PolkaKey will bringing smooth UX to Polkadot, it is simple than subkey.

PolkaKey is open source for full transparency, so anybody can audit.

PolkaKey will never save any info locally, the private key is self-owned.

## Team :busts_in_silhouette:

* **Members:** Xianyun Zhao
* **LinkedIn Profiles:** Sorry, we really rarely use LinkedIn in China.
* **Code Repos:** https://github.com/w3finance/PolkaKey
* **Website:** coming soon
* **Legal Structure:** BoBao Technologies co. LTD
* **Team's Experience:** Xianyun has 5 years of developing experience and similar with cross-platform apps development, currently i am working on a [wallet](https://github.com/dotpaytech/sakura) project that designed for Polkadot ecosystem.

## Development Roadmap :nut_and_bolt:

* **Total Estimated Duration:** 3 weeks + 2weeks
* **Total Costs:** 0.5 BTC + 0.1 BTC

### Milestone 1

* **Estimated Duration:** 2 weeks
* **Costs:** 0.35 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | UI for showcase | Create working prototype which can demo the whole workflow |
| 2. | Function implementation | Generate a Polkadot/Kusama address via PolkaKey. Setting functions, include:Language(Chinese + English). Online/Offline Event Detection |

### Milestone 2

* **Estimated Duration:** 1 week
* **Costs:** 0.15 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Prepare for release | Add unit test, we use [jest](https://jestjs.io/en/) as our test runner. Fix issue on github, release the MVP version |

### Milestone 3

* **Estimated Duration:** 2 weeks
* **Costs:** 0.1 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Add a Chinese + English tutorial | This tutorial is mainly about how to build an Electron app with Polkadot.js API. The tutorial will first be available on the github [Wiki](https://github.com/w3finance/PolkaKey/wiki). If possible, i hope to publish this tutorial on [Polkaworld](https://www.polkaworld.org/) and [Substrate Dev Hub](https://substrate.dev/en/tutorials) |
