# Open Grant Proposal

* **Project:** Pocket4D

* **Proposer:** Michael So, Ken Cui

* **Payment Address:** 

  

## Project Overview :page_facing_up: 



### Overview

Pocket4D, as an open platform for Mini-Programs, provides Mini-Programs service for the majority of `host` Apps. Pocket4D integrates a series of service, such as cryptocurrecies prices inquiry, wallets of cryptocurrency, COVID-19 inquiry, voting system, blockchain mobile games and other kinds of Mini-Programs, so that `host` apps do not need to interface with different platforms, only need to access Pocket4D in minutes! Just one-click integration, we provide a low-cost way to realize its business and enrich the application ecosystem. 

Pocket4D supports private deployment and IPFS protocol. Therefore, we can not only provide ordinary Mini-Programs open service, but also provide a blockchain-based Mini-Programs echosystem to bring the Mini-Programs into the world of blockchain, so that the user experience of the blockchain Dapps is on par with ordinary apps. 

Thus, We will develop a wallet for cryptocurrency management supporting Polkadot, throught which Polkadot users can enjoy the benefit of Mini-Programs directly.

By accessing the Pocket4D platform, `host` Apps enables:

- Optimizing the Dapp user experience.
- Low-cost integrated services, authorized one-click access.
- Censorship Resistance, Application Ecology Decentralization.
- Multi-chain, cross-ecological and cross-platform support.

We, the Pocket4D team, believe that Mini-Programs are very much in line with the decentralized characteristics of the blockchain, and the social properties of Mini-Programs should also be able to be well integrated with the blockchain.

The following information can help you better understand the Pocket4D project.

- [Introduction](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/introduction.md), an introduction of Pocket4D.
- [Comparison](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/comparison.md), a comparison of different solutions of Hybrid development and Mini-Program.
- [Technical Design](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/technical-design.md), technical design of Pocket4D system.
- [Road Maps](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/roadmaps.md), roadmap of our plan and goal.



### Project Details 

#### Mockups

![card](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/card.jpg)  ![send](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/send.jpg)![MP_list](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/MP_list.jpg)  ![CI](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/CI.jpg)![Polkascan](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/Polkascan.jpg)

#### Technology Stacks

##### P4D-Core

1. P4D is based on the Flutter application framework. 
2. We use QuickJS and JavaScriptCore as our JavaScript engine. MethodChannel/PlatformChannel is the primary method used for interop with OS-level Android/iOS APIs. 
3. Dart:FFI is used for interop with native code written in C/C++/Rust. 
4. We use the Flutter runtime as the core and hub for various plugins/libs, whether written in Dart, JS or native code.

##### P4D-Mini-Program

1. Business logic in P4D mini apps are written in standard JavaScript. However, as P4D is new and implements a custom runtime from scratch, many Node and browser APIs may not be provided.
2. P4D provides a simple HTML-like DSL that is used to describe views. It provides directive-based APIs similar to frameworks like Vue.js.
3. P4D mini apps are styled via standard css files, but have some limitations and differences due to being based on Flutter.



#### Architecture

Client Side
![p4d_client_structure](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_client_structure.001.jpeg?raw=true)

Tooling Side
![p4d_tooling](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_tooling.001.jpeg?raw=true)

Network Side
![p4d_general_design](https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_general_design.001.jpeg?raw=true)

#### POC

This demo will require an Android cell-phone, and connect it to internet.

Please follow the steps below:

1. Click [[Here](https://pocket4d.s3-ap-southeast-1.amazonaws.com/poc0_demo/pocket4d_poc0_demo.apk) ] to download the apk, and install to your android cellphone.

Or use your Android cellphone to scan this QR code below:

![qrcode](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/poc/qrcode.png)

2. Tap the icon and you should see a screen like this:
![demo_settings](https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/poc/demo_settings.png)

3. Simply tap “Save Endpoint” then tap “To AppList”, 

4. Now you are navigated to another List Page like this:

   See the item display as “python_book”, that’s the Mini-Program you are about to see. Tap it!

5. Now after a loading, then you can see the mini-program called “python_book” fetched from server

6. Now tap one of the list item, you can go to detail page of the book. Notice it is not optimized, that it may be laggy for now.



### Ecosystem Fit 

There are no any other projects similar to us. Pocket4D is the first project that introduces Mini-Programs to the blockchain world as far as we know.



## Team :busts_in_silhouette:

### Team members

* Michael So
* Bruce Huang
* Ian Tan
* Dao Zi
* Xiao Huo
* Tyler Yu
* Ken Cui
* Utada Jiao

### Team Website	

Under development.

### Legal Structure 

None.

### Team's experience


  

### Team Code Repos

* Micheal So: https://github.com/neeboo
* Dao Zi: https://github.com/foxsofter
* Ian Tan: https://github.com/iantanwx
* Xiao Huo: https://github.com/renlulu

### Team LinkedIn Profiles

* https://www.linkedin.com/in/ian-tan-001129156/
* https://www.linkedin.com/in/the-bruce-huang/

## Development Roadmap :nut_and_bolt: 

### Overview

* **Total Estimated Duration:** 12 weeks
* **Full-time equivalent (FTE):**  18
* **Total Costs:** 2.33704864 BTC

### Milestone 1 — Proof of concept #0 (Finished)

* **Estimated Duration:** 4 weeks
* **FTE:**  3
* **Costs:** 0.38950811 BTC ≈ $5000

| Number | Deliverable             | Specification                                                |
| ------ | ----------------------- | ------------------------------------------------------------ |
| 1.     | Serve the bundled       | Serve the bundled JS/HTML/CSS from a local server.           |
| 2.     | A runnable android app  | A runnable android app that can call and interact with a remote API. |
| 3.     | A Pocket4D Mini-Program | One-tap to download and run P4D mini apps on the Android host device natively via Flutter. |

### Milestone 2 — Proof of concept #1

* **Estimated Duration:** 4 weeks
* **FTE:**  4
* **Costs:** 0.51934414 BTC ≈ $6667

| Number | Deliverable                        | Specification                                                |
| ------ | ---------------------------------- | ------------------------------------------------------------ |
| 1.     | IPFS deployment                    | Deploy the bundled file to decentralized storage, e.g., IPFS. |
| 2.     | Mini-Program defined `xml` and API | Provides standard Mini-Program defined `xml` and API to JavaScript frontend. |
| 3.     | Web3 integration                   | Integrate `Web3` and provide to frontend.                    |
| 4.     | Smart contracts deployment         | Use smart contracts to deploy an Dapp, such as Faucet, and use Mini-Program to interact with it. |

### Milestone 3 — Proof of concept #2

* **Estimated Duration:** 4 weeks
* **FTE:**  5
* **Costs:** 0.64918018 BTC ≈ $8333

| Number | Deliverable                    | Specification                                                |
| ------ | ------------------------------ | ------------------------------------------------------------ |
| 1.     | Integrate with `WalletConnect` | Integrate with `WalletConnect` and provides to JavaScript.   |
| 2.     | Application deeplink           | When signing, call `WalletConnect` and use deeplink to jump to the wallet app and finish signing, and then go back to the `mini-app`. |
| 3.     | `Substrate` integration        | The backend use `Substrate` to host a blockchain with decentralized storage. |

### Milestone 4 — Proof of concept #3

* **Estimated Duration:** 4 weeks
* **FTE:**  6
* **Costs:** 0.77901621 BTC ≈ $10000

| Number | Deliverable                   | Specification                                                |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| 1.     | Components and APIs           | Complete most of the Mini-Program defined components and APIs. |
| 2.     | Guidelines of SDK             | A complete guidelines for developers (host) to integrate the SDK. |
| 3.     | Integration with applications | Small scale integration of Dapps and host apps (eg. wallet or Dex) for testing. |
| 4.     | Integration with Polkadot     | Integration with Polkadot.                                   |



### Community engagement

We are buiding our community on https://www.yuque.com/?language=en-us and newsletters will be regularly updated soon.

## Future Plans

In the near future, we hope to finish the development  of a wallet for various blockchains, embedded with Mini-Programs, with excellent user experience for users and developers. And what's more, an Mini-Programs open platform for the blockchain world could be constructed and we can realize business by offering excellent service. With this platform, all Dapps could enrich their own ecosystem and enhance their service. On the other hand, developers of Mini-Programs could get rid of supervision of centralized system and construct excellent Mini-Programs to benefit the shared ecology.

