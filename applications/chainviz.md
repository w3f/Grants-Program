# Chainviz v1

- **Team Name:** Helikon Labs
- **Payment Address:** `bc1qxjy7sw0ffvpq86t6hj3mmqhnfz2hxt6pk7zdz0` (BTC)
- **Level:** 🐤 2

## Project Overview :page_facing_up:

### Overview

Chainviz web application alpha version, available at [alpha.chainviz.app](https://alpha.chainviz.app), is an [open-source](https://github.com/helikon-labs/chainviz) real-time 3D visualization of the Kusama relay chain block production process.

<p align="center">
 <img width="800" src="https://raw.githubusercontent.com/helikon-labs/chainviz/development/readme_files/screenshot_01.png" />
    <br />
    <i>Chainviz alpha version</i>
</p>

Application in its current alpha version provides the following features:

- Real-time 3D visualization of:
  - Active validators, including paravalidation indication
  - Block production by validators
  - Block finalization
- Navigation of the 3D scene through zooming, panning and rotation
- Network status display
- Active validator list and search over identity/address
- Validator details panel upon click on a validator in the 3D model, or the validator list

**This application is to fund the building of the first major version of Chainviz**, with the following features/visualizations:

- Complete rebuild of the the existing functionality with improved UI/UX and WebGL models and animations
- Additional support for Polkadot
- New visualizations
  - Parachains
    - Assigned paravalidators
    - XCM messages between parachains, or from parachains to relay chains
  - Block content
    - Author
    - Extrinsics
    - Events

With these additional features, Chainviz is going to become a **complete real-time visualization** of the Polkadot and Kusama relay chains and their parachains.

### Project Details

#### Organization

Chainviz v1 upgrade is a collaboration between [Helikon Labs](https://helikon.io) and [Klad](https://klad.design), carried out under the management of Helikon Labs.

#### System Architecture

##### Current System

Chainviz alpha version currently utilizes [SubVT backend services](https://github.com/helikon-labs/subvt-backend) and Polkadot JS API as follows.

- SubVT active validator list [service](https://github.com/helikon-labs/subvt-backend/tree/development/subvt-validator-list-server)
  - List of all active validators
  - For each validator, a summary including:
    - Identity
    - Validator preferences
    - Self stake
    - Nomination count and total amount,
    - 1KV data if exists
    - and more
- SubVT network status [service](https://github.com/helikon-labs/subvt-backend/tree/development/subvt-network-status-server)
  - Era index
  - Era reward points
  - Total, minimum, maximum and average stake amounts
- Polkadot JS API
  - Finalized block header subscription
    - Utilized to mark finalized blocks
  - Best block header subscription
    - Utilized to display the block production animation
    - Identify uncle blocks and visualize them

Current Chainviz alpha version system architecture can be illustrated as follows.

<p align="center">
 <img width="400" src="https://raw.githubusercontent.com/helikon-labs/Grants-Program/helikon-chainviz-amendment-files/applications/chainviz-files/01-chainviz_alpha_system_architecture.png" />
    <br />
    <i><b>Figure 1</b> Chainviz alpha system architecture</i>
</p>

##### Proposed Upgrade

Proposed upgrade to the first major version requires the following additional data:

- Block content
  - Extrinsic list
  - Event list
- Parachains
- XCM messages

Proposed system architecture for the upgrade can be illustrated as follows.

<p align="center">
 <img width="600" src="https://raw.githubusercontent.com/helikon-labs/Grants-Program/helikon-chainviz-amendment-files/applications/chainviz-files/02-chainviz_v1_system_architecture.png" />
    <br />
    <i><b>Figure 2</b> Chainviz v1 proposed system architecture</i>
</p>

Upgraded system utilizes:

- Polkadot JS API to access block content and parachains, and subscriptions for new and finalized block headers
- SubVT Polkadot and Kusama `Active Validator List Service`s for the list and summary data for active validators
- SubVT Polkadot and Kusama `Network Status Service`s for live network data
- [Polkaholic XCM API](https://docs.polkaholic.io/#xcm) for the live display of XCM messages and their summaries

#### UI/UX Upgrades

We're going to implement a number of UI/UX upgrades, as follows:

- Improvement of the overall aesthetics and visual coherence of the application
- A better depiction of the block production process that is easier to comprehend for a wider range of users from the technically informed to the newly-introduced
- Display of block contents (i.e. hash, number, author, extrinsics and events) on click
- Responsive design for a range of screen sizes
- A better utilization of the 3D space to allow for parachain visualization and preparation for future upgrades
- Display of parachains, their assigned validators and the cross-chain messaging process

UI/UX upgrade implementation consists of 3 core components:

- Visual guidelines
- Application UI/UX upgrades
- WebGL graphics development and motion design upgrades

Development of the **visual guidelines** aims to bring visual coherency to Chainviz. From a functional perspective, this component serves as a core visual guide and foundation for all future UI/UX components and 3D graphics development.

**UI/UX upgrades** aim to elevate the project from a draft look to an efficient, performant, user-appealing, scalable web application. Visually, it will be based on the current project aesthetics while ensuring its responsiveness and accessibility. Through this work, we aim to increase usability and ensure application scalability in terms of functionality growth.

Third component of the visual upgrades, the development of the **upgraded WebGL graphics and motion**, faces a set of challenges that we aim to solve, including effective visualization of the block production and cross-chain messaging process. When we use the term effective visualization, we primarily mean one that:

- Can show the depicted processes in a simple yet systematic manner
- Can be engaging and valuable for users with different levels of expertise

### Ecosystem Fit

There is currently no direct match in the Dotsama ecosystem of the features offered by Chainviz. Chainviz Alpha got [shared on Twitter](https://twitter.com/gavofyork/status/1491480880245874708) by Gavin Wood upon initial release, and received a lot of praise from various Dotsama ecosystem members.

<p align="center">
 <img width="500" src="https://raw.githubusercontent.com/helikon-labs/Grants-Program/helikon-chainviz-amendment-files/applications/chainviz-files/03-chainviz_alpha_gavin_wood_twitter.png" />
</p>

There are currently two other projects that visualize certain aspects of the Dotsama blockspace:

1. [Kusamaverse by Odyssey](https://odyssey.org/kusamaverse), which is closer to a metaverse space for Kusama, focuses more on the interaction of the actors in the ecosystem.
2. [XCM Dashboard](https://polkadot.subscan.io/xcm_dashboard) by the Subscan team, which is a fairly static visualization of the active cross-chain messaging channels between parachains.

Chainviz is unique in that it focuses on a very clear real-time visualization of the internals of the Dotsama machine. As we're going to explain in the Future Plans section, it also has the potential to have educational, entertainment and functional value through future development.

## Team :busts_in_silhouette:

### Team members

- **Team Lead & Full-Stack Developer:** Kutsal Kaan Bilgin
- **Product Manager:** Egor Zmaznev
- **Project Manager:** Daria Kravchenko
- **Backend Developer:** Ivaylo Hubanov
- **UI/UX Designer:** [Ksenia Leonteva](https://www.behance.net/markeer)
- **3D Designer:** [Lena Sivakova](https://www.behance.net/hypnosphere)

### Contact

- **Contact Name:** Kutsal Kaan Bilgin
- **Contact Email:** kutsal@helikon.io
- **Contact Element/Matrix:** @helikon:matrix.org
- **Website:** [helikon.io](https://helikon.io)

### Legal Structure

- **Registered Address:** Omer Avni Mah. Balcik Sok. 4/4 34427 Beyoglu Istanbul Turkey
- **Registered Legal Entity:** Helikon Teknoloji ve Medya Tic. Ltd. Sti.

### Team's experience

#### Helikon Labs

A crypto-native software development company based in Istanbul. Founded by [Kutsal Kaan Bilgin](https://github.com/kukabi), Helikon Labs got introduced into the Dotsama ecosystem in January 2021. Currently focused on validator tooling, infrastructure support and creative coding projects for the Dotsama ecosystem.

- Received a Kusama treasury grant ([M1-3](https://kusama.polkassembly.io/treasury/99), [M4-5](https://kusama.polkassembly.io/treasury/129)) for:
  - Completed
    - [SubVT Backend](https://github.com/helikon-labs/subvt-backend)
    - [SubVT Data Swift](https://github.com/helikon-labs/subvt-data-swift)
    - [SubVT Data Android](https://github.com/helikon-labs/subvt-data-android)
    - [SubVT iOS](https://subvt.io) ([source](https://github.com/helikon-labs/subvt-ios))
  - Under Development
    - [SubVT Android](https://github.com/helikon-labs/subvt-ios)
- [Received](https://github.com/w3f/Grants-Program/blob/master/applications/subvt-telegram-bot.md) and [delivered](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/subvt_telegram_bot-milestones-1-and-2.md) a W3F Level-1 Open Grant for the [SubVT Telegram Bot](https://github.com/helikon-labs/subvt-backend/tree/development/subvt-telegram-bot) for [Kusama](https://t.me/subvt_kusama_bot) and [Polkadot](https://t.me/subvt_polkadot_bot).
- Member of both Polkadot and Kusama Thousand Validators programs.
- Running two Kusama validators, and one Polkadot validator on owned hardware in a colocation center in Istanbul.
- Active governance participation.
- Professional member of the [Infrastructure Builders Program (IBP)](https://ibp.network).

#### Kutsal Kaan Bilgin

Founder of Helikon Labs. Software developer with a BS in Computer Science and 20 years of experience in software development and leadership in diverse fields such as fintech, defense industry, interactive art installations and GIS. Focusing on user-friendly, aesthetically pleasing and creative blockchain application development since late 2019. Dotsama native since early 2021. Developer of SubVT (please see above), [Chainviz Alpha](https://alpha.chainviz.app) and [ChainSynth Alpha](https://alpha.chainsynth.app). Presenter of a Substrate Seminar [episode](https://www.youtube.com/watch?v=e-o_hTj3UFk&t=6119s&ab_channel=ParityTech) on blockchain UI application development.

#### Egor Zmaznev

Egor comes from a business analytics background with an emphasis on DeFi and web3 business models. He is proficient in R and Python in applications to ML modelling, focusing primarily on textual analytics in business applications with research emphasis on DeFi and DAOs. One of the co-founders of Klad Syndicate, where he managed a set of crypto projects varying from smart contract analytics to NFT marketplaces.

#### Daria Kravchenko

Daria focuses on internal team management. Coming from a conflictological education background, she can effectively set up and organise all of the internal communications and carry task management. Together with the designers, Daria worked on and finalized over 35 design projects only in the past year as a Klad Syndicate co-founder. Previously, managed design processes for the SubVT implementation.

#### Ivaylo Hubanov

Ivaylo Hubanov is coming from a strong Information Security engineering background with more than 15 years of experience in the field. He spent the last 5 years growing his passion for development and writing crypto and forex trading bots, and took part in a project for developing a 3D Fair in Unity. Also a member of Polkadot and Kusama Thousand Validators programs, he developed a complex validator orchestrator system for running validators on GCP instances while maintaining lower costs by using spot instances with low specs while inactive and high specs while active. The orchestrator required collecting live information from the chain and Ivaylo became the first developer to utilize and take part in the improvement of the SubVT websocket services. Worked together with Kutsal on improving the SubVT backend and the Telegram bots.

#### Ksenia Leonteva

Ksenia is a co-founder and leading UI/UX designer at Klad. She has 15 years of experience in web and UI/UX design and worked on over five crypto and DeFi-related projects over the past year. Ksenia has developed UI/UX design for the SubVT application: from the user-flow map and the wireframes to the whole app UI design. Focuses on clean user-friendly solutions, and ensures that the development team always have convenient files to work with. In 2022, won over ten web-design awards.

#### Lena Sivakova

Lena is a co-founder and 3D & motion designer at Klad. She has over seven years of experience and has participated in various crypto projects providing supporting 3D materials, including interactive validator 3D models for SubVT. Lena brings volume and movement to brands, allowing for spectacular immersive digital experiences.

### Team Code Repositories

- [Helikon Labs](https://github.com/helikon-labs)
  - [Chainviz](https://github.com/helikon-labs/chainviz)
  - [ChainSynth](https://github.com/helikon-labs/chainsynth)
  - [SubVT Backend](https://github.com/helikon-labs/subvt-backend)
  - [SubVT iOS](https://github.com/helikon-labs/subvt-ios)
  - [SubVT Android](https://github.com/helikon-labs/subvt-android)
  - [SubVT Data - Swift](https://github.com/helikon-labs/subvt-data-swift)
  - [SubVT Data - Android](https://github.com/helikon-labs/subvt-data-android)
- Team Members
  - Kutsal Kaan Bilgin [@kukabi](https://github.com/kukabi)
  - Egor Zmaznev [@Zmaznevegor](https://github.com/Zmaznevegor)

### Team LinkedIn Profiles

- [Egor Zmaznev](https://www.linkedin.com/in/zmaznevegor/)
- [Daria Kravchenko](https://www.linkedin.com/in/kravchenko-daria/)
- [Ivaylo Hubanov](https://www.linkedin.com/in/ihubanov)

### Team Behance Profiles

- [Ksenia Leonteva](https://www.behance.net/markeer)
- [Lena Sivakova](https://www.behance.net/hypnosphere)


## Development Status :open_book:

[Alpha version](https://alpha.chainviz.app) of Chainviz has been live since February 2022 as detailed under the Project Details section. There hasn't been any development for the first major version proposed by this document.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 8 months
- **Full-Time Equivalent (FTE):**  0.2
- **Total Costs:** 22,000 USD

### Milestone 1 — Complete Web Application Implementation

- **Estimated duration:** 8 months
- **FTE:**  0.2
- **Costs:** 22,000 USD

| Number | Deliverable                                       | Specification                                                                                                                                                                                                                                       |
|-------:|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                           | GPLv3                                                                                                                                                                                                                                               |
|    0b. | Documentation                                     | Milestone delivery report and inline code documentation. Separate markdown document that explains how to run an instance of the application.                                                                                                        |
|    0c. | Testing Guide                                     | Markdown document in the GitHub repository that documents the complete list of test cases for application Typescript code and how to run them.                                                                                                      |
|    0d. | Docker                                            | Necessary Docker/compose files necessary to run the application.                                                                                                                                                                                    |
|    0e. | Video Article                                     | A YouTube video accompanied by an article on Helikon website or another blog site that documents the milestone development/design process and the outcome.                                                                                          |
|    1a. | Web Application Source Code                       | Complete source code of the application available at the Chainviz GitHub repository. Documentation delivered as part of `0b` is going to have the simple instructions to run the software.                                                          |
|    1b. | Web Application Live Deployment with New Features | Web application live at [chainviz.app](https://chainviz.app), with additional real-time visualizations as documented above: complete block details on hover or click, parachains, parachain validators and their assignments, cross-chain messages. |

## Future Plans

- Add educational components and user guides.
  - Replayable voice recordings attached to the various components and processes for the users who would like to learn more about the internals of the Dotsama machine.
  - Text and visual augmentation.
  - Animated explainers and hints that give better understanding of the technology and processes.
- Validator spaces and staking through Chainviz. Support for validators to claim and update their spaces.
- iOS and Android phone, table and watch applications.
- Exploration of VR and AR possibilities.
- Creating a wiki for validator operators, supporting pull requests.
- Adding indexes to provide insights for nominators (e.g. performance, telemetry data, reliability).
- Creating validator timeseries visualizations to provide insights on performance, reliability and stability.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We have successfully [delivered](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/subvt_telegram_bot-milestones-1-and-2.md) a W3F Level-1 Open Grant. Please view the [application document](https://github.com/w3f/Grants-Program/blob/master/applications/subvt-telegram-bot.md) for the details of our first introduction to the Grants Program.

**Awards Received**

Some of the recent design awards that the design team have received:

1. CSS Design awards ([link](https://www.cssdesignawards.com/sites/klad-syndicate/41871/))
2. Awwwards ([link](https://www.awwwards.com/Klad/))
3. Mindsparkle Mag ([link](https://mindsparklemag.com/website/klad-syndicate/))
