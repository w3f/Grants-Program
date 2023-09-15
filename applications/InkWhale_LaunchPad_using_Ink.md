# InkWhale - LaunchPad Platform using Ink! Smart Contract

- **Project Name:** InkWhale - LaunchPad Platform using Ink! Smart Contract
- **Team Name:** ArtZero
- **Payment Address:** 1scixS3ofLuBN8XEQQdSjMQaLtvvbcJiQAqpnaov8xopX78
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

ArtZero & InkWhale team is developing a decentralized LaunchPad using Ink! Smart Contract. All the work will be available for the public to reuse on Github. The project is being built and tested on Aleph Zero network but can be deployed on any parachains or Substrate-based blockchains that support Ink! such as Astar, Aleph Zero and 5ireChain. 


### Overview

### Project Details

After successful Grant Delivery of ArtZero and InkWhale as well as successful launch of NFT Marketplace ArtZero. We would like to create more useful dapps for the ecosystem, not only for us to use but for the public to see how powerfull Ink! Smart Contract is. This decentralized LaunchPad is the first LaunchPad developed using Ink!

The LaunchPad will allow project owner to distribute standard PSP22 tokens to anyone who wants to participate in the project. Features include:
- Only token contract owner can create a new Project for existing PSP22 tokens.
- Full Project Information saved on-chain via IPFS such as: project name, description, social media, project images, project roadmap, project milestones, team, tokenomics and sale phases;
- Multiple Sale Phases with Vesting Plan, Public/Private Sale; Price is set for each public phase; Vesting Plan include Immediate Release Rate; Vesting Duration adn Vesting Release Period;
- Support Whitelist for each sale phase with seperate price and amount for each address. This feature can be integrated with KYC where there are laws and obligations to comply with.

### Ecosystem Fit

We think that the launchpad will help the ecosystem grow faster because it helps project owners to: raising funds with minimal efforts and all transactions are secured and transparent which are vital for the public;

All work including Front-end; Back-end and Smart Contract work are available publicly which allow new Ink! developers to re-use the code and to learn quicker.

We believe in the future of Ink! Smart Contract and want to have your support to build this project because LaunchPad is an important element in every blockchain.

We plan to have external audit of the code in the future but the audit is out of scope in this proposal.

## Team :busts_in_silhouette:

### Team members

Mr. Brian Nguyen (founder, engineer)
There are another 4 key members in the company including:
Mrs. Phuong Hoang - CMO
Mr. Frankie Kao - Art Director and team of 5 designers
Mr. Long Nguyen - Full-stack developer
Mr. Albert Tran - Smart Contract & Back-end Developer
Mr. Tuan Vu - DevOp
Mr. Thien Nguyen - Front-end Developer
Mr. Nam Hoang - Blockchain Developer
Mr. Tung Nguyen - Back-end and Blockchain Developer

Other part-time testers and designers.

### Contact

- **Contact Name:** Brian Nguyen
- **Contact Email:** admin@artzero.io
- **Website:** https://inkwhale.net https://artzero.io

### Legal Structure

- **Registered Address:** 7th Floor, 37 Nguyen Son, Long Bien, Hanoi, Vietnam
- **Registered Legal Entity:** ArtZero Vietnam

### Team's experience

Brian Nguyen graduated from University of Nottingham with a 1st class degree in Computer and Electronics Engineering. Over the last 15 years, He has developed many data-driven applications. He also has deep interest in blockchain technology and development of decentralized apps on Ethereum, Binance Smart Chain, Tron, Solana
network. He is the founder of ArtZero - the first NFT Marketplace & also 1st dApp on Aleph Zero network.

Frankie Kao owns a design company and have been working in many projects on web design, graphic designs etc. He dedicated his resources to work with ArtZero.

Phuong Hoang has been in sale and marketing industry for over a decade. She has been Sale and Marketing Manager/Director for many companies including: Honda Vietnam, Plex Cinama, Saga Media etc.

All of our developers have at least 5-10 years experience in software development.

### Team Code Repos

- https://github.com/artzero-io
- https://github.com/InkWhale-net

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/nad128668/
- http://linkedin.com/in/phuong-phoebe-hoang-4b5888148
- https://www.linkedin.com/in/tran-albert-469b6319a

## Development Status :open_book:

The Platform is under development already with Front-end Design at:
https://www.figma.com/file/63xCCH71Oa8AfJpkK1wCO3/Ink-Whale?type=design&node-id=538-107&mode=design&t=jzPEaYJCUZLjUlDe-0

Smart Contract Code:
https://github.com/InkWhale-net/contracts/tree/nam-dev/contracts

Back end Code:
https://github.com/InkWhale-net/backend/tree/develop


## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 2-3 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** 20,000 USD

### Milestone 1  — InkWhale - LaunchPad Platform using Ink! Smart Contract
* **Estimated Duration:** 2-3 months
* **Costs:** 20,000 USD


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a.    | License            | Apache License 2.0                                           |
| 0b.    | Documentation      | We will provide technical documents and user guides |
| 0c.    | Testing Guide      | We will provide Unit Test for the Smart Contract and instructions how to perform the test |
| 0d.    | Article/Tutorial   | We will write an article or tutorial that explains the work principle as part of the grant. |
| 1. | Smart Contract Development | We will create 3 main contracts: LaunchPad generator as factory contract to initializer LaunchPad Contract; LaunchPad contract which has all features listed in the Project Details and a general PSP22 token contract for testing purposes|
| 2. | Backend | We use nodejs and mongodb on AWS Services. The cronjob monitor update queue to make sure data in the database match with data on-chain; The API serves the frontend with following functions: interacting with IPFS network, get launchpad information, get token information, update launchpad information when needed |
| 3. | Frontend | We will implement the Figma design as in https://www.figma.com/file/63xCCH71Oa8AfJpkK1wCO3/Ink-Whale?type=design&node-id=538-107&mode=design&t=jzPEaYJCUZLjUlDe-0 for the launchpad which contains 11 pages include: Project List; Project Creation (5 sub-pages); Project Details for Project Owner; Project Details for Public; Edit LaunchPad Information; Edit Whitelist and Update Phases;|


## Future Plans


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** from Founder of SubWallet
