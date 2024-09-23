# ParaSpell xcNFT pallet

- **Team Name:** ParaSpell Research Foundation
- **Payment Details:**
  - **DOT**: 139zHfuPsG62FKQtwjxMwqZAwPNZG6BooUWgF6L3LWYLUu3z
  - **Payment**: FIAT - Payment details will be provided in advance before first milestone delivery if the proposal gets accepted.
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 🐤

## Project Overview :page_facing_up:

### Overview

xcNFT is a pallet/substrate module meant to enhance the cross-chain experience and bring real adoption to cross-chain non-fungible asset sharing in Polkadot and Kusama ecosystems.

There aren't any solutions for cross-chain non-fungible asset sharing besides Unique's proof of concept solution called "xNFT" which hasn't seen much adoption since it was introduced and the last change to [xNFT pallet](https://github.com/UniqueNetwork/xnft) was performed 6 months ago. There was another attempt to create an [xNFT pallet](https://github.com/antiers-solutions/xNFT) but the concept seems unmaintained with the last commit performed 6 months ago at the time of the [delivery of the grant](https://github.com/w3f/Grant-Milestone-Delivery/pull/1115). This led to us asking... Why there isn't more adoption? Unclear UX? Hard to implement? Lack of documentation? Lack of user guides?

But why should we care? 

There are many reasons why we need a functional cross-chain non-fungible asset-sharing module as soon as possible:
- Other ecosystems are already able to natively share cross-chain non-fungible assets (eg. [Cosmos](https://cosmos.network/interoperable-nfts/))
- Existing artists may leave if they can't transfer non-fungible assets between Parachains to gain more traffic/sales making them able to optimize their selling strategy
- Newcoming artists may choose other ecosystems because they already offer fully functional non-fungible asset-sharing
- Less NFT usage = fewer NFT use cases (There were many innovative attempts aimed to enhance NFT usability eg. Proof of ownership NFTs or NFT car/house sharing concepts)
- Overall the network misses important traction


### Project Details

This proposal proposes a solution to a non-fungible asset-sharing on Polkadot. As there are only a few similar solutions for non-fungible asset sharing, the development of our solution has to be purely research-based. At the time of writing this proposal, no other actively used solutions are present. Our solution combines collection and non-fungible asset management and the ability to cross-chain share both types mentioned. The critical design choices were inspired by a fungible asset-sharing module called ”xTokens” due to already mentioned lack of existing solutions for non-fungible asset sharing.

xTokens has the following advantages compared to other fungible asset-sharing modules:
- Messages are simple to construct
- Simple asset selection mechanisms
- Contains every necessary function for asset sharing in one place
- Precisely programmed functions that only require a few necessary parameters

We wanted to create a process of sharing cross-chain non-fungible assets with other chains that is light, efficient, and simple. Our initial design consisted of simple sequence steps shown below:

![Sequential-diagram](https://github.com/user-attachments/assets/a5a3560a-356c-4f8f-bbe2-e3c478fbd1a5)

Once the user triggers the function to mint a non-fungible asset, the xcNFT module triggers Parachain A to mint a non-fungible asset if the user is authorised. Once minted, Parachain sends a cross-chain message to Parachain B through the Horizontally Relay Routed Message Passing (HRMP) protocol. If everything succeeds, the user is notified of a success with an event. The process was then designed further with a simple state diagram visible below - that essentially displays the same functionality mentioned above in a more graphical way.

![State-diagram](https://github.com/user-attachments/assets/e7c27924-e7bd-4c88-9c28-4fece68a851e)

**Built with emphasis on UX**

<img width="572" alt="UX PoC" src="https://github.com/user-attachments/assets/5a284415-dad0-4d6d-a855-3d10b8b7928b"></img>

Our [proof-of-concept](https://github.com/paraspell-research-foundation/xcNFT-Pallet/tree/main) solution was built to be easy to interact with for both developers and users. Events handle debugging of cross-chain messaging, so users are notified if the cross-chain message fails to execute the expected task. The destination selection logic is much simpler - users just type in the destination Parachain ID.

**How module infrastructure looks at the current PoC state:**


![Current PoC](https://github.com/user-attachments/assets/7066c39c-3cff-4a9f-983c-667fc40b6362)

Currently, our [proof-of-concept](https://github.com/paraspell-research-foundation/xcNFT-Pallet/tree/main) solution stores lots of unnecessary data (Both on the origin and destination chain) to ensure the uniqueness of each asset, this will however be greatly improved once the module is reconstructed to use NFTs and Uniques modules for non-fungible asset management.

**How module infrastructure will look after proposal execution:**

(Notice xcNFT rebrand from xNFT)

![After PoC](https://github.com/user-attachments/assets/feea0805-a1e4-46f9-9fc4-fe7d4975c342)

All non-fungible and collection related data will now be handled by NFTs and Uniques pallet which for non-cross-chain transfers will be interacted with directly and for cross-chain transfers will be interacted with through specialized parsing functions meant to parse cross-chain instruction into specified calls on destination chains. The module will also include many additional cross-chain and non-cross-chain functions further enhancing usability for developers and users.

#### Technology Stack 💻️

- Rust
- Polkadot SDK
- Substrate Frame
- Parachain template
- Zombienet

### Ecosystem Fit

The proposal introduces a cross-chain Non-fungible asset-sharing module/pallet called "xcNFT". This module is meant to be fully common good and open source to everyone. Our priority is to increase NFT usage in the ecosystem. The targeted audience would in this case be Parachain teams which already adopt some sort of NFT support (Via NFTs or Uniques pallet) or Parachains which want to implement support for NFTs. Once enough Parachain teams implement cross-chain NFT support - ecosystem/dapp developers might want to create JS/TS packages that provide simple wrappers lifting developers from implementation complexity further.  

The project in its final form would allow for UX-friendly NFT/Collection creation/cross-chain transfers. There is currently a lack of available and fully maintained solutions as well as a lack of Parachain adoption. The ecosystem has multiple NFT marketplaces which would also benefit from NFT cross-chain support.

#### Related work:
Before this proposal, we conducted research on existing solutions in the ecosystem. We found, that there are only two solutions available and they do not seem to provide any new updates lately. These are:

[xNFT](https://github.com/UniqueNetwork/xnft) by Unique network

[xNFT](https://github.com/antiers-solutions/xNFT) by AnshulWeb3

How do they differ to our proposed solution?

| Feature                 | ParaSpell xcNFT                                                                                                                                                                                                                  | Unique xNFT                                                                                                        | Anshul xNFT                                                                                                        |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| UX                      | Plan to allow for skipping  difficult multilocation  selection by only typing destination chain ID  (But also giving ability to specify concrete multilocation). The choice between concrete  & abstract location specification. | Needs concrete and  difficult to understand  (To NON-IT users)  multilocation specification  in order to transfer. | Needs concrete and  difficult to understand  (To NON-IT users)  multilocation specification  in order to transfer. |
| Support for NFT pallets | Plan to implement support for both NFTs and Uniques pallet.                                                                                                                                                                      | Support for NFTs pallet                                                                                            | Support for NFTs pallet                                                                                            |
| Asset  management       | Allows for both creating and cross-chain sharing Collections and Non-Fungible assets. Why have 2 separate modules when 1 can handle both tasks?                                                                                  | Allows for sharing  existing collections  and non-fungible assets.                                                 | Allows for sharing  existing collections  and non-fungible assets.                                                 |
| Special functionality   | Ability to perform metadata updates, burns and ownership transfers cross-chain.                                                                                                                                                                 | No additional functionality other than cross-chain transferring found.                                             | No additional functionality other than cross-chain transferring found.                                             |
| Documentation           | Planned to be created for both: Users & Developers to cover  implementation and usage.                                                                                                                                           | No data, not even Readme.md documentation                                                                          | No data on documentation other than in Readme.md                                                                   |

## Team :busts_in_silhouette:

### Team members

Dušan Morháč - PhD. Student, project Founder & Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava

Michael Absolon - Faculty of Informatics and Information Technologies STU in Bratislava Master's degree graduate, Core Dev. 

### Contact

- **Contact Name:** Dušan Morháč
- **Contact Email:** dudo.morhac@gmail.com


### Legal Structure

- **Registered Address:**  Postajok 270/5, 085 01 Bardejov, Slovakia
- **Registered Legal Entity:** Michael Absolon

### Team's experience
-  Dušan is the founder of the ParaSpell brand. A project, that is actively serving the Polkadot & Kusama developer community with integration of complex cross-chain communication. Dušan is very passionate about Blockchain technology and Polkadot in particular. In his free time, Dušan explores new possibilities and tries to come up with innovations that could help the ecosystem in a common good way. He recently finished his master's studies at the Faculty of Informatics and Information Technologies STU in Bratislava and decided to continue to study PhD. at the same university with one goal in mind. Bring more scientific adoption to Polkadot. As there are not that many research-oriented articles about Polkadot yet, he is among the very few who try to push cross-chain research on Polkadot to international research libraries - His portfolio consists of 4 publications [ICECET22](https://ieeexplore.ieee.org/document/9872938), [ICBC23](https://ieeexplore.ieee.org/document/10174872), [BCCA23](https://ieeexplore.ieee.org/document/10338906), [SAC24](https://dl.acm.org/doi/10.1145/3605098.3636137) (2 another already accepted to international conferences BCCA 2024 in Dubai & Brainz 2024 in Berlin) as well as 2 Journal submissions from which one is already partially accepted and the other one was submitted recently. Dušan is a proud and successful graduate of earlier Polkadot Blockchain Academy wave 2 held in Buenos Aires - [NFT that was minted as a certificate by Parity](https://singular.app/collectibles/statemine/20/12). This course gave Dušan lots of insightful information which he utilizes in ecosystem research on daily basis.

The Physical form of a certificate from PBA Buenos Aires 

<img width="400" alt="certificate" src="https://user-images.githubusercontent.com/55763425/275783335-140792ac-80dd-4e48-92ce-fa630c3f390b.png"></img>

- Michael is a dedicated TypeScript developer with 4 years of full-time experience in the Web2 sphere. Michael's expertise in this field was further solidified in 2019 when he won first place in the Junior Internet Web competition for his online multiplayer game, which was written in JavaScript. In addition to his professional background, Michael also achieved a master's degree in the same computer science University as Dušan. His passion for technology led him to explore Blockchain technology in his free time. Michael delivered many core functionalities to the XCM Tool stack at ParaSpell.

Dušan and Michael have been colleagues for over 2 years now. Together they try to improve Polkadot's cross-chain user experience by abstracting complex logic anywhere possible.

### Team Code Repos

- https://github.com/paraspell-research-foundation
- https://github.com/paraspell
  
### Team Github Profiles 🧑‍🎓

- https://github.com/dudo50 Dušan Morháč
- https://github.com/michaeldev5 Michael Absolon

### Team LinkedIn Profiles 👨‍🚀

- https://www.linkedin.com/in/dudo50/
- https://www.linkedin.com/in/michael--absolon/


## Development Status :open_book:

We have already built a functional demo / proof of concept for the xcNFT pallet - [link](https://github.com/paraspell-research-foundation/xcNFT-Pallet). The proposal aims to add / rework many crucial parts that would make xcNFT much more compliant to main net use (Such as supporting both NFTS and Uniques pallet and more). 

We have also submitted a paper regarding this concept to [Brainz 2024 conference](https://brains.dnac.org/2024/) that specifies in Blockchain related research. This paper got accepted and we will present it on the conference in Berlin in person.

<img width="1171" alt="brainz 2024" src="https://github.com/user-attachments/assets/cb9010c5-ed8f-4165-9bec-1f3ceeb76177"></img>

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 months
- **Full-Time Equivalent (FTE):**  1,5
- **Total Costs:** 30.000 USD
- **DOT %:** 50%

### Milestone 1 — Reworking xcNFT from the ground up

- **Estimated duration:** 4 months
- **FTE:**  1,5
- **Costs:** 25,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | LICENSE | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**  in Readme.md containing startup guide and use guide. |
| **0c.** | Testing and Testing Guide | We will provide unit tests for core functionality. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | xcNFT Bump dependencies | Update all the dependencies to latest versions & fix possible issues. |
| 2.a | xcNFT Uniques| Implement the support for the Uniques pallet (The pallet will be able to interact with the Uniques pallet and send Uniques created NFTs cross-chain) (NFT Origin: Uniques in dropdown selection). |
| 2.b | xcNFT NFTS | Implement the support for NFTS pallet (Pallet will be able to interact with NFTS pallet and send NFTS created NFTs cross-chain) (NFT Origin: NFTS in dropdown selection). |
| 3. | xcNFT Abstract destination selection logic | Abstract destination selection logic from users/developers (No need to fill in junctions, just insert destination parachain ID) + give the ability to insert custom multilocations if needed (Concrete & Abstract, just restructuralized and more UX friendly).  |
| 4.a | xcNFT Burn asset | Add ability to burn asset cross-chain (If the asset was sent cross-chain and the owner no longer wishes for the asset to exist allow for cross-chain deletion). |
| 4.b | xcNFT Metadata | Add ability to customize NFT/Collection metadata cross-chain (If the asset needs a metadata change it will be possible to perform cross-chain). |
| 4.c | xcNFT Transfer ownership | Add ability to transfer ownership of Collection/NFTs cross-chain. |
| 5. | xcNFT MultiAsset| Add functionality of MultiAsset transfer (If the owner wishes to cross-chain transfer multiple non-fungible assets). |

### Milestone 2  — More features, benchmarks and docs

- **Estimated Duration:** 2 months
- **FTE:**  1
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | LICENSE | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**  in Readme.md containing startup guide and use guide. |
| **0c.** | Testing and Testing Guide | We will provide unit tests for core functionality. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will write a medium article summing up the xcNFT pallet innovations along with a comparison to other existing solutions. |
| 1. | xcNFT Abstract collection/NFT selection logic | Add ability to specify collection/NFT asset in a concrete or abstract way (Select which collection by id, which asset from which collection by ids or provide a hash of the concrete asset/collection). |
| 2. | xcNFT Refactor | Optimize function/error/event naming to be self-explanatory, refactor code to enhance code readability, size optimization & enhance code reuse for the same functions (For example, if some functionality is used more than once throughout the functions, create a separate function for it). |
| 3. | xcNFT Benchmark | Add benchmark tests to assess potential hardware requirements from Pallet in runtime (Builds ground for future optimizations). | 
| 4.a | xcNFT Github Pages Docs I | We will provide thorough documentation about xcNFT from the developer perspective (Write about each functionality offered by Pallet, provide a guide on how to implement xcNFT to Parachain and more). |
| 4.b | xcNFT Github Pages Docs II | We will provide thorough documentation about xcNFT from the user perspective (We will write what each required parameter means, how to find out what to enter into each parameter as a user (For example: How to find his asset ID and more). These guides are often missing at pallet documentation (If any pallet documentation is even provided). |


## Future Plans

Our long-term vision for this project is to gain as much Parachain adoption as possible. The more teams that would integrate and adopt XCM NFT the better. There is currently a lack of adoption in this topic because of a lack of solutions to choose from and this needs to be fixed.

As for long-term maintenance and development, we wish to establish this project in a common good way, once Parachain teams adopt it, they can cooperate together in maintaining it and improving it by our side. If they truly see potential in cross-chain NFT adoption and use cases they will be as equally motivated as we are to keep this project up.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation

We have already established a proof-of-concept solution that can share simple non-fungible assets. This solution is designed to be easily improved and upgraded. The next goals are outlined in the milestones section.

We previously applied for funding with ParaSpell on the XCM Tool stack in 5 separate Grants [Phase1](https://github.com/w3f/Grants-Program/pull/1118), [Phase2](https://github.com/w3f/Grants-Program/pull/1245), [Phase3](https://github.com/w3f/Grants-Program/pull/1589), [Phase4](https://github.com/w3f/Grants-Program/pull/1817), [Phase5](https://github.com/w3f/Grants-Program/pull/2057). The tools are now successfully established and continually improve the cross-chain experience for many projects that now implement them. The XCM Tool stack remains (and will remain) completely open source and common good. The project receives maintenance support from the Kusama Treasury.
