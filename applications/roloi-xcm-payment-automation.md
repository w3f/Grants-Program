# Roloi - XCM Payment Automation

- **Team Name:** NeoPower Digital
- **Payment Address:** 1dz667uQX199rHyj6tizmL6EJe4AZxjH1RhnyrT1QuQ4pfS (Polkadot - USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

We are [NeoPower](https://twitter.com/NeoPowerDigital), a Web3 software company. We are currently building a payment automation platform called [Roloi](https://twitter.com/RoloiMoney).

Last year we received a [W3F Grant](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/roloi_milestone_1.md) for the migration of our Streaming Smart Contract from Cosmos to Polkadot. We talk about this migration journey in a [Medium Article](https://medium.com/@RoloiMoney/cosmwasm-to-ink-beyond-the-cosmos-e4920604f9cb).

Roloi is based on three automation pillars:
- Token streaming
- Recurring payments
- Conditional payments

As a next step for Roloi, we are going to build the **recurring payments feature**. 

Roloi can achieve this by avoiding off-chain mechanisms thanks to [OAK Network](https://oak.tech/): the automation parachain.

### Project Details

#### Goal

Automate ink! smart contract transactions in a recurring way.

#### How to achieve it

We need to notify our Smart Contract deployed on **Shiden** (Astar) whenever a **scheduled transaction** should be executed.

**XCM** enables us to connect parachains. This way, we can schedule transactions on **Shiden** (Astar) with the assistance of **Turing** (OAK). 

#### Technical details

Creating products using XCM implies a complex journey today. Here is an example between Astar and OAK:

![W3F Grant - XCM Payment Automation](https://i.imgur.com/lrjifU5.png)

There are some DX/UX issues while building products with the out-of-the-box approach:
- The process to enable the connection between chains requires the **configuration of Proxy Accounts** on both chains.
- Users have to manually **top up their Proxy Accounts** in order to allow them to pay for fees to act on their behalf.
- **XCM messages are complex** to understand and generate.
- Managing **on-chain recurring transactions** is always a complex task.
- **Polkadot.js** is great for low-level development, but **hard to use for user-oriented products.**

#### Our solution

Our deliverable will include a **Next.js UI** and an **ink! smart contract** to create recurring transfers leveraging XCM features.

The included features on the Next.js UI are:
- ✅ Wallet connection
- ✅ 1-click proxy accounts setup
- ✅ Recurring payment creation
- ✅ Incoming and outgoing payments section
- ✅ useink() library

For devs:
- 💻 Our own useful hooks and reusable abstractions in Typescript to encapsulate tasks such as:
  - Creating proxy accounts on both sides
  - Depositing funds into these accounts to cover fees
  - Wrapping the recurring transaction to be executed via Astar Proxy Account
  - Transmitting the recurring task configuration via XCM & HRMP
- 💻 ink! smart contract example used to trigger payments
- 💻 Recurring payment data model

Some hook examples: 
![W3F Grant - XCM Payment Automation - Hook examples](https://i.imgur.com/Qfrjp4S.png)

This project will be generic and open source to serve the Polkadot builders community as a **public good** that teams can use to **automate transactions** leveraging **cross-chain features**.

**This will make building with XCM fast and simple.**

#### Wireframes

![Wireframe](https://i.imgur.com/5hVZWuF.png)

### Ecosystem Fit

This project is a **public good for the Polkadot Builders community**. For NeoPower, this will be a great experience since all of this work will give us more traction to **grow Roloi**. 

Our intention is to provide a **generic and open-source project** that can be the starting point to many real use cases of cross-chain payments using XCM. 

The code will be backed with robust and clear documentation. This will allow our platform to be easy-to-use and effortlessly scalable. 

We also plan on publishing a **Medium Article** to **share our experience developing with XCM**.

At NeoPower, we are always contributing to the Polkadot Spanish community with educational content:
- [ink! workshop (Polkadot Hackathon Latam)](https://www.youtube.com/watch?v=u9VmpjLfMkA&list=PLmL99foFXSfghdKCvI7oXq6-5G3zCSBsS&index=3&ab_channel=NeoPower)
- [ink! workshop (Polkadot Blockchain Academy - Buenos Aires)](https://youtu.be/jHUvwO0siKo)
- [ink! intro (Polkadot Hackathon Latam - Closing event)](https://youtu.be/ESbrKJ1eXZY)
- [“What’s Roloi?” talk (Polkadot Latam Day)](https://youtu.be/o7BwYB1LmCE)
- [ink! Development Workshop (Universidad Iberoamericana, Mexico)](https://www.youtube.com/watch?v=nmboRFPK9mI)
- [ink! official docs - Translation to Spanish](https://github.com/paritytech/ink-docs/pulls?q=is%3Apr+is%3Aclosed+author%3Apcorrado-np)
- [How to use useink! Library - Video Playlist](https://youtube.com/playlist?list=PLmL99foFXSfjL8iuQTJ7ah_jDVv4os3p8)
- ["Gavin Wood's vision of Polkadot" talk (Polkadot Decoded 2023 - View Party Buenos Aires)](https://twitter.com/NeoPowerDigital/status/1674568722755866624?s=20)
- ["Payments in Crypto for Humans" talk (Polkadot Decoded 2023 - Satellite Event Buenos Aires)](https://twitter.com/RoloiMoney/status/1677388280155832322?s=20)
- (coming soon) ink! 8-week course in Spanish (Polkadot Hub)

## Team :busts_in_silhouette:

### Team members

We are NeoPower, a Web3 software company. Our core team members:
- Brian Sasbon (Co-Founder & CEO)
- Pablo Corrado (Co-Founder & CTO)
- Hernán Hermida (CGO)

### Contact

- **Contact Name:** Brian Sasbon
- **Contact Email:** bsasbon@neopower.digital
- **Website:** https://neopower.digital/

### Legal Structure

- **Registered Address:** Pacheco 2131, CABA, Buenos Aires, Argentina (CP1431)
- **Registered Legal Entity:** NeoPower Digital, LLC

### Team's experience

#### Founders

We are Brian and Pablo, Software Engineers with a Degree from the National Technological University (UTN) from Buenos Aires, Argentina, and have more than 10 years of experience as developers for many different projects. We have strong experience working as Full-stack Developers and Team Managers for US traditional finance clients like Morgan Stanley, Visa, and JP Morgan.

6 years ago we founded NeoPower, our own software company to work for different clients building freelance teams of designers, developers, and testers.

We are building Roloi, a payment automation platform to enable on-chain payment flow automation in Astar. Our project was supported with a first grant from the Web3 Foundation.

#### CGO

Hernán S. Hermida (aka Milstein) is a DeFi Researcher with more than two years of experience contributing to educational communities in Latam. Currently, he hosts #DeFiSpace, a weekly Twitter Spaces cycle, with more than 50 episodes, interviewing builders from different multi-chain projects, and creates content for “La Multisig”, a web3 educational YouTube Channel with its community.

He’s the growth lead of DeFi Argentina a non-profit project that helps children’s food banks in Argentina by collecting donations in cryptocurrencies.

He’s also been an OAK ambassador since Nov 2022.

Hernán is part of the Roloi team as CGO to help with the growth, research, and networking strategy, leveraging his knowledge about DeFi and communities.


### Team Code Repos

- [NeoPower GitHub Repository](https://github.com/NeoPower-Digital)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** $ 52,500

### Milestone 1 - UI on Rococo Testnet

- **Estimated duration:** 1.5 months
- **FTE:**  3
- **Costs:** $ 31,500 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide a general tutorial for the user to understand how to use the dApp and technical documentation of the main functionalities. |
| **0c.** | Testing | To guarantee robustness, the main functionality will be covered by unit tests. |
| **1.** | UI | As expressed in the Project Details section, we will provide a **Typescript Next.js Web App** that includes key abstractions to simplify the developers' work when using XCM and connecting parachains. The scope of this UI includes connection to the Rococo Testnets of Astar & OAK and chain native token transfers. Libraries to use: Polkadot.js & useink. |
| 1a. | React XCM tooling | We will provide reusable React hooks, generic components, state management and types to facilitate the creation and top-up of Proxy Accounts, and execution of XCM (v3) messages.  |
| 1b. | Home page | This page will handle the wallet connection and will show the app dashboard. |
| 1c. | Create a Recurring Payment Page | On this page, the user will be able to create recurring transfers using the previously defined XCM flow. The most tricky part of the process will be transparent for the user. |

### Milestone 2 — Smart Contract and Kusama Connection

- **Estimated Duration:** 1 month
- **FTE:**  3
- **Costs:** $ 21,000 

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will iterate the existing documentation to include the new functionalities.  |
| **0c.** | Testing | To guarantee robustness, the main functionality will be covered by unit tests. |
| **0d.** | Article | We will publish a Medium Article about our development experience with XCM. |
| **1.** | UI | We will add the connection to the Kusama chains of Astar and OAK. |
| 1a. | My Payments Page | A page to show all the incoming and outgoing payments of the connected user. |
| **2.** | Smart Contract | An ink! smart contract that stores all the payment flows and monitors the security of the assets. All the token transfers will occur in Shiden. This enables transfers of non-native tokens. |
| 2a. | Transaction - Configure new recurring transfer | We will provide a message to configure a new recurring transfer between Shiden accounts. |
| 2b. | Transaction - Modify the configuration of a recurring transfer | We will provide a message to modify an existing recurring transfer between Shiden accounts. |
| 2c. | Query - Get user recurring transfers | We will provide a message to get all the incoming and outgoing recurring transfers of the connected user. |
| 2d. | Transaction - Execute a transfer | We will provide a message to execute a transfer related to an existing recurring configuration. It will be triggered by the OAK scheduler, and the contract should validate the time according to the existing configuration. |

## Future Plans

- Automate cross-chain token transfers.
- Include conditionals to the transfers.
- Scale this automation platform according to the ecosystem needs. 
- Integrate this code to Roloi to schedule payment flows.

## Additional Information :heavy_plus_sign:

We heard about the Grants Program through Twitter, and through personal recommendations from Parity developers we decided to apply.

Links:
- https://roloi.money
- https://neopower.digital

