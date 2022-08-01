# W3F Grant Proposal

- **Project Name:**  Aventus Network Services
- **Team Name:**  Aventus Network
- **Payment Address:** 16HqymHVxdLtK8jtbur7DusQrfLAVEJZfsQijfxVwhQHiTgU
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3

## Project Overview :page_facing_up:

### Overview

Aventus is an enterprise-focused, scalable, sustainable and interoperable layer 2 blockchain on Ethereum, moving to be a parachain in Q3 2022, that makes building on Polkadot, Ethereum and beyond accessible for companies in any ecosystem. To date, Aventus’ enterprise-grade modular architecture has supported use cases including NFTs, video games, loyalty schemes, event ticketing, supply chain provenance and cargo management.

This proposal aims at widening the usage of the whole Polkadot universe by making it easily accessible to business customers. Aventus is an established provider of enterprise-grade infrastructure which enables non-technical end users to engage with state-of-the-art blockchain services without needing to directly manage wallets or even own crypto, or understand it at a deep level. Instead, they can rely on facilities of their immediate service providers, who (as per this proposal) would be interacting with every Parachain via the Aventus infrastructure using standard and familiar techniques and tools.

The Aventus proposal covers several aspects that rely on the existing infrastructure and services. These services have been running in production with multiple customers. The proposal includes:

- Always-on ‘blockchain access point’ available for the general public. This would enable individuals to independently access the Polkadot ecosystem via end-user wallets and similar tools.
- An enterprise-grade programmatic API enabling business customers to build their blockchain-powered applications without the need for blockchain-specific infrastructure and development skills.
- Integration with Metamask or other wallets for an optimal user experience.
- A parachain to validate customers requests and serve them by creating transactions on any parachain in the Polkadot ecosystem.
- Integration of several active NFT marketplaces currently running on the classic Aventus network (the AvN) and Ethereum. Via the Aventus parachain, these NFTs would become interoperable across the whole ecosystem and Dotsama universes, for example allowing users to mint new NFTs on various marketplaces, auctioned off on Ethereum, and transferred via the Aventus parachain to users or projects in other parachains.


### Project Details

The architecture of the Aventus proposal is based on the following pillars:

- The Aventus Parachain itself.
- The Gateway API.
- The cloud infrastructure enabling the Gateway.

To this, we add other essential aspects and techniques:

- Integration of Polkadot with Metamask via Metamask Snaps to enable end-users to use a popular and best-of-class tool that allows easy access to multiple blockchains from browser-based apps.
- The split-fees logic from the Aventus solo-chain to enable corporate customers to pay the costs of their end-users’ transactions.
- The leveraging of the XCM format to trigger execution of transactions on different parachains by sending requests from the Aventus parachain.
- Dynamic detection and presentation of the endpoints accessible on each parachain.
- Ongoing work towards standardising NFT metadata and how to make it available off chain in a trustless way.

#### **Aventus Gateway**

The Aventus Gateway consists of a cloud infrastructure which operates both: a publicly-accessible end-point and a set of private end-points for business clients who require guaranteed levels of service. It can be reached programmatically by an API supported by JSON-RPC commands via HTTPS endpoints. Users can leverage a companion npm library that facilitates the creation of requests, authorisation and endpoint discovery, but can also implement their own logic towards constructing these requests.

At present, we have customers who demonstrated both approaches successfully. The Gateway charges fees for each transaction request, but state queries are free. These fees cover both the network operation and the expense of the relayer service’s infrastructure.

Initially, these fees will be paid in AVT, with transactions forwarded to other chains via XCMP. As part of our roadmap, we will work to further expand the service to also offer alternative approaches, for example supporting payments of transaction fees in the native currency of the target chains.

In the current Aventus solochain, we allow transfer of a wide assortment of tokens: Aventus NFTs, as well as any kind of ERC20 or ERC777 AvN tokens. These transfers are independent of the operations costs, which are always paid in AVT.

The costs are normally paid by the requester, which authorises not only the transfer of tokens as per the business transaction, but also the payment of AVT to the network and the Gateway provider.

However, the Gateway also allows the sender to specify a payer account to be responsible for paying the AVT costs, while the sender itself authorises the token (value) transfers from its own account. Thus the payer, who of course would also need to ‘agree’ to pay for the transaction, effectively finances users’ blockchain activity by maintaining and managing an appropriate AVT balance. This  enables corporate service providers to avoid having to expose end users to relatively complex blockchain technology concepts (such as “gas”, “minting fees” etc), and let end users worry only with the business case they understand. For example, ownership and buying/selling of NFTs.

#### **Aventus Parachain**

The Aventus solo-chain is the central focus of our proposal. This parachain serves as an entry point to the Polkadot ecosystem. Not only it has its own logic with its own Gateway, but by virtue of being a parachain in the Polkadot ecosystem it can therefore act as a gateway for all the other parachains.

This can be achieved by making use of the XCMP protocol and XCM message format. Our goal is to extend our proxying logic so that we can target not only endpoints (pallets and methods) present on the AvN but also any public endpoint present on other chains.

We are already experienced in managing signatures for different tasks and proxying them for processing in our chain. But we would need to research and implement the following tasks:

- A module for endpoint discovery on other chains.
- A module for signing transactions to other chains.
- A module to create requests triggering transactions on other chains.
- A module to query state of other chains.
- An extension of our polling infrastructure to monitor and report on the state of requests targeting other chains.

#### **Aventus-based enterprise blockchains**

The Aventus ecosystem features ‘corporate’ permissioned blockchains, built on Aventus technology. These chains are essentially technological replicas of the main Aventus Network, albeit with their own independent history and state. They also use AVT as their ‘fuel’ utility token. They are commissioned by enterprises and consortiums which require privacy and security of the ‘permissioned’ chain, while also avoiding siloing their assets. AvN technology wins their hearts and minds by offering a ‘full package’ - easy to use enterprise-ready blockchain platform and middleware/API infrastructure with functionality to transfer assets out onto Ethereum or any other supported blockchain.

The longer-term vision for many of these ‘enterprise’ AvNs is to become more open and interoperable, as the applicable regulation and technology capability permit. Once the main AvN becomes a parachain of Polkadot, the natural path of evolution for ‘enterprise’ AvNs is to also become (independent) parachains, by bidding for and winning their own Polkadot parachain slots. This would greatly increase the demand for DOT, as well as bring significant additional transaction numbers into the Polkadot ecosystem.

For the period before the transition of ‘corporate’ chains into parachain, Aventus would be required to develop and maintain two versions of AvN codebase, with notable differences in the consensus layer and dependent modules. This proposal covers this effort and includes the work to transition enterprise AvNs and their infrastructure to Polkadot parachain architecture.

#### **Cloud Infrastructure**

The Aventus Gateway is supported by a dedicated scalable AWS infrastructure. It can scale horizontally thanks to a dedicated lambda-layer for processing HTTP requests and a Kubernetes layer of backend chain connectors. The two layers are connected by MessageQueue services that serve to even out demand and make requests synchronous by isolating them from the processing backend.

This is further supported by a chain indexer service which runs continuously to keep an Elastic Search record of all existing transactions. This allows us to keep an up-to-date view of the state of each Gateway request, but also keep a record of all past transactions on the chain (including the solo-chain, prior to parachain conversion).

The current proposal expects a scenario with increased traffic and infrastructure costs, but we don’t see the need for substantive changes in our architecture.

#### **Metamask Snaps - Cryptographic Infrastructure**

Metamask has become a de-facto standard in the Ethereum ecosystem to authorise and submit Ethereum transactions. End users have grown comfortable using it, and expecting the same kind of support in other ecosystems.

Originally, Metamask was restricted to Ethereum, and therefore the secp256k1 elliptic curve. This is incompatible with the elliptic curves and signature algorithms most often used by Polkadot, but Metamask Snaps allow the creation of plug-ins to support these other systems.

By employing these techniques, we would be able to leverage a familiar user interface and bring it to the Polkadot ecosystem, making it more user-friendly and thereby greatly increasing its appeal.

![Aventus Polkadot services architecture.](https://user-images.githubusercontent.com/28754098/181808833-cbfcc3c4-ca14-493a-90b3-dffe70f3c9da.png)


Figure 1. Aventus Polkadot services architecture.

### Ecosystem Fit

We aim to provide a user friendly, secure and robust gateway to Polkadot and all its parachains.

Polkadot has great tools, such as polkadotJS, that allow users to interact with substrate based chains. Although these tools are great for developers and tech savvy users, their UX complexity is insurmountable for non technical users. Furthermore there is no framework and support for organisations.

As a parachain, by leveraging the power of the AVN gateway and industry accepted wallets such as metamask, we can provide all types of users with a simple access point to all parachains in the Dotsama universe.

For enterprise organisations, using our custom proxy pallet, Aventus solution will allow onboarding of their users and enable them to interact with parachains transparently, without having to directly own and manage crypto. Organisations will have options to choose from when deciding on the format of their commercial relationship with their customers. We hope this will open the door to more organisations migrating to polkadot and significantly accelerate adoption by users who may be currently discouraged by the risks and challenges of a new technology like Blockchain.

In addition to being a gateway to the wider polkadot parachain ecosystem, Aventus will bring its existing NFT capabilities and all of the live NFT marketplaces, as well as those that are currently moving to production stage. Once our work of defining a standard for storing and accessing NFT metadata is completed, our NFTs will be fully interoperable with other parachains.

## Team :busts_in_silhouette:

### Team members

- Name of team leader: **Alan Vey** (Founder), **Andrey Brozhko** (CPTO)
- Names of team members: **Tech team**: Alexandre Pinto, Nahu Seyoum, Fernanda Ribeiro, Glyn Dimond, Thanos Doukoudakis, Emmanuel Ngubo, Micael Franco, Rui Magalhães.

### Contact

- **Contact Name:** Alan Vey
- **Contact Email:** alan.vey@aventus.io
- **Website:** <https://www.aventus.io/>

### Legal Structure

- **Registered Address:** 36 Scotts Road, Bromley, England, BR1 3QD.
- **Registered Legal Entity:** Aventus Network Services Limited.

### Team's experience

**Alan Vey** is a Forbes 30 under 30 winner (2021) for his work as the founder & Chairman of the Aventus Network. Alan worked at Deloitte and macro hedge fund Brevan Howard. He completed his Master’s Degree in Artificial Intelligence at Imperial College London in 2016. His Master’s thesis was on blockchain technology, looking for a use case around event ticketing and he conceived a business plan for what became Aventus.

**Andrey Brozhko** is the Chief Product and Technology Officer, has over 20 years of experience leading product and software engineering efforts, primarily in distributed systems and security applications, spanning large multinational companies and startups in Fintech, Blockchain and Cloud industries. Ex-R3 and ex-Oracle, he is a graduate of Warwick University and holds an MBA and MSc software engineering degrees.

**Alex Pinto** - Cryptography SME, combines a broad background in software engineering and academic experience, including a PhD in Cryptography and teaching undergraduate computer  science courses. Before joining Aventus, he was a researcher at the Information Security Group at Royal Holloway University of London, and a software Engineer at Sophos and Fidessa, where he developed charting applications for Technical Analysis in Trading. A firm believer in the power of education, he maintains a blog promoting blockchains, cryptography and a scientific approach to software development.

**Nahu Seyoum** - Substrate SME, is a software engineer with over 13 years experience developing enterprise grade software targeting desktop, web and blockchain applications in various industries. He has spent 10 years as a full stack developer and over 3 years working on blockchain. He has experience designing and writing smart contracts on Ethereum and more recently focusing on substrate and rust.

**Glyn Dimond** Ethereum SME, is a senior engineer at Aventus, who has followed blockchain's progress since the release of the Bitcoin whitepaper. After completing his MEng in AI & Cybernetics at the University of Reading, he worked across finance, security, and distributed systems, specialising in writing Solidity smart contracts from 2018 onwards, with a number of successful projects now live on Ethereum mainnet.

**Thanos Doukoudakis** has eight years’ experience in software development, specialised in systems programming. He is an Agile coach and Dev-Ops enthusiast, with a BA & Master’s degree in Computer Science from the University of Athens. Since joining Aventus in 2019 as a Blockchain Engineer, Thanos has been key in developing the Aventus Network and its surrounding ecosystem.

**Fernanda Ribeiro** is a qualified aeronautical engineer with a specialty from Moscow Aviation Institute in aircraft construction and design. She has significant experience working in the aviation and blockchain sectors. Fernanda is fluent in Portuguese, English, Russian, and Spanish.

**Rui Magalhães** is a SRE/DEVOPS Engineer that focuses on automation and breaking silos between development and operations. He has experience in the most up to date tools used in the field and a lot of curiosity about blockchain technology.

**Emmanuel Ngubo** is a blockchain advocate who understands the ground-breaking value of blockchain technology. He spent 5 years, during his PhD, looking into blockchain use cases for the telecommunications industry and in recent months has been focused on solving real problems across various industries using blockchain technology. He is currently serves as a Developer Relations Engineer.

### Team Code Repos

- <https://github.com/Aventus-Network-Services>

- <https://github.com/brandisio>
- <https://github.com/alexpArtos>
- <https://github.com/dr-ngubo>
- <https://github.com/FernandaRIbeiroS>
- <https://github.com/micaelffrancoAV>
- <https://github.com/nahuseyoum>
- <https://github.com/thadouk>
- <https://github.com/RuiSMagalhaes>

### Team LinkedIn Profiles (if available)

- <https://www.linkedin.com/in/alanvey/>
- <https://www.linkedin.com/in/andr%D0%B5y-br%D0%BEzhk%D0%BE/>
- <https://www.linkedin.com/in/adoukoudakis/>
- <https://www.linkedin.com/in/micaelffranco/>
- <https://www.linkedin.com/in/alexandre-miranda-pinto/>
- <https://www.linkedin.com/in/glyn-d-81225a3b/>
- <https://www.linkedin.com/in/fernanda-ribeiro-silva-47705415a/>
- <https://www.linkedin.com/in/nahu-seyoum-36490632/>
- <https://www.linkedin.com/in/dr-ngubo/>

## Development Status :open_book:

### Existing functionality and codebase

Aventus mainnet has been running since February 2021, as of the day of writing it has processed 19.64 million transactions. Aventus has developed multiple middleware, infrastructural products and applications creating a full-stack blockchain platform offering for business clients. All components of the solution are being actively developed further, majority have been in production for at least 3 months:

- AvN Gateway - an API service providing easy access to AvN (multiple live clients) with enterprise-grade SLAs.
- Block Explorer - an AvN blockchain indexer SaaS.
- AvN Vault - a hashicorp-based key management (enterprise wallet) solution for Aventus and other substrate-based networks.
- Sezame wallet - a mobile wallet allowing users to transfer and stake AVT on the Aventus network.
- Lifting Dapp - an application allowing to ‘lift’ erc-20 compatible tokens from Ethereum onto AvN.
- Voting Dapp - an application allowing AVT-holders to participate in governance of AvN by voting on proposals.
- Automated business continuity infrastructure - monitoring and alerting, geo-replicated backup/restore, DR.
- ‘Enterprise blockchains’ PaaS offering for building AvN-based private chains interoperable with Ethereum (and Polkadot in the future).

### In development 

The parachain transition project is under development, the team is working towards the first development milestone of converting AvN into the parachain architecture and bidding for (and winning) the parachain slot. This is followed by multiple milestones adapting all Aventus and ecosystem products to working in the parachain environment and further expanding their coverage to the entire Polkadot ecosystem.

## Development Roadmap :nut_and_bolt:

### Overview

- Convert Aventus chain into a Parachain - estimated duration: 3 months.
- Expand the Aventus Gateway to support a multi-parachain environment - estimated duration: 5 months.
- Expand the Aventus ecosystem to support Aventus as a Parachain - estimated duration: 4 months.
- Test and improve the Aventus cloud infrastructure as needed to support increased traffic - estimated duration: 2 months.
- Please note that development work has already started and it may be possible to work on multiple tasks in parallel therefore the calendar time ‘from now’ in the best case scenario may be reduced by up to 20% from shown.

### Milestones

#### Convert Aventus chain into a Parachain

| Number | Deliverable | Notes |
| --- | --- | --- |
| 0a |Licence | GPL v3 |
| 0b |Documentation | In github
| 0c |Testing Guide | As per Polkadot requirements.
| 1 |Parachain runtime | Ready for Parachain slot auction.
| 2 |Participate in and win a Parachain slot auction. |August-September 2022.
| 3 |Solo chain state migrated to new parachain, running live on Polkadot network. | Core platform changes, as well as DevOps infrastructure, monitoring and DR tools and processes.
| 4 | Archive node(s) supporting the historical state of the solo chain. | Accessible via gateway API. |

**Estimated duration**: 3 months \
**Approximate cost**: $250,000

#### Expand the Aventus Gateway to support a multi-parachain environment

|Number |Deliverable |Notes |
| --- | --- | --- |
| 0a | Licence | PaaS offering with free development tier. |
| 0b | Documentation | In github |
| 0c | Testing Guide | Automated testing for scalability and conformance to SLAs. |
| 1 | AvN Gateway compatible with basic AvN parachain. |Regression testing that the conversion to parachain does not break any of the current functionality. |
| 2 | Extended AvN Gateway to route requests and queries from users to Parachains. |Automatically detect public endpoints of compatible parachains and route requests to them. |
| 3 | Cross-chain fee payments and authorisation fully handled by the gateway and the AvN. | Initial onboarding of a single parachain. |
| 4| Updated node.js avn-api module to support cross-chain integration. | This includes getting transaction execution. outcome. |

**Estimated duration**: 5 months \
**Approximate cost**: $430,000

#### Expand the Aventus ecosystem to support Aventus as a Parachain

| Number | Deliverable | Notes |
| --- | --- | --- |
| 0a | Licence | SaaS offering (free)
| 0b | Documentation | In github
| 0c | Testing Guide | Manual user testing, security (pentest), scalability test.
| 1 | Block Explorer updated to show activity on the Aventus parachain or the previous Aventus solochain. | Accessible via UI and via gateway API.
| 2 | Aventus dApps integrated with Metamask to facilitate the authorisation of transactions on a cross-chain environment. | Via ‘snaps’ plugins.
| 3 | dApps allowing lifting, lowering, staking and transferring AVT, DOT or other tokens across multiple chains. | SaaS with free tier. |

**Estimated duration**: 4 months \
**Approximate cost**: $350,000

#### Test and improve the Aventus cloud infrastructure as needed to support increased traffic

| Number | Deliverable | Notes |
| --- | --- | --- |
| 0a | Licence | N/A |
| 0b | Documentation | N/A |
| 0c | Testing Guide | N/A |
| 1 | Updated cloud infrastructure to comply with requirements of a multi-parachain environment. | Dynamic scaling to handle ecosystem-wide workloads. |
| 2 | Test plan for conducting tests (functional, integration and performance) tests on the Gateway infrastructure. | This should cover load tests, soak tests and stress tests. |
| 3 | Updated infrastructure to comply with test requirements. | After executing the tests above. Use results of tests to inform changes needed to the infrastructure. |

**Estimated duration**: 2 months \
**Approximate cost**: $190,000

## Future Plans

**Aventus** is focused on enterprise grade infrastructure and use cases, helping drive mainstream adoption of web3. Our recent business successes are across Loyalty (Cashback APP over 1m active wallets), Video games (over 600k users in our play to earn system), Aviation (national airline and one of the largest airports in the world for cargo tracking), NFTs (one of the largest independent films and the most crypto memes from it coming soon) and event ticketing (live nation). Within these categories the addressable market is enormous, we intend to grow adoption vertically and horizontally expanding to other business domains, and scale our SaaS revenue thereby supporting further development.

The various levels at which we are seeking to innovate will drastically improve the speed at which we can drive additional deals across these key segments and give access to the amazingly diverse functionality in the polkadot ecosystem to these enterprises and beyond. We believe our entry into the Polkadot ecosystem will simultaneously deliver immediate value to our customers and to the Polkadot community, creating a virtuous circle of adoption and transaction growth, resulting in the improved business and financial architecture in multiple domains. In the long term we plan to evolve our product set and adapt to different use-cases to drive adoption of the Polkadot network across all business segments.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Mark Cachia, *Scytale Ventures*.

**Aventus Network** is a mature project with a sizable codebase and multiple business clients on-boarded to the chain. An integrated suite of end-user, middleware and infrastructure product offerings has been developed and is used by multiple customers.

The Aventus Foundation is the sole contributor to the project since we started building on Substrate in 2019 and became an Ethereum layer 2 with a view to becoming a Polkadot parachain.

### Previous grants you may have applied for

No prior grant applications. 
