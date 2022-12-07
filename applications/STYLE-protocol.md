# W3F Grant Proposal

- **Project Name:** STYLE protocol
- **Team Name:** STYLE protocol Team
- **Payment Address:** 0x6c60Fb0439453f343ef733923A67DeCc0164A303 (USDC) Ethereuem
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

### Overview

STYLE Protocol brings true monetization and utilization to any Virtual Asset in any game, metaverse or virtual world – based on NFT-sublicensing mechanisms, the protocol enables true interoperability of Virtual Assets and NFTs across such multiverses.
STYLE Protocol aims to be the hub that bridges the current gap between web 3.0 and, e.g. gaming companies (and others) to create interoperability and cross-multiverse utilization while being embedded in play/rent/…-to-earn principles and guilds, always assuring decentralized frameworks. The goal is to further enhance users (e.g. players/customers) to utilize assets they create, own, or repeatedly use across metaverses, games and virtual worlds.

The decentralized interoperability protocol we build has the same structure as the Polkadot Ecosystem. It has its main pillar which is a DAO and around that we have Owners (Owners are people bringing Assets into the protocol to be used within the ecosystem. These can be existing NFTs or off-chain 3D files), Tailors (Tailors are manipulating Digital and Virtual Assets to enable them to be used across multiverses, e.g., creating a 3D image from a 2D asset or fitting a 3D asset for an environment) and Environments (Environments are virtual worlds, metaverses or any ecosystem within the multiverse utilizing the protocol’s supply chain to bring Assets into their world for their players and customers to use). These three “Para-ecosystems” fuel the decentralized protocol to get work all together.

We are interested in this topic because we bring firstly true interoperability to NFTs and 3D assets in general. This has never be done like this before and we’re the first to enable this with a working MVP


### Project Details

STYLE Protocol is already in Testnet it can seen [HERE](https://styleprotocol-version-1.herokuapp.com/choose-role) 

![Image](https://i.seadn.io/gae/eZSVcLeOiIdpnkhoMkUWPAm0cxoWIuBHGDmy9b4BNNUqxwhj9yQyZod9XthbQXfkB1A7_rKK7IL0Bj5u5S5XoLboST1VwL1S_-X3lA?auto=format&w=1000)

- [Data models / API specifications of the core functionality](https://www.npmjs.com/package/@style-protocol/sdk)

- An overview of the technology stack to be used
  * Solidity for smart contracts
  * Web3Js + React JS
  * Substrate 
- [Documentation of core components, protocols, architecture, etc.](https://style-protocol.gitbook.io/sdk/use-cases/for-developers)
- [PoC/MVP or other relevant prior work or research on the topic](https://styleprotocol-version-1.herokuapp.com/choose-role)

### Ecosystem Fit

STYLE protocol will help users to bridge NFTs from the Polkadot ecosystem to EVM compatible chains and generate derivatives from that NFTs. We are targeting users from the Polkadot ecosystem who hold NFTs based on different standards such as RMRK. NFTs owners can generate income from the derivative that has been created in STYLE protocol. We are similar to RMRK NFTs standard but we are different in the hosted chain, our smart contract run on any EVM chains and RMRK is supported only on Kusama and polkadot, we are providing new mechanism to support multi source in NFTs like RMRK, our approach is based on creating derivative from the original NFTs

## Team :busts_in_silhouette:

### Team members

- Leo Hilse
- Hamza Salem
- Tim Segewitz
- Savish Uttam
- Sheikh Sharjeel
- Fatima Ezhara


### Contact

- Contact Name: Leo Hilse
- Contact Email: leo.hilse@protocol.style
- Website: [https://www.protocol.style/](https://www.protocol.style/)

### Legal Structure

- **Registered Address:** Zug, Switzerland
- **Registered Legal Entity:** Association


### Team's experience

- Leo Hilse - Web2 & Web3 Entrepreneur with experience in tech platform businesses, the fashion industry and crypto. Previously built a Fashion-NFT marketplace called „styleXchange“ (with some members of this team) also a supporter of a crypto family office in Germany and an active advisor to the Metaverse Fashion Council.
- Hamza Salem – Experienced Blockchain engineer and professor for advanced blockchain development as well as blockchain scholar and influencer with a large developer following on Youtube.
- Tim Segewitz – OG NFT Owner & Trader and crypto educator in the German blockchain ecosystem, currently the CMO of STYLE Protocol and here to market the protocol to the right audience and connecting with games, metaverses and virtual worlds. Founder of CEG – Crypto Education Germany.
- Savish Uttam - 3D Expert and long-term game developer as well as virtual designer, guiding the connectivity with metaverses and games for a breathtaking transition of digital assets.
- Sheikh Sharjeel - Experienced Developer who has led teams of 15+ developers to create apps, platforms and beautiful online experiences for user/players and visitors, ensuring great usability of the protocol for participants.
- Fatima Ezahra - Luxury and fashion expert with experience in the beauty industry from L’Oreal to Vichy, now making sure the right people for wearable NFTs and avatar partnerships are found.


### Team Code Repos

- [https://github.com/STYLE-Protocol/](https://github.com/STYLE-Protocol/)
- [https://github.com/STYLE-Protocol/STYLE-Protocol-SDK](https://github.com/STYLE-Protocol/STYLE-Protocol-SDK)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [Hamza Salem](https://github.com/enghamzasalem)
- [Andrey Korokhov](https://github.com/1kresh)
- [Protocol Style](https://github.com/ProtocolStyle)

### Team LinkedIn Profiles (if available)

- Leo Hilse: https://www.linkedin.com/in/leo-hilse/
- Hamza Salem: https://www.linkedin.com/in/hamza-salem-5550baa3/
- Tim Segewitz: https://www.linkedin.com/in/tim-segewitz/
- Savish Uttam: https://www.linkedin.com/in/savish-uttam-917617175/
- Gian Hammond: https://www.linkedin.com/in/gian-marco-hammond-516376181/
- Sheikh Sharjeel: https://www.linkedin.com/in/sheikh-muhammad-sharjeel-88b342b4/
- Fatima Ezahra: https://www.linkedin.com/in/fatima-ezahra-el-khalloufi/
- Luai Shaibani: https://www.linkedin.com/in/luai-el-shibani/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Total Estimated Duration: (3 months)
- **Full-Time Equivalent (FTE):** (2 FTE)
- **Total Costs:**  24,000 USDC

### Milestone 1 — Fetching POlkaDOT/RMRK NFTs 

- **Estimated duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Wallet connect| Integrate STYLE protocol with polkadot.JS wallet integration (will include the UI integration only).
| 2. | Fetch NFTs| Fetch regular NFTs created on any parachain. Here we are using Polkadot js.
| 3. | Fetch RMRK Nfts| Fetch multi-resource NFTs from RMRK standard. By using [moonriver smart contract](https://moonbeam.network/announcements/rmrk-logic-coming-to-moonriver/) or RMRK SDK.
| 4. | Integration to STYLE Protocol| We will deliver the implementation of the wallet connection to fetch all mentioned NFTs from both RMRK and other parachains NFTs. Polkadot users can connect their own wallet and fetch NFTs to be staked to STYLE protocol.


### Milestone 2 — RMRK NFTs Bridging to STYLE protocol

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | Staking/renting NFTs| After Wallet integration users will be allowed to stake specific NFTs from their own wallet and specify which if they want to stake it in the protocol. In the backend we will create a relayer to stake NFTs in polkadot and sign it to be used in STYLE protocol.
| 2. | Minting NFTs Derivatives| Users who own NFTs in RMRK can create derivatives NFTs based on the resources for each Metaverse that they own.
| 3. |Request for RMRK resources| Users who own NFTs in RMRK can request derivative NFTs using their own original NFTs to be added as new resources in the original RMRK NFTs. In the backend, our Tailors community will have the chance to create such resources based on the proposed rewards.  
| 4. | Minting New Derivatives in STYLE| Users can mint new derivatives that have been created by tailors after DAO approval for the resources.

### Milestone 3 — STYLE Derivative to RMRK NFTs

- **Estimated Duration:** 1 month
- **FTE:**  2
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | ERC721 to RMRK| Users who own derivatives based on ERC721 in STYLE can transform all resources to be minted as RMRK NFT.
| 2. |ERC1155 to RMRK| Users who own derivatives based on ERC1155 in STYLE can transform all resources to be minted as RMRK NFT.
| 3. |RMRK Minting| STYLE protocol will provide the ability to combine NFTs together and write how RMRK should deal with the minted NFT. In the backend, we will use the current standard that RMRK allows to mint NFTs and combine the traits/resources. For example, one derivative is a 3D file in metaverse like Decentrland and another derivative is a 3D file in Monaverse so STYLE combines both in  one multi resources RMRK NFT.





## Future Plans

STYLE protocol aims to support both EVM NFTs and other Polkadot Based NFTs and we have started with RMRK. Based on the community and the adaptations we will support other parachains' standards. 


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
