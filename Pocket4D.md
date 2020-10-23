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

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/card.jpg" alt="card" style="zoom:25%;" />

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/send.jpg" alt="send" style="zoom:25%;" />

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/MP_list.jpg" alt="MP_list" style="zoom:25%;" />

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/CI.jpg" alt="CI" style="zoom:25%;" />

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/Mockups/Polkascan.jpg" alt="Polkascan" style="zoom:25%;" />



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

<img src="https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_client_structure.001.jpeg?raw=true" alt="p4d_client_structure" style="zoom:25%;" />

Tooling Side

<img src="https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_tooling.001.jpeg?raw=true" alt="p4d_tooling" style="zoom:25%;" />

Network Side

<img src="https://github.com/Pocket4D/Pocket4D-Wiki/blob/master/assets/p4d_general_design.001.jpeg?raw=true" alt="p4d_general_design" style="zoom:25%;" />

#### POC

This demo will require an Android cell-phone, and connect it to internet.

Please follow the steps below:

1. Click [[Here](https://pocket4d.s3-ap-southeast-1.amazonaws.com/poc0_demo/pocket4d_poc0_demo.apk) ] to download the apk, and install to your android cellphone.

Or use your Android cellphone to scan this QR code below:

<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/poc/qrcode.png" alt="qrcode" style="zoom:50%;" />

2. Tap the icon and you should see a screen like this:<img src="https://github.com/Pocket4D/Open-Grants-Program/blob/master/src/img/poc/demo_settings.png" alt="demo_settings" style="zoom:50%;" />

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

* **Total Estimated Duration:** Duration of the whole project
* **Full-time equivalent (FTE):**  Workload of an employed person ([see](https://en.wikipedia.org/wiki/Full-time_equivalent)) 
* **Total Costs:** Amount of Payment in BTC for the whole project. The total amount of funding needs to be below $30k at the time of submission.

### Milestone 1 Example — Implement Substrate Modules 

* **Estimated Duration:** 8 weeks
* **FTE:**  3
* **Costs:** 0.75 BTC

| Number | Deliverable         | Specification                                                |
| ------ | ------------------- | ------------------------------------------------------------ |
| 0a.    | License             | Apache 2.0 / MIT / Unlicense                                 |
| 0b.    | Documentation       | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how the new functionality works. |
| 0c.    | Testing Guide       | The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests |
| 1.     | Substrate module: X | We will create a Substrate module that will... (Please list the functionality that will be coded for the first milestone) |
| 2.     | Substrate module: Y | We will create a Substrate module that will...               |
| 3.     | Substrate module: Z | We will create a Substrate module that will...               |
| 4.     | Substrate chain     | Modules X, Y & Z of our custom chain will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5.     | Docker              | We will provide a dockerfile to demonstrate the full functionality of our chain |

### Milestone 2 Example — Additional features

...

### Community engagement

We are buiding our community on https://www.yuque.com/?language=en-us and newsletters will be regularly updated soon.

## Future Plans

In the near future, we hope to finish the development  of a wallet for various blockchains, embedded with Mini-Programs, with excellent user experience for users and developers. And what's more, an Mini-Programs open platform for the blockchain world could be constructed and we can realize business by offering excellent service. With this platform, all Dapps could enrich their own ecosystem and enhance their service. On the other hand, developers of Mini-Programs could get rid of supervision of centralized system and construct excellent Mini-Programs to benefit the shared ecology.

