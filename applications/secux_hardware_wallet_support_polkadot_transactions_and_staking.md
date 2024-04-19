# SecuX Hardware Wallet supports Polkadot transactions and staking

- **Team Name:** SecuX Technology Inc.
- **Payment Address:**
  - **DOT**: 14NNA8HqzMgdcNiGC1Susz4xQayGDHKCt8yLeNKBSmfaKmuT
  - **Payment**: FIAT / USDT
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Integrating cutting-edge SecuX hardware wallets equipped with multi-factor authentication and secure chip technology, Polkadot provides both holders of high-value assets a secure and intuitive way to protect their investments, and bolsters the total value locked (TVL) within the network. This partnership highlights Polkadot's commitment to crafting a secure and reliable investment environment, attracting high-value investors for long-term engagement.

#### Relevance to Substrate & Polkadot

Integrating hardware wallets with Substrate-based blockchains like Polkadot and Kusama involves securely storing private keys offline and signing transactions within the device, enhancing security against online threats. Wallet interfaces facilitate this integration, allowing for communication between the hardware wallet and blockchain networks through software like browser extensions. Substrate's modular design supports such integrations with custom modules. Transactions are verified directly on the device's screen, ensuring authenticity. The ecosystem's evolution necessitates ongoing development for compatibility and security, making hardware wallets a robust solution for safeguarding digital assets within the Substrate, Polkadot, and Kusama ecosystems.

#### Team Motivation

The integration of SecuX hardware wallets with the Polkadot network significantly boosts both security and user experience, ensuring the safe, offline storage of private keys and the requirement of secure, physical interaction for transaction confirmations for all users.

This collaboration enhances the management of a broad range of assets within Polkadot's intricate multi-chain ecosystem, streamlining complex processes such as asset transfers, staking, and governance involvement.

By reducing technical obstacles, enhancing security to build trust, and offering intuitive interfaces for educational purposes and active participation, SecuX’s aim is for our integration to play a key role in driving Polkadot's adoption. It also guarantees more adaptability for future developments through updates for new functionalities or parachains, bolstering Polkadot's goal for seamless interoperability and scalability.

This strategic approach significantly elevates Polkadot's approachability, reliability, and user involvement, propelling the network's growth and innovation.

### Project Details

#### Key Deliverables

1. Seed phrase generation and management, signing a transaction and staking.
2. SecuX will provide documentation for MCU firmware updates and secure element firmware updates, including revision changes. This documentation will outline the update process, versioning, and security considerations to ensure successful and secure firmware deployments.

#### User Interface

Apps wallet integration.

![](https://github.com/w3f/Grants-Program/assets/64571736/56284b95-e0da-40c3-877d-84f3eb28876b)

Staking dashboard integration.

![](https://github.com/w3f/Grants-Program/assets/64571736/c4e836a7-f15e-45e8-baa4-6004f9690e6b)

#### Code Snippet

![](https://github.com/w3f/Grants-Program/assets/64571736/a732675c-d69e-49c2-8d2c-8f7f29158887)

![](https://github.com/w3f/Grants-Program/assets/64571736/55b294ec-e409-4a81-8bb8-fb11daab1b1f)

#### Technology Stack

To integrate enhanced SecuX hardware wallet support into the Polkadot wallet's codebase, there needs to be a structured and collaborative process. The first step is to utilize the provided SecuX SDK API for seamless integration, focusing on robustness and security. This will allow users to access their Polkadot wallets via the hardware wallet and confirm transactions through the Polkadot web portal at [https://polkadot.js.org/apps/#/explorer](https://polkadot.js.org/apps/#/explorer).

#### Proof-of-Concept (prior work)

We have conducted thorough examinations of existing technologies and platforms to support our API and UI staking capabilities. Our research included an in-depth analysis of the Polkadot network's staking interface and the Polkadot.js application. Specifically, we explored the staking functionalities as outlined on the Polkadot network staking overview page (https://staking.polkadot.network/#/overview) and investigated the blockchain exploration features provided by the Polkadot.js application (https://polkadot.js.org/apps/#/explorer).

These resources have been instrumental in ensuring our system's compatibility and functionality with the Polkadot ecosystem, serving as a foundational element of our proof of concept (PoC) and minimum viable product (MVP).

#### Non-Goals

The project is focused on investigating how to seamlessly integrate SecuX Hardware Wallet with Polkadot's web-based staking platform. Due to current limitations in our engineering capacity, SecuX does not yet offer native support for conducting Polkadot's cryptocurrency and staking transactions directly through our Web/Mobile Wallet interfaces. This exploration aims to bridge that gap, enabling users of SecuX Hardware Wallets to efficiently and securely engage with Polkadot's staking features, thus enhancing the functionality of our wallets and expanding our service offerings within the Polkadot ecosystem.

### Ecosystem Fit

#### Relevance to Polkadot

Our project seamlessly integrates into the Polkadot ecosystem by offering advanced security solutions for users engaging with the network. Our primary focus is on enhancing the safety and reliability of transactions and interactions within the Polkadot ecosystem. We achieve this through the development of state-of-the-art hardware wallets and secure interfaces for Polkadot's blockchain. Our products are designed to support the unique multi-chain architecture of Polkadot, enabling users to safely manage assets across different parachains.

Furthermore, our solutions facilitate secure staking on Polkadot, allowing users to participate in the network's consensus mechanisms while ensuring the utmost security of their staked assets. By incorporating our technology into the Polkadot.js application and other key parts of the ecosystem, we make it easier for users to interact with the Polkadot network securely.

In summary, SecuX fits into the Polkadot ecosystem by providing indispensable security services that protect user assets and enhance the overall integrity of the network, making it more resilient to threats and more trustworthy for users. Our commitment to innovation in security technology ensures that as the Polkadot ecosystem evolves, SecuX will continue to offer cutting-edge solutions that meet the needs of the diverse user base.

SecuX targets individual users within the Polkadot ecosystem, focusing on cryptocurrency enthusiasts, blockchain developers, staking participants, and tech-savvy users. Our products cater to those looking for secure solutions to trade, stake, hold, and manage cryptocurrencies, particularly within Polkadot's network.

By offering advanced security through reliable hardware wallets and secure interfaces, SecuX aims to enhance the safety of digital asset management. Our goal is to instill confidence in users to securely engage with the blockchain, thereby fostering broader adoption and growth of cryptocurrency and blockchain technology, with a particular emphasis on ensuring a secure experience for individual participants in the ecosystem.

SecuX is also committed to onboarding newcomers to the cryptocurrency and blockchain space, especially within the Polkadot ecosystem. Recognizing the complexities and security concerns faced by those new to digital currencies, we aim to simplify the user experience while maintaining the highest standards of security.

Our solutions are designed to be accessible and user-friendly, offering intuitive interfaces and educational resources that guide newcomers through the process of securely managing their digital assets. From setting up their first hardware wallet to engaging in transactions or staking on the Polkadot network, SecuX provides a supportive pathway for beginners.

#### Meeting the Needs

We address key needs in the cryptocurrency and Polkadot ecosystem, focusing on security, ease of use, education, and interoperability. We offer advanced security solutions through hardware wallets and interfaces to protect against digital asset theft.

Recognizing blockchain's complexity, we at SecuX ensure our products are user-friendly, making digital asset management accessible to all. Additionally, we provide educational resources for newcomers, helping them navigate the blockchain safely.

SecuX's products also support Polkadot's multi-chain network, offering seamless integration across various chains. This holistic approach addresses major challenges users face in the digital asset space.

To identify these needs, we actively gather insights through customer feedback available on Amazon reviews and our customer support interactions. This direct feedback mechanism allows us to understand the practical challenges and preferences of our users, serving as a rich source of data for refining our products and services. The below is an example:

[![](https://github.com/w3f/Grants-Program/assets/64571736/7a36316f-1f61-4dfc-99ca-38b1caaece72)](https://www.amazon.com/gp/aw/d/B07PVXSFR4/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=c70567e964dbf24729eb2b81835a0c14&hsa_cr_id=3968092710101&qid=1710461318&sr=1-2-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_mcd_asin_1_img&pd_rd_w=1GU1G&content-id=amzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b%3Aamzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_p=417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_r=5T4PC204YRD46DP9PQSA&pd_rd_wg=EkAoD&pd_rd_r=8ac14b42-d59e-4daa-b862-8b732b756a83)

#### Exploring Projects

There is a project within the Substrate / Polkadot / Kusama ecosystem that offers hardware wallet solutions, such as Ledger. However, what sets SecuX apart is our incorporation of a touchscreen interface on our hardware wallets.

This feature enhances user experience by providing an intuitive, interactive way to manage digital assets, making it easier for users to navigate their wallets, verify transactions, and interact with the blockchain ecosystem directly from their devices. The touchscreen functionality represents a significant usability improvement, emphasizing convenience and security in digital asset management within the Polkadot, Kusama, and broader Substrate-based ecosystems.

SecuX distinguishes itself in the digital asset management space with our unique touchscreen interface on hardware wallets, offering unmatched user convenience and security in the cryptocurrency ecosystem.

## Team :busts_in_silhouette:

### Team leader

- **Danny Huang**, Vice President, US Office: A veteran in the tech industry with a broad perspective and extensive experience in AI, big data, software, and hardware. Huang completed his MBA at the University of La Verne, USA.
### Team members

- **Dr. Peter Chen**, Founder & CEO: A blockchain visionary with a deep background in information security, FinTech, and international business management. Dr. Chen is celebrated for his leadership in creating the Best Cross-Platform Crypto Hardware Wallet and Stream, a groundbreaking crypto payment solution. He holds a PhD in Management Science from National Chiao Tung University.
- **Dr. Charles Hsu**, Co-Founder & Board Director: An eminent figure in the semiconductor field, Dr. Hsu is acclaimed for his innovations in logic-based non-volatile memory technology and his profound knowledge in semiconductors, Physical Unclonable Function (PUF), and security. He earned his PhD in Electrical Engineering from the University of Illinois, USA.
- **Dr. Gregory Chu**, Co-Founder & Board Director: The strategic mind behind the success of Air2U Telecommunication, Dr. Chu excels in driving innovation and business development with a focus on competitive strategy and cryptocurrency economics. His educational background includes a PhD in Scientific Management from National Chiao Tung University.
- **Sam Lin**, Co-Founder & Senior Vice President: With four decades of experience in R&D management across high-tech sectors, Lin specializes in system programming, operating systems, and Bluetooth low energy technologies. He has a Master of Computer Science degree from National Chiao Tung University.
- **Jeff Shuo**, Chief Technology Officer: Shuo brings extensive expertise in software engineering, cloud management, IoT, and blockchain technology. His education includes a Master of EECS from the University of Illinois Chicago, USA, and an MBA from San Diego State University, USA.
- **Kyo Yang**, Chief Information Security Officer & Chief Information Officer: Specializing in enterprise ICT security strategies, cloud, web, and blockchain security, Yang has over 19 years of experience in security strategies and hacking techniques. He is currently a PhD student in Computer Science and Engineering at National Chiao Tung University.
- **James Huang**, Vice President of Product Management: Huang's three-decade career in the high-tech industry has centered on product lifecycle and supply chain management. He holds an M.S. in Technology Management from National Chiao Tung University.
- **Judy Wang**, Chief Technology Officer: Wang has over a decade of experience in leadership roles in various industries. She recognizes the importance of collaboration in the blockchain space and works to foster cross-chain relationships.
- **Dr. Woody Cheng**, Chief Creative Officer & VP of Business Development: Cheng is an innovative thinker at the intersection of blockchain commercial IPs with cryptocurrency, IoT, and 5G applications. He received his PhD in Electrical Engineering from National Taiwan University.
- **Howard Liao**, Managing Director, SecuX Europe GmbH: A global strategist with a track record in business development and international relations, Liao holds an MBA from George Washington University, Washington DC, USA.
- **Alice Bo-Wen Chang**, Chief Marketing Officer: Chang is a creative powerhouse skilled in visual communication and marketing strategies, holding a Master of Architecture from Princeton University, USA, and a Master of Fine Arts from Edinburgh University, UK.
- **Anderson Wu**, Blockchain Architect.

### Contact

- **Contact Name:** Danny Huang
- **Contact Email:** [Dannyhuang@secuxtech.com](mailto:Dannyhuang@secuxtech.com)
- **Website:** [https://secuxtech.com/](https://secuxtech.com/)

### Legal Structure

- **Registered Address:** 5F-1, No. 27, Guanxin Rd., East Dist., Hsinchu City, 30072 TW.
- **Registered Legal Entity:** SecuX Technology Inc.

### Team's experience

The SecuX team consists of experts with rich backgrounds in cybersecurity, blockchain, and product design, stemming from leading tech firms and cybersecurity agencies. Their broad expertise covers software and hardware engineering, UX design, and fintech, enabling them to develop secure and intuitive hardware wallets for cryptocurrencies.

Enhanced by their involvement with the Trend Micro (ChainSafer) project, which focuses on web3 scam protection, the team applies advanced cybersecurity and AI techniques to offer state-of-the-art security solutions. This blend of experience and innovation places us as a pioneering force in digital asset management, offering products that are both user-friendly and equipped with the latest security protocols.

### Team Code Repos

- [secuxtech](https://github.com/secuxtech)
- [secux](https://github.com/SecuX)
- [Jeff Shuo](https://github.com/jshuo)
- [Anderson Wu](https://github.com/rus7hex)

### Team LinkedIn Profiles

- [Jeff Shuo](https://www.linkedin.com/in/jeff-shuo-b264a5/)
- [Dr. Woody Cheng](https://www.linkedin.com/in/dr-woody-cheng-893b6192/)
- [Danny Huang](https://www.linkedin.com/in/danny-h-65473b60/)
- [Alice Bo-Wen Chang](https://www.linkedin.com/in/alice-bo-wen-chang/)

## Development Status :open_book:

For collaboration and code review processes with the Polkadot team, our developers actively engage through GitHub, particularly with repositories such as the one managed by Parity Technologies for the [Polkadot Staking Dashboard](https://github.com/paritytech/polkadot-staking-dashboard). This involvement includes submitting pull requests for potential improvements or new features relevant to the staking dashboard. These submissions are meticulously reviewed by the Polkadot team to ensure they meet the high standards of functionality, security, and user experience that the Polkadot ecosystem demands. Through this collaborative effort, our developers contribute to enhancing the Polkadot staking experience, leveraging our expertise in security and blockchain technology to benefit the wider Polkadot community.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):**  5 FTE
- **Total Costs:** 30,000 USDT

### Milestone 1 Example — Basic functionality & Staking

- **Estimated duration:** 3 months
- **FTE:**  5 FTE
- **Costs:** 30,000 USD

|  Number | Deliverable                             | Specification                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                 | Apache 2.0                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **0b.** | Documentation                           | We will deliver a comprehensive "How It Works" guide covering three critical aspects of interacting with the Polkadot network: generating a Polkadot address, confirming a transaction, and engaging in staking. This guide will provide users with step-by-step instructions, ensuring they have a clear understanding of each process, which is essential for secure and effective participation in the Polkadot ecosystem. |
| **0c.** | Testing and Testing Guide               | We will supply a detailed testing guide along with a SecuX hardware wallet to thoroughly verify the new functionalities. This approach will ensure that all features are tested under real-world conditions, providing users with reliable and secure solutions within the ecosystem.                                                                                                                                         |
|     0e. | Article                                 | We will create and publish an in-depth article that explores the various supports and functionalities of the Polkadot network. Additionally, we will enhance the article's reach through a co-marketing initiative on social media with Polkadot. This strategic partnership will not only educate our audience about Polkadot's capabilities but also amplify our content's visibility and engagement across platforms.      |
|      1. | Periodically Meeting                    | Collaborative Efforts and Communication, Polkadot Integration of SecuX SDK support.                                                                                                                                                                                                                                                                                                                                           |
|      2. | SecuX SDK Polkadot support npm version  | Development of SDK API for Polkadot.js.                                                                                                                                                                                                                                                                                                                                                                                       |
|      3. | SecuX SE Firmware version number        | Development of Secure Element (SE) Firmware.                                                                                                                                                                                                                                                                                                                                                                                  |
|      4. | SecuX MCU Firmware version number       | Development of MCU Firmware including transection confirmation, transection details, account balance.                                                                                                                                                                                                                                                                                                                         |
|      5. | SecuX SDK Polkadot integration tutorial | Provide SDK API for Polkadot.js.                                                                                                                                                                                                                                                                                                                                                                                              |
|      6. | SecuX Web Wallet Firmware update        | Distribute Polkadot SE and MCU Firmwares.                                                                                                                                                                                                                                                                                                                                                                                     |

## Future Plans

SecuX is poised to integrate native support for Polkadot cryptocurrency transactions and staking through our Web and Mobile Wallets. Facing constraints due to limited engineering resources, we are reaching out for initial funding from the Polkadot Foundation. This support will facilitate the integration of SecuX hardware wallets with Polkadot's official web applications, providing direct benefits to the Polkadot community by enhancing user experience and security. Our long-term vision includes comprehensive native support for Polkadot's crypto and staking functionalities within the SecuX Web and Mobile Wallet platforms, aiming to streamline and secure user interactions within the Polkadot ecosystem.
