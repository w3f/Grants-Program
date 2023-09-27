
Any implementation that is EVM compatible (e.g. Moonriver or RMRK with EVM bridge). Furthermore we will look into NFT specific solutions like Uniques FRAME pallet & Efinity.


# NFT infrastructure | by walt.id

- **Project Name:** NFT infrastructure | by walt.id
- **Team Name:** walt.id
- **Payment Address:** Fiat (Mail: May 10, 2023, 8:55 AM)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

**Tagline:** NFT infrastructure for Polkadot

**Goal:** Offer the easiest and fastest way for developers to use NFTs on Polkadot via holistic open source (Apache 2) infrastructure and dev tooling.

**Project idea:** This project will make NFTs on Polkadot available to developers and businesses across industries and around the globe. We will do so by building an open source NFT layer for Polkadot (and its Parachains). Technically speaking, we will extend our existing NFT infrastructure with an “integration” for the Polkadot ecosystem.

**Benefits for Polkadot:**
1. Dev Tooling: Developers will get new and powerful open source dev tools which will enable them to build new types of d/apps and services using NFTs on Polkadot. (This will be useful for d/apps from DeFi to marketplaces.)
2. Traction: All our users/customers (public and private sector) will automatically be able to utilize the Polkadot ecosystem. In other words, we will funnel developers and business clients to the Polkadot ecosystem by making it accessible via our open source NFT infrastructure.
3. Bridges to the “old world”: The project includes a component that enables backwards compatibility with today’s (web2) enterprise infrastructure like identity and access management tools (C/IAM; e.g. KeyCloak).
4. Fueling adoption (Marketing): Walt.id is a top tier VC-backed startup that plans on fast growth (7-digits round, closure in Q4 2022/Q1 2023). Polkadot will strongly benefit from our marketing activities by participating at ecosystem events as well as  our commercial enterprise activities.
   Our motivation: We are building an identity and NFT abstraction layer for enterprises. Consequently, we are adding support for more and more blockchains / web3 ecosystems and Polkadot is one of the most relevant web3 ecosystems.

### Project Details

**Tech Stack:** We will be using the following tech stack:
* Walt.id solutions
  * Wallet Kit (incl. progessive web app, auth/exchange protocols like “Sign in with Ethereum” or “Self-Issued OpenID Connect”, …)
  * NFT Kit (incl. OPA integration)
  * IDP Kit (incl. OpenID Connect integration)
* 3rd party solutions
  * Polkadot / Parachains (L0/L1)
  * Polcaholic as blockchain explorer and indexer https://docs.polkaholic.io/#introduction
  * Open Policy Agent (OPA) https://www.openpolicyagent.org/

More information about our solutions (incl. Architecture, APIs, data models) can be found in our docs https://docs.walt.id/ or on GitHub https://github.com/walt-id.

**Mock Ups/Designs:** Please find some mock ups from our Cloud Platform here: https://drive.google.com/drive/folders/1zHGYcpRvjmWo9QXy9W24np80M10nugeH (Note: While the project will be open source under the Apache 2 license, we’re currently building a managed service/SaaS that will re-use our open source libs to further facilitate use by developers.)

**Architecture:** Please find a first high-level architecture of the planned project: https://drive.google.com/file/d/1-PYK6DbuTAOPx6covHkk224rvf7bJChV/view

**Relevant prior work:** Our identity, NFT and wallet infrastructure solutions are already used by thousands of developers, governments, DAOs and enterprises across industries. Moreover, we already built / are building a number of similar projects for other web3 ecosystems like Etheruem, Polygon, IOTA, OCEAN, EBSI, Gaia-X, Velocity Network as well and other major web3 ecosystems which we cannot yet name.   

**Scope:** The project will be focused on building three infrastructure products, which will extend our current open source libraries:
  * Wallet Kit: Implementation of a wallet infrastructure that enables developers to extend their apps with the ability to view, manage and utilize NFTs.
  * NFT Kit: Implementation of an NFT infrastructure that enables the verification of NFTs (e.g. ownership, meta data) and against customizable verification policies. Our NFT solution will support the ERC721 ink-based implementation and the two pallet-based implementations (Uniques and RMRK).
  * IDP Kit: Implementation of an “IDP” (Identity Provider) that enables NFT-based authentication and access management for web2 apps.
  
The following limitations follow from this scope:
  * The project is focused on enabling NFT “utility” use cases (i.e. verification of NFT ownership and metadata) in a verticale agnostic way (as described above). However, in the future we foresee projects around minting of NFTs.
  * The deliverables are open source libraries, which are built for developers. We will not ship elaborate user interfaces or applications for consumers.


### Ecosystem Fit

**Users**: Developers

**Needs**: NFTs are becoming a core technology to enable digital ownership of assets. At the end of the day, we believe that every asset will be tokenized and NFTs are a way of doing this. As a result, we see a growing need for solutions that make it easy for developers and businesses to build products with NFTs - in particular we see a need to realize the utility functions of NFTs such as in the context of access management. Recent projects by global brands like Starbucks (“Odyssey”) reveal that the market is hungry for new applications of NFT that go beyond the simple tokenization of things.   

**Value**: We create value for
* Developers
* Businesses
* Parachains / ecosystems based on Polkadot
* Polkadot

**Similar Projects**: There are no comparable projects according to our contact person at the web3 foundation. However, there is a number of organizations who are building Parachains and solutions in the NFT space like unique, RMRK, KodaDot, Enjin.

**USP**: Enterprise-grade, open source NFT infrastructure layer for developers building on Polkadot.

## Team :busts_in_silhouette:

### Team members

*   Dominik Beron (Founder/CEO) - Business Lead
*   Phil Potisk (Founder/CTO) - Tech Lead
*   Severin Stampler 
*   Kevin Burgmann 
*   Walid Khemiri
*   Mike Plotean 
*   Tamino Baumann 
*   Fatima Beron 
*   Raphael Baumann 

### Contact

* Dominik Beron (business): dominik@walt.id
* Phil Potisk (tech): phil@walt.id
* Website: https://walt.id

### Legal Structure

- **Registered Address:** Liechtensteinstraße 111/115, 1090 Vienna, Austria
- **Registered Legal Entity:** walt.id GmbH

### Team's experience

Dominik Beron (CEO)
* Serial entrepreneur and founder of walt.id
* Law degree (Mag/JD) and executive education (from University of Pennsylvania and Oxford)
* Advises EU Commission, governments, multinationals and top-tier consulting firms on web3, identity and tokenization
* Co-author of Europe’s new digital identity and wallet standards (EBSI, ESSIF)  
* Former advisor to the UN, Austrian Parliament

Phil Potisk (CTO)
* Serial entrepreneur and founder of walt.id
* Software engineering and business economics degree (MSc).
* +15y of work experience in software engineering
* Built and led diverse tech teams
* Built large-scale software-solutions for inter/national clients (Verisign, Telekom Austria, Infineon, Siemens, etc.)
* Background in security, biometric passports and the corresponding inspection systems

Severin Stampler (Chief Architect)
* Software engineering and business economics degree (MSc).
* +15y of work experience in software engineering
* Built and led diverse tech teams
* Built large-scale distributed systems in the field of AI/ML (e.g. NLP), big data, data processing, analysis, and retrieval

Raphael Baumann (Business Development)
* Serial entrepreneur
* Business administration graduate at WU Vienna & ESADE Barcelona
* +7y of building tech startups in the travel, sustainability, and web3 sector
* Specialised on Go2Market, Fundraising, Company Strategy
* Speaks English, Spanish, German

Fatima Beron (People & Ops)
* Business and economics degree
* Former Founder / COO (Impact Venture)
* Ex-Deloitte (Consultant)
* Forbes 30 under 30 (by Forbes US)

Walid Khemiri (Engineer)
* Software engineering degree (BSc)
* +5y of experience in engineering
* 2y of experience in web3/NFT space

Mike Plotean (Engineer)
* Software engineering degree (MSc)
* +8y of experience in engineering
* Full-stack engineer with background in AR/VR

Kevin Burgmann (Engineer)
* 1st employee at walt.id
* +5y of experience in engineering
* 2y of experience in identity/SSI

Tamino Baumann (Dev Advocate & Product Owner)
* +3y of experience in engineering
* Experienced dev advocate and customer success manager
* (Incredibly smart and reflected generalist)

### Team Code Repos

Company GitHub
* https://github.com/walt-id
* https://github.com/walt-id/waltid-nftkit  
* https://github.com/walt-id/waltid-idpkit  

Team GitHub
* https://github.com/philpotisk
* https://github.com/severinstampler
* https://github.com/khemiriwalid
* https://github.com/mikeplotean
* https://github.com/waltkb


### Team LinkedIn Profiles (if available)

* https://www.linkedin.com/in/dominikberon
* https://www.linkedin.com/in/philipp-potisk
* https://www.linkedin.com/in/severin-stampler-714605140
* https://www.linkedin.com/in/fatima-beron-122a035b
* https://www.linkedin.com/in/walid-khemiri-80324b144
* https://www.linkedin.com/in/plotean
* https://www.linkedin.com/in/taminobaumann


## Development Status :open_book:

Libs/Repos
* https://github.com/walt-id
* https://github.com/walt-id/waltid-nftkit  
* https://github.com/walt-id/waltid-idpkit

Publications / Content
* Whitepapers (e.g. whitepaper with BCG, NFTs for identity, SSI vs. NFTs)
* Playbooks (e.g. NFT Playbook)
* Blog (e.g. NFT Kit, IDP Kit)
Also, we had a conversation with David Hawig about this project.


## Development Roadmap :nut_and_bolt:

### Milestone 1 — NFT Kit + Wallet Kit + IDP Kit

- **Estimated duration:** 2 - 4 months, with final deliverys in Feb 2023.
- **FTE:**  6
- **Costs:** 29.750 USD (Total costs: 35.000 - 15% good will discount)

| Number | Deliverable                  | Specification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -----: |------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a. | License                      | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0b. | Documentation                | We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0c. | Testing and Testing Guide    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0d. | Docker                       | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0e. | Article                      | We will publish an article or workshop that explains what was done/achieved as part of the grant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1. | Architecture / Documentation | We will plan and provide the architecture of the proposed project. (Note that the architecture may be updated / extended throughout the project based on learnings from the actual implementation.)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2. | Wallet Kit                   | Implementation of a wallet infrastructure that enables developers to easily integrate NFTs from the Polkadot ecosystem in any app (e.g. web3, banking, consumer products, marketplaces, …). In other words: Developers will be able to extend their existing apps with the ability to view, manage and utilize NFTs (e.g. for trading or access management). The Wallet Kit is developed in Kotlin and comes with a Docker container incl. REST API.                                                                                                                                                                                                                                                                                                            |
| 3. | NFT Kit                      | Implementation of an NFT infrastructure that enables developers to build holistic applications and end-to-end use cases based on Polkadot. In this first proposal we focus on enabling “utility” use cases (e.g. ticketing, loyalty, vouchers, access). Therefore, the NFT Kit will enable the verification of NFTs across multiple dimensions (e.g. ownership, meta data) and against customizable verification policies (based on the Open Policy Agent). Our NFT solution will support the ERC721 ink-based implementation and the two pallet-based implementations Uniques and RMRK. The NFT Kit is developed in Kotlin and comes with a Docker container incl. REST API. Note, that it relies on 3rd Party libraries/services that also need to be hosted. |
| 4. | IDP Kit                      | Implementation of an “IDP” (Identity Provider) that enables NFT-based authentication and access management for web2 apps. Backwards compatibility is enabled by transforming NFT verification results into tokens (e.g. JWT) that can be handled by potentially any web2 app (e.g. identity/access tools, messengers, website builders, eCommerce frameworks, CRM tools). The Wallet Kit is developed in Kotlin and comes with a Docker container incl. REST API.                                                                                                                                                                                                                                                                                               |


## Future Plans

Walt.id has been funded by one of Europe’s top tier early stage investors / VCs and we are just about to close another funding round (7-digits round, closure in Q4 2022/Q1 2023), less than a year after our pre-seed. This will help us to further extend our product portfolio and at the same time unlock a substantial amount of marketing budget in order to promote the usage of our tools within our supported ecosystems (like Polkadot). Hence by investing and launching our own professional commercial activities targeting developers and enterprises who potentially benefit from our tools, we will fuel the growth of the Polkadot ecosystem substantially. This includes participating at events, conferences, and hackathons. Further, we are planning on building our own dev community events and activities, in order to promote cross-chain collaboration and knowledge sharing.

Summing up, we have big plans for the Polkadot ecosystem and we believe that Walt.id can become an integral part of it. That’s why this first grant proposal is just the beginning, and we envision to build a holistic identity, NFT, wallet and storage infrastructure layer for developers and innovators building on top of the Polkadot ecosystem. As such, the project is aligned with our long-term goal of building an abstraction layer for every web3 identity and NFT ecosystems.

## Additional Information :heavy_plus_sign:

We heard about the program via the web3 foundation website.

Further links that may be relevant incl:

**Content**
* White Papers https://walt.id/white-papers
* Playbooks https://walt.id/playbooks
* Case Studies https://walt.id/case-studies

**Products**
* Blog https://walt.id/blog/p
* Slides https://docs.google.com/presentation/d/1-105a2LaJVA0lzcQU9QrJx_GXzxAIf-BqCA0XqYzYBM/edit?usp=sharing
* Docs https://docs.walt.id/ 
* GitHub https://github.com/walt-id
