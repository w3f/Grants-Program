# Open Grant Proposal

* **Project:** Pocket4D Wallet

* **Proposer:** Michael So

* **Payment Address:** 

  

## Project Overview :page_facing_up: 



### Overview

Wallet4D is a multi-cryptocurrency wallet, supporting Polkadot and it's para-chains.

1. We use the flutter architecture for development to provide high-quality user experience and product performance.

2. Unlike other Polkadot wallets that use PolkadotJS, the encryption library and tools rely on adopting the Rust version provided by the existing Substrate/Polkadot and get repackaged. And we use FFI (Foreign Function Interface) to provide Dart/Flutter for interoperability. We have applied another Grant, see: [General Grant](https://github.com/w3f/General-Grants-Program/pull/340)
3. We found that the parachain project has its own needs for customization and expansion and thus wallets applications need to be constantly updated to meet these customized needs. So we adopt Pocket4D (another General Grant project, see: [General Grant]( https://github.com/w3f/General-Grants-Program/pull/340)) to enhance development and user experience, which introduces the `Mini-Programs` concept to expand the applications functional abilities to meet more requirements and import derived DApps. We are devoted to providing a low-cost way to realize its business and enrich the application ecosystem. 

Through such a multi-cryptocurrency wallet, we hope to alleviate the cost of interfacing Polkadot with other ecosystems and applications. Also, based on the built-in Pocket4D `Mini-Program` framework, we hope to offer a better choice for external developers to migrate existing apps or develop new ones at a lower cost, so that the Polkadot ecosystem can expand rapidly.



### Project Details 

#### Mockups

Please check this prototype below: 

https://www.figma.com/file/souDNM9HgqXtEOcl9qVjp0/Pocket4D-(G)?node-id=0%3A1



#### Technology Stacks

Flutter, Golang, JavaScript, Polkadot



#### Architecture

![p4d_general_design](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_general_design.001.jpeg?raw=true)

#### Features
1. Users can creating and backup wallet by Mnimonic.
2. Users can send and receive cryptocurrencies.
3. Support Polkadot and DOT.
4. `Mini-Programs` : 'Coins Insider', which allow users to look up prices of cryptocurrencies.

### Ecosystem Fit 

Similar projects: Polkawallet

We are creating a multi-cryptocurrency wallet, supporting Polkadot and it's para-chains. On the advatage of Mini-Program, the Pocket4D wallet can mitigates the cost of blockchain interfacing with other ecologies and offer better user experience. 



## Team :busts_in_silhouette:

### Team members

* Michael So
* Dao Zi

### Team Website	

Under development.

### Legal Structure 

Personal address will be provided via the invoice form.

### Team's experience

* Michael So, founder of FireStack, serial entrepreneur. Proficient in JavaScript, React Native, Flutter and other front-end programming languages. He devoted to blockchain for many years, leading token investment, wallet, blockchain game platform and other projects, and has accumulated rich experience in blockchain theories and practice.
* Dao Zi, front-end architect, proficient in Flutter. As a leading member in Mobike, he led the team to develop the Mobike Applications and makes it easy and fast to add flutter to existing mobile applications.


### Team Code Repos

* https://github.com/Pocket4D

### Team LinkedIn Profiles

None.

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 3 months
* **Full-time equivalent (FTE):**  5.5
* **Total Costs:** 1.86 BTC

### Milestone 1 — Wallet backend

* **Estimated Duration:** 1 month
* **FTE:**  1.5
* **Costs:** 0.51 BTC

| Number | Deliverable                          | Specification                                                |
| ------ | ------------------------------------ | ------------------------------------------------------------ |
| 1.     | IPFS deployment                      | Deploy the bundled file to decentralized storage, e.g., IPFS. |
| 2.     | `Mini-Program` defined `xml` and API | Provides standard `Mini-Program` defined `xml` and API to JavaScript frontend. |
| 3.     | Web3 integration                     | Integrate `Web3` and provide to frontend.                    |
| 4.     | Smart contracts deployment           | Use smart contracts to deploy an Dapp, such as Faucet, and use Mini-Program to interact with it. |

### Milestone 2 — Wallet Dapp

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.68 BTC

| Number | Deliverable                    | Specification                                                |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| 1.     | Integrate with `WalletConnect` | Integrate with `WalletConnect` and provides to JavaScript.   |
| 2.     | Application deeplink           | When signing, call `WalletConnect` and use deeplink to jump to the wallet app and finish signing, and then go back to the `Mini-Program`. |
| 3.     | `Substrate` integration        | The backend use `Substrate` to host a blockchain with decentralized storage. |

### Milestone 3 — Integration with Polkadot

* **Estimated Duration:** 1 month
* **FTE:**  2
* **Costs:** 0.68 BTC

| Number | Deliverable                   | Specification                                                |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| 1.     | Components and APIs           | Complete most of the Mini-Program defined components and APIs. |
| 2.     | Guidelines of SDK             | A complete guidelines for developers(host) to integrate the SDK. |
| 3.     | Integration with applications | Small scale integration of Dapps and host apps (eg. wallet or Dex) for testing. |
| 4.     | Integration with Polkadot     | Integration with Polkadot.                                   |



### Community engagement

We are buiding our community on https://www.yuque.com/?language=en-us and newsletters will be regularly updated soon.

## Future Plans

In the near future, besides the multi-cryptocurrency wallet, a `Mini-Programs` open platform for the blockchain world shall be constructed and we can realize business by offering excellent service. With this platform, all Dapps could enrich their own ecosystem and enhance their service. 

On the other hand, developers of Mini-Programs could get rid of supervision of centralized system and construct excellent `Mini-Programs` to benefit the shared ecology.
