# W3F Open Grant Proposal

* **Project Name:** People Local Interactions Protocol (PLIP)  
* **Team Name:** Valibre
* **Payment Address:** 0x9D418c51B8B417A7ac9299aFcb736Bb6aE6018B7, (DAI)

## Project Overview :page_facing_up:

### Overview

The People Local Interactions Protocol (PLIP) defines how peer-to-peer interactions like **decentralized on/off ramps** are brokered within community driven micro-economies with friendly, easy to use technologies.

* **Overview:** PLIP is the defining feature of the Valibre, the harmonious convergence of blockchain infrastructure that pools crypto and fiat resources facilitating p2p transactions without centralized 3rd party support. It is an ecosystem of decentralized technologies that allow new and existing applications to be deployed in a decentralized and familiar setting. PLIP distingusihes the Valibre Network (VLN) from existing liquidity pools in the DeFi space because of its purpose built Substrate-based chain with built-in escrow functionality that locks in on-chain assets until fiat transactions are successfully brokered. PLIP reaches users and handles off-chain interections through end-to-end Matrix chat rooms with an integrated wallet. PLIP enables projects across various use cases to deploy blockchain functionality while maintaing a simple UI and provides an abstracted entry point to the entire world of blockchain and, subsequently, any crypto asset. 

* **Relevance to the Ecosystem:** Built on Substrate, PLIP and the VLN provide a bridge to the fiat world, abstracting the complexities of the ecosystem to onboard users across the spectrum of tech savvy. We are enabling projects across different use cases (Fintech, E-Commerce, etc.) to access the Polkadot/Kusama ecosystems by deploying legacy UI applications powered by our independently developed catalog of libraries and APIs (e.g. [Sube](https://github.com/valibre-org/sube) and [Valor](https://github.com/valibre-org/valor).) Through this unique infrastructure, PLIP is the window into the blockcahin for countless projects and communities.  

* **Our Drive:** PLIP facilitates trustless p2p transactions for communities representing any background, language, or mission. We're building something that is both simple and familiar to the average user. That's why PLIP is our mission: to onboard any user, with varied technical prowess, to the blockchain at unprecendented scale.

### Project Details

![PLIP - Architecture](https://user-images.githubusercontent.com/1329925/126496416-164549c5-b8d2-4208-ae91-4792654716d9.png)

The "PLIP Stack" is a series of libraries and tools built with Rust focused on performance, lightweightness and portability, with special focus on being WebAssembly compatible to run on the Web. It's comprised of:

* The Valibre Open Runtime ([**Valor**](https://github.com/valibre-org/valor)) orchestrates all interactions on our protocol. 
It's a plugin-based system that allows creating HTTP APIs that can run in a multitude of environments including web browsers when compilied to WebAssembly.
* Among the many plugins that can run on top of Valor, we will provide a [**Sube**](https://github.com/valibre-org/sube) plugin that allows
applications and other user defined plugins to talk easily (via HTTP) with the [Valibre Network](https://github.com/valibre-org/vln-node)(or any Substrate chain). 
* As part of our Substrate-Meets-Matrix initiative ([**Summa**](https://github.com/valibre-org/summa)) we would also provide a **Summa wallet**(as backend of our [libwallet](https://github.com/valibre-org/libwallet)) that abstracts the need to deal with blockchain addresses or private keys directly, a logged-in Matrix user can have a blockchain account automatically and use it in chat rooms where p2p interactions take place.
* The [Escrow](https://github.com/valibre-org/vln-node/tree/master/pallets/escrow) and [Rates](https://github.com/valibre-org/vln-node/tree/master/pallets/rate_provider) pallets of our runtime provide the underlying security and concensus needed for the p2p transactions to take place.

Each of the components of the PLIP family form a cohesive ecosystem that allows developers to create or port existing applications without the need
to relearn new technology stacks and paradigms. Users have the flexibility to develop centralized back-end systems and later opt-in for **progressive decentralization** to migrate said systems to run fully decentralized on the end-user device.

Other notable elements of PLIP: 
  * PLIP does not have an independent tokenomic model-- we are not creating our own currency. 
  * This project is not token swap protocol, but instead enables p2p fiat to crypto on/off boarding in a secure, decentralized infrastructure. 
  * PLIP is not an application on its own (like LocalBitcions), instead it is an infrastructure for decentralized communities to easily utilize crypto resources. 

### Ecosystem Fit

PLIP provides tools and infrastructure for developers to join us in building out the bridge to the "real world." We see our protocol design as a way for developers to seamlessly onboard new users to the Kusama and Polkadot ecosystems by simply connecting a traditionally developed UI to the blockchain using our custom API toolkits.  

We believe that in order for developers to join the Web 3.0 revolution. Rather than having developers learn new coding languages and other technical intricacies compeltely from scratch, we allow them to take applications with familiar technology stack and instead provide HTTP-compatible APIs that are easy to integrate with existing applications. Valibre enables dApp development by eliminating steep knowldege barriers to entry, meeting the need to create broader, simpler access to the blockchain. 

We empower exisiting projects to progressively decentralized without completely overwriting legacy products, while also solving for usability concerns that come with decentralizationg by abstracting the complexity of blockchain elements like mnemonic and private keys. 

**Similar Projects**

* [Wifi Coin](https://wificoin.com/) is a Polkadot ecosystem project aiming to provide fiat-to-crypto on ramps. Our project enables stablecoin swaps as opposed to Wifi Coin's unique token, which requires that users understand how to purchase crypto for use of their platform. We found this project under existing Web3 grant applicaitons [Q4 2020](https://github.com/w3f/General-Grants-Program/blob/master/grants/accepted_grant_applications.md#surfing_woman-wave-8---fourth-quarter-2020), and we have reached out to them in attempt to network and potentially collaborate. We didn't receive a response and are unclear where they are progressing. 
* [Encointer](https://encointer.org) is a decentralized UBI/digital identity protocol. Similar to Valibre, they emphasisze local communitiy development through unique local monetary systems. However, Encointer requires extensive educaiton efforts for the users of their protocol as opposed to abstracting the complexity of decentralized technology as Valibre achieves through Sube and Valor. 

## Team :busts_in_silhouette:

### Team members

**Team Lead** Daniel Olano  
**Runtime Developer** Stanly Johnson  
**Communications & Business Development** Samantha Robertson

### Contact

* **Contact Name:** Daniel Olano 
* **Contact Email:** daniel@valibre.org
  * stanly@valibre.org
  * samantha@valibre.org
* **Website:** https://valibre.org

### Legal Structure

We are a registered LLC in the United States.

### Team's experience

**Daniel Olano** is a Rust/Substrate Guru, and grinding full time to bring his brain child, Valibre, into fruition. He is a Colombian living in Berlin. He was first inspired to create Valibre to facilitate seamless fiat to crypto onboarding for users with varied financial literacy to combat the plague of hyperinflation across Latin America, but is excited to expand to failing fiat economies worldwide. He is currently facilitating the first Rust developer workshop in Spanish to increase visibility of Substrate and Polkadot to developers across LATAM. 

**Stanly Johnson** is based in Bangalore, India and is a seasoned software engineer across the stack of programming languages underpinning Web3 technologies, including Rust, Python, and Solidity. He is currently working as a runtime developer part-time with Valibre specializing in cross-chain transfers and escrow. Stanly’s passion for distributed systems stems from the opportunity it provides to reach everyone by eliminating systemic barriers. 

**Samantha Robertson** is a globetrotter with expertise across Business Development, Product, and Strategy. Samantha desended into the cypherpunk realm after working in product at an AI company, becoming dismayed by the necessary data extraction tactics to train AI models. Samantha is most excited to help build Valibre because she believes that it has the potential to onboard thousands of users to the blockchain without extensive education on technical intricacies. Samantha became a Polkadot stan when she grew fed up with gas fees and MEV. She has vast experience leading international teams and beleives that Web 3.0 technologies represent the future of multilateral cooperation.  


### Team Code Repos

* https://github.com/valibre-org/ 

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* **Daniel Olano:** https://github.com/olanod 
* **Stanly Johnson:** https://github.com/stanly-johnson 

### Team LinkedIn Profiles (if available)

* **Stanly Johnson:** https://www.linkedin.com/in/stanlyj/ 
* **Samantha Robertson** https://www.linkedin.com/in/samantharobertsonreal/

## Development Status :open_book:

As part of the **Substrate builders program** we have completed the MVP implementation of the escrow and local rates pallet of the VLN parachain.

## Development Roadmap :nut_and_bolt:

### Overview

We plan to have a public testnet of the Valibre Network (VLN) with a dedicated Matrix server for the PLIP community that can showcase the
usage of the escrow system through a modified _element.io_ chat UI. We will also revamp our website and documentation to educate developers on
how to develop applications with the Valibre Open Runtime.

### Milestone 1 — testnet.valibre.network

* **Estimated duration:** 4 weeks
* **FTE:**  1
* **Costs:** 10,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up our local testnet and send test transactions, which will show how the new functionality works. |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a docker-compose file that set-ups the local testnet of the parachain with everything needed to test all the functionality delivered with this milestone. |
| 1. | Escrow pallet | Feature complete and permissionless version of the [Escrow pallet](https://github.com/valibre-org/vln-node/tree/master/pallets/escrow) ready for production use(economically secure and are properly weighted) |  
| 2. | Rates pallet  | Feature complete and permissionless version of the [Rates pallet](https://github.com/valibre-org/vln-node/tree/master/pallets/rate_provider) ready for production use(economically secure and are properly weighted) |  
| 4. | `testnet.valibre.network` | Runtime modules will be available for community testing in our public testnet |  

### Milestone 2 — plip.community 

* **Estimated duration:** 6 weeks
* **FTE:**  1
* **Costs:** 15,000 DAI

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the custom element.io interface that connects to a local testnet. |
| 0c. | Docker | We will provide a docker-compose file that set-ups the local testnet of the parachain with everything needed to test all the functionality delivered with this milestone. |
| 1. | Valor | Implement the ability to compile Valor to WebAssembly so the wallet API can run in the Web | 
| 2. | Summa wallet | Create the initial version of the Summa plugin that can derive a logged-in user blockchain address from its Matrix device keys |  
| 3. | Developer docs | Additional to the standard inline documentation we would provide a more in-depth overview of the PLIP stack at `dev.plip.community` with a guide on how to develop and run custom Valor plugins as HTTP APIs that can talk to the blockchain. |  
| 4. | `plip.community` | Valor and the wallet will be available for testing under `plip.community` that would showcase a custom version of the element.io chat with our tools running on top |  

## Future Plans

Valibre's primary ambition is to be come the decentralized WeChat, a "super app" that promotes community engagement and provides access to any multilde of services and marketplaces powered by a decentralized infrastruture (PLIP.) We plan to execute this in two distinct ways over the short and long term: 

_**Short Term**_

In conjunction with the development strategy explained above, we will aggressively ramp up community engagement efforts by executing a social media strategy across Telegram, Element, Medium, and Twitter. We have already been approached by two prospective partners to use our technology as the backend to power their decentralized communities. As such, we will build communities across social media and plan to promote a basic UI demo by the end of Q3 2021. Additionally, we have already successfully submitted a proposal to the Kusama Tresury and plan to submit two more proposals before the end of the year as a means to sustain our development as well as increase our visibility in the Kusama and Polkadot ecosystems.  

_**Long Term**_

Alongisde the promotion of our project, our team is working to define a buisness development strategy that aligns with both our resource constraints as well as the needs of the broader ecosystem. This will unfold as either: 

* Applying to become a Common Good Parachain on Kusama: We believe that our protocol aligns with the goals other projects in the ecosystem also vying for a CG parachain slot, but our capacity to abstract the complexity of crypoteconomics is a distinct feature. It is, therefore, an opportunity to provide public utility to the ecosystem. 
* Launching a Parachain/Parathread on Polkadot: With a unique tokenomic model, we also believe that Valibre can invite broader appeal and attract emerging projects and use cases beyond our current percieved scope. This also has obvious incentvies to attract VC investment to our protocol. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website, the Substrate Builder's Program, as well as a networking meeting with the Acala team. 

**Previous Funding and Support**

Valibre is the brainchild of Daniel Olano, and ultimately attracted the attention of Valiu, a stablecoin payments platform for users in Venezeula. Valibre was temporarily contracted by Valiu while also remaining an independent organization. We have created the basic foundation of PLIP with the required functionality of Valiu (remittances) as the basis of our inspiration, but now we are upgrading the foundations of PLIP to accomdate a broadend scope of use cases. This grant application is our first attempt seeking indepenent funding of any kind. 
