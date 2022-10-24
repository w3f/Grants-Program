# W3F Grant Proposal

* **Project Name:** The InvArch - INV4 Frame : IP Assets, Licensings, & CLI tool for the Substate ecosystem.
* **Team Name:** InvArch Network
* **BTC Payment Address:** bc1qr2wg0snstgn4d2wc0alhhyxs32j58hhdrh5zal (PLEASE NOTE CHANGE)
* **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

* The InvArch Network is the cross-chain IP development & authentication hub built on Polkadot. InvArch provides a proven & validated "best-to-market"
environment for IP Assets & dApps, where as the InvArch Tinkernet provides a "first-to-market" bleeding-edge environment on Kusama for testing. 
The Eureka Relay is envisioned for future scaling improvements.

### The InvArch Network is powered by the INV4, On-Chain Innovation Funding (OCIF), & Cross-Chain Authentication (XCA) protocols.
* INV4 is responsible for defining how IP Assets are defined, stored, & interacted with across Web3.
* OCIF harnesses new & transparent funding possibilities to direct wealth towards the incentivization of realizing IP & unlocking true value.
* XCA unlocks the power of a trustless XC file tracking & data fingerprinting solution that realizes files just as uniquely as NFTs do with CIDs.

Under this grant, the [InvArch INV4 FRAME](https://github.com/InvArch/InvArch-Frames/tree/main/INV4) will be released & maintained by the InvArch
Network team. The INV4 FRAME is a Rust Pallet Module for Substrate-based chains that realizes the INV4 protocol, and as a result, the possibility for
on-chain IP Assets, Licenses, & flexibility for international compliance. IP Assets will be showcased in the Substate ecosystem. The INV4 FRAME Pallet
is a critical component to the InvArch Network's runtime & is hoursed within the [InvArch FRAME Pallet Library](https://github.com/InvArch/InvArch-Frames).

Every member of the time has an honest belief that this project will help make the world better through increased economic decentralization and by
helping to catalyze future innovations, it's a belief that motivates and inspires every one of us to see this project through. Together, we have
fostered a community of nearly 20,000 incredible supporters, partners, & ambassadors from all around the globe who understand & believe in the InvArch
mission. We have also held many exciting discussions with other Parachain teams about the empowering, understandable, and novel applications that on-chain IP will bring to the ecosystem.

### Project Details

* [InvArch Website](https://invarch.network/)
* [InvArch EduSeries 1 (Background)](https://invarch.medium.com/invarch-eduseries-1-the-i-p-war-zone-innovation-graveyard-we-live-in-1f11ded41b5f)
* [InvArch EduSeries 2 (IPS & IPF)](https://invarch.medium.com/invarch-eduseries-2-blockchains-bright-light-a-shining-future-for-ip-rights-164b7a4eaba5)
* [InvArch EduSeries 3 (IP License)](https://invarch.medium.com/invarch-eduseries-3-web3s-super-highway-the-future-of-transporting-ip-rights-ce1368800927)
* [InvArch EduSeries 4 (IPT & SIPA)](https://invarch.medium.com/invarch-eduseries-4-the-sipa-revolution-a-new-golden-age-for-innovation-3e90aed4a57)

<div align=center>
  <img src="https://i.ibb.co/K7xF83D/Screen-Shot-2022-05-16-at-2-30-52-AM.png">
</div>

### InvArch approaches ideas (IP) as a set of non-fungible components: The INV4 Protocol 
* IP Sets - Either a Root or Parent IP Set, and/or a Child Subset (collections) of interchangeable & freely composable IP Files & NFTs. 
* IP Files - NFT-based files that which can emulate or contain any content or data as found as any other file on the internet & local devices.
* IP Licenses - On-chain Licensing agreements pegged to an IP Set that can be used to allocate ownership, manage custom access, & define utility.
* IP Tokens - Fungible tokens pegged to an IP Set & managed using an IP License; multiple unique classes of IP Tokens can be pegged to the same IP Set.

* When interacting with `Pallet_ips` users can call the following functions `create_ips`, `destroy`, `append`, `remove`, `Allow_replica`, `Disallow_replica`, & `Create_replica`.
* When interacting with `Pallet_ipf` users can call the following functions: `mint` & `burn`.
* When interacting with `Pallet_ipl` users can call the following functions: `set_asset_weight` & `set_permission`.
* When interacting with `Pallet_ipt` users can call the following functions: `mint`, `burn`, `create_subasset`, `operate_multisig`, `vote_multisig`, `withdraw_vote_multisig`, `burn`.
* While some hidden functions are only callable by the actual Pallets in the INV4 FRAME themselves.

### Technologies
1. Rust
2. Substrate
3. Polkadot.js

### Components

### InvArch INV4 FRAME

### 1. IP Sets & IP Files
* `Pallet_ips` - Provides basic functionality for creating and managing an `IPSet`. You can think of an `IPSet` as an idea, which is basically a collection of components (intellectual property tokens) that define and describe that idea.
* `Pallet_ipf` - Provides basic functionality for creating and managing an `IPToken`. You can think of an `IPToken` as a component of an idea. For example, a business summary PDF file, or even a 3D rendering of a prototype mold. When combined and stored in an `IPSet`, that collection forms the foundtion for an idea. The more detailed and/or comprehensive an `IPSet` is, the stronger the idea.

<div align=center>
  <img src="https://i.ibb.co/2q9ZJcP/IPL.png">
</div>

### 2. IP Licenses & Tokens
* `Pallet_dev` - Provides basic functionality for structuring, managing, and listing a `DEV`(Decentralized Entrepreneurial Venture). You can think of a `DEV` as an agreement between multiple parties to come together as cofounders over a project in order to contribute towards an `IPSet`'s actualization.
* `Pallet_dao` - Provides basic functionality for creating and managing a `DAO` that helps govern a `DEV`. You can think of a `DAO` as a `DEV`'s governance mechanism. It helps regulate the and ensure the integrity and prudence of participants within a `DEV`.
* `Pallet_worklog` - Provides basic functionality for creating and managing a `WorkLog` within a `DEV`. You can think of a `Worklog` as a `DEV`'s method of recording and storing milestone/deliverables progressions and completions.

<div align=center>
  <img src="https://i.ibb.co/4WCtTzh/055.png">
</div>

* Ownership can be fractionalized using multiple pegged fungible assets representing ownership (ARO). An ARO is (typically) reflected in the first IP Token (IPT) attached to an IP Set. The asset ID of an ARO is defined in a copyright ownership agreement, and there can be multiples of these fungible assets.

### Ecosystem Fit

:link:  **Chains and Pallets**<br>
InvArch applies the categories below:
* NFT
* Governance/DAO
* Other (IP Assets)

### Project Uniqueness
* The world's first truly composable network for fully unlocking IP assets & on-chain IP attribution solution (that is flexible for its assets to experience international compliance in business, copyright, & legal transactions. InvArch revolutionizes the world of innovation beginning at the very start of development & pushes the bounds of web3 by taking existing concepts & challenging them to be different and better. By unlocking new doors & redefining what’s possible, InvArch will revolutionize the worlds of technical development & real-world collaboration down to their very core.

### Target Audience
* Entrepreneurs/Innovators
* Developers/DAOs/Artists
* Educators/Researchers
* Philanthropists

### Problem Addressed
* On-chain IP attribution (Achieved with this grant proposal).
* International flexibility for compliance (Achieved with this grant proposal).
* Barriers of access to startup capital. (OCIF Protocol)
* On-chain donations for access & transparency. (OCIF Protocol)
* File piracy & inability to securely expose data. (XCA Protocol)

## Team :busts_in_silhouette:

### Team members 
(Development & Engineers)

* [Dakota Barnett](https://www.linkedin.com/in/xcastronaut) - Founder & Head of Development
* [Gabriel Facco de Arruda](https://github.com/arrudagates) - Co-Founder & Head of Technology Development
* [Kresna Sucandra](https://github.com/SHA888) - Co-Founder & Head of Protocol Development
* [Mindaugas Savickas](https://www.linkedin.com/in/savickas) - Co-Founder & Head of Ecosystem Development
* [Matheus Braña Iannuzzi Baliones](https://github.com/S0raWasTaken) - Rust Core Engineer

* [Brunk Škvorc](https://www.linkedin.com/in/swader) - Technical Advisor (Founder, RMRK)
* [Marvin Tong](https://twitter.com/marvin_tong) - Product Advisor (Founder, Phala Network)

### Contact

* **Contact Name:** Dakota Barnett
* **Contact Email:** dakota@invarch.network
* **Website:** [https://invarch.network](https://www.invarch.network)

### Legal Structure

The InvArch Association. </br> 
Baarerstrasse 86, </br> 
6300 Zug, Switzerland </br> 

### Founders' experiences

* [Dakota Barnett](https://www.linkedin.com/in/dakotasb97) has experience succesfully directing and leading multi-national teams, overseeing and directing 
succesful project management strategies, and scaling large operations. He's a seasoned developer, programming in JavaScript (3yrs), Node.js (2yrs), 
React.js (2yrs), Python (2yrs), Rust (1yr), and the Substrate framework (1yr). Past work includes private projects for previous employers focused on machine learning, task automation, and website development. 💡

* [Gabriel Facco de Arruda](https://github.com/arrudagates) has experience as a Rust Developer, programming for the past 3 years, and as a developer in
the Web3 ecosystem. Gabriel is a a dedicated programmer and DeFi ninja who loves cutting edge technology and all things Substrate/Rust. He is committed to
building applications that help promote a more decentralized global economy, and comes with past experience developing and scaling such applications. He
brings direct experience developing applications for the Substrate ecosystem and as a Polkadot ecosystem contributor dedicated to building the future. 🧠

* [Kresna Sucandra](https://github.com/SHA888) is a dedicated programmer and Parity/Substrate enthusiast. Kusandra has been dedicated for the past year
learning everything there is to know about the Web3 ecosystem. Kresna is a medical doctor turned programmer with a background in Substrate blockchain
development focusing on multi-chain interoperability, DeFi, NFTs, and the Metaverse. He brings first-hand insights and experience as a former blockchain
startup co-founder and developer with a history focusing on JavaScript and Rust programming. Kresna is a Polkadot ecosystem contributor who loves 
entrepreneurship. 🚀

* [Mindaugas Savickas](https://www.linkedin.com/in/savickas) is a veteran marketing advisor and fundraising rockstar with a background providing strategic marketing solutions and scaling over 40+ product & marketing teams worldwide. He Provides a proven history of success and strategic insights as a tech marketing guru who lives & breathes outside of the box. 📈

### Team Code Repos

* InvArch Github: https://github.com/InvArch
* InvArch Node https://github.com/InvArch/InvArch-node
* InvArch Frames : https://github.com/InvArch/InvArch-Frames
* InvArch INV4 FRAME : https://github.com/InvArch/InvArch-Frames/tree/main/INV4

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

* [Dakota Barnett](https://www.linkedin.com/in/xcastronaut) - Founder & Head of Development
* [Gabriel Facco de Arruda](https://github.com/arrudagates) - Co-Founder & Head of Technology Development
* [Kresna Sucandra](https://github.com/SHA888) - Co-Founder & Head of Protocol Development
* [Matheus Braña Iannuzzi Baliones](https://github.com/S0raWasTaken) - Rust Core Engineer

### Team LinkedIn Profiles (if available)

* [Dakota Barnett](https://www.linkedin.com/in/dakotasb97), Founder
* [Gabriel Facco de Arruda](https://www.linkedin.com/in/gabriel-facco-de-arruda-00880787), Sr. Rust Dev
* [Kresna Sucandra](https://www.linkedin.com/in/kresna-sucandra/), Substrate Dev
* [Mindaugas Savickas](https://www.linkedin.com/in/savickas), Head of Marketing

## Development Status :open_book:

* InvArch is a project in the Substrate Builders Program.
* The INV4 protocol is complete & available for public testing.
* Gearing up for the launch of the Brainstorm Testnet (Solo-chain) on May 23rd, 2022.
* Preparing the InvArch Tinkernet for a crowdloan campaign & slot auction on the Kusama relay.

* INV4 v2 & xcINV4  (Est. August, 2022) will add additional functionality, wrapping of other Substrate NFTs, & authentication of assets.

## Development Roadmap :nut_and_bolt:

### Overview

* **Full-Time Equivalent (FTE):** 2.5
* **Total Costs:** $25,000 equivalent

### Milestone 1 — Implement IP Pallets & Standards

* **Estimated duration:** 4 weeks
* **FTE:**  2
* **Costs:** $10,000 equivalent

Goal - Develop Substrate Pallets that fully realize Git-level composability for NFTs; fully emulating file & folder functionalities.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 |
| 0b. | Documentation | Documents containing the description of the whole architecture design for InvArch, an introduction video, and appropriate `README.md` files will be included. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1. | Node Repo | Complete the deployment of the InvArch chain (https://github.com/InvArch/InvArch) |
| 2a. | Pallet_ips | Complete the development of [pallet_ips](https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ips) and realize the IP Sets standard. |
| 2b. | Pallet_ipf | Complete the development of [pallet_ipf](https://github.com/InvArch/InvArch-Pallet-Library/tree/main/ipt) and realize the IP Token Standard. |
| 3. | Article | 	We will write an **article** that explains the work done as part of the grant. |

### Milestone 2 — Implement DEV Pallets & Standards

* **Estimated duration:** 12 weeks
* **FTE:**  3
* **Costs:** $15,000 equivalent

Goal - Develop and deliver the DEV Pallets & Standards for the InvArch Chain/InvArch Pallet Library

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | GPLv3 | 
| 0b. | Documentation | An introduction video, and appropriate `README.md` files will be included. |
| 0c. | Testing Guide | The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
| 1a. | Pallet_ipl | complete the development of [pallet_ipl](https://github.com/InvArch/InvArch-Frames/tree/main/INV4/pallet-ipl) and copyright & license structuring mechanism. |
| 1b. | Pallet_ipt | Complete the development of [pallet_ipt](https://github.com/InvArch/InvArch-Frames/tree/main/INV4/pallet-ipt) and realize the refungible & multi-layer governance mechanisms. |
| 2. | INV4-Git middleware | We will release a middleware tool for managing INV4 assets using the standard git CLI commands transparently. |
| 3. | Article & Video | 	We will write an **article** that explains the work done as part of the grant, as well as release a video walk through demonstrating the INV4 protocol |

## Future Plans

* Launch the InvArchitects Assemble Program, the builders program of the InvArch Network.
* Finish Development on the On-Chain Innovation Funding (OCIF) & Cross-Chain Authentication (XCA) protocols.
* Maintain the Brainstorm Testnet, launch the Tinkernet Parachain on Kusama, & deploy the InvArch Network on Polkadot.

1. GitArch - Decentralized, Incentivized, Open-Source On-Chain Repository Platform powered using INV4-Git.
2. Tinkerspace - A VR Sandbox for experimenting, collaborating, & simulating development using INV4 Assets.
3. xcINV4 Module - Upgrade the INV4 protocol with enhancements made possible due with XCA for all Parachains to enjoy.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website
