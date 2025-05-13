# Polka.Space

## 🌟 Project Overview

### If the name of your project is not descriptive, a tagline (one sentence summary)

The first no-code metaverse platform that makes cross-chain NFT display and trading accessible to everyone.

### A brief description of your project

Polka.Space reimagines Web3 interaction by enabling anyone to create beautiful 3D environments where they can display, mint, and trade NFTs from across the Polkadot ecosystem using a single wallet. Our intuitive no-code platform eliminates technical barriers, allowing creators to build personalized metaverse spaces in minutes instead of months, while leveraging Polkadot's native cross-chain capabilities for secure asset management.

### An indication of how your project relates to / integrates into Polkadot

Polka.Space integrates deeply with Polkadot through:

1. XCM protocol implementation for cross-chain NFT importing and display
2. Custom smart contract on Asset Hub for 3D metadata storage
3. Parachain utilization (Asset Hub for NFT standards, Moonbeam for EVM compatibility)
4. Single wallet integration using Polkadot.js for seamless multi-chain access

### An indication of why your team is interested in creating this project

Our journey to Polka.Space began at the intersection of two passions: immersive VR experiences and blockchain technology. As VR specialists, we've witnessed firsthand how spatial interfaces transform digital interaction. Yet we've also experienced the frustration of fragmented Web3 ecosystems that lock NFTs into isolated chains and require technical expertise to navigate.

During our work with university students creating immersive portfolios, we discovered a critical gap: while creators were excited about NFTs, the technical barriers to minting, displaying, and trading them in meaningful 3D contexts were overwhelming. We realized that blockchain's promise of digital ownership would remain inaccessible to most creators unless someone built a bridge between these worlds.

Polkadot's unique cross-chain architecture offers the perfect foundation for this solution. By leveraging XCM and parachain specialization, we can finally create a platform where anyone—regardless of technical skill—can create beautiful 3D spaces, populate them with cross-chain NFTs, and share these experiences using a single wallet.

Our successful CREATURES NFT collection (2,222 NFTs sold out in 48 hours) connected to our Unreal Engine game demonstrated the demand for integrating immersive experiences with digital assets. Polka.Space represents the evolution of this vision: democratizing both creation and ownership in the spatial web for the next generation of digital creators.

### (Optional but huge bonus points): 1-min video pitch

[Video to be added]

## 🔍 Project Details

### An overview of the technology stack to be used

1. Frontend: React 18+, TypeScript, TailwindCSS with shadcn/ui components
2. 3D Rendering: Three.js with @react-three/fiber and @react-three/drei
3. State Management: Zustand for global state
4. Blockchain Integration: Polkadot.js API, @polkadot/extension-dapp
5. Smart Contracts: Custom ink! contract on Asset Hub

### Documentation of core components, protocols, architecture, etc. to be deployed

Core Components Architecture:

1. 3D Environment Engine: React Three Fiber implementation with object manipulation controls
2. Cross-Chain NFT Gallery: Component for displaying and importing NFTs from multiple parachains
3. Minting Module: Interface for creating and minting new 3D objects as NFTs
4. XCM Integration Layer: Handles cross-chain communication for asset verification and transfer

### Any PoC/MVP or other relevant prior work or research on the topic

Working MVP:
Our team has built a functional MVP during the Polkadot hackathon that demonstrates the core concept of Polka.Space:

Working 3D Environment:
- Three.js/React Three Fiber implementation with primitive object creation
- Transformation controls for object manipulation (move, rotate, scale)
- Scene persistence using Zustand state management and localStorage
- Camera controls for immersive navigation

Blockchain Integration:
- Polkadot.js wallet connection with account detection and management
- Substrate API connection for chain data querying
- Transaction signing capability for NFT interactions
- Mock XCM implementation demonstrating cross-chain concept

NFT Visualization:
- 3D representation of NFT metadata
- Gallery view of cross-chain NFT collections
- Import functionality for bringing NFTs into 3D spaces
- Preliminary smart contract design

Relevant Previous Projects:

Immersive Portfolio Platform (2023-Present):
- Developed in partnership with University of the Arts London
- Helps students create WebXR portfolios showcasing their work in immersive contexts
- Currently used by graduates to secure jobs with European startups
- Provides foundational technology for spatial content presentation

CREATURES NFT Collection (2022):
- Created and sold 2,222 NFTs in less than 48 hours
- Integrated with custom Unreal Engine game environment
- Generated approximately $25,000 in post-launch revenue
- Validated market demand for NFT integration with 3D experiences

Holographic AI Assistant (2021):
- Secured over $1M in funding
- Spatial computing interface using gesture recognition
- Established our team's expertise in immersive UI/UX design

### Mockups/designs of any UI components

[To be added if available]

### Data models / API specifications of the core functionality

[To be added if available]

### What your project is not or will not provide or implement

What the project will NOT provide:
- Full gaming engine capabilities (not a game development platform)
- Direct NFT marketplace functionality (focus is on display and simple trading)
- Support for non-Polkadot ecosystem chains (except via Moonbeam's EVM compatibility)

## 🧩 Ecosystem Fit

### Where and how does your project fit into the ecosystem?

Polka.Space fits into the ecosystem as a user-friendly frontend for Polkadot's NFT and cross-chain capabilities, making these powerful features accessible to non-technical creators and collectors.

### Who is your target audience?

1. NFT creators and collectors who lack technical skills
2. Digital artists seeking better ways to display their work
3. Early metaverse adopters looking for easier creation tools
4. Brands and creators wanting to establish Web3 presence without development resources

### What need(s) does your project meet?

1. Simplifies cross-chain NFT management through intuitive UI
2. Eliminates coding requirements for metaverse creation
3. Provides visually appealing 3D environments for NFT display
4. Demonstrates Polkadot's unique cross-chain capabilities to new users

### Are there any other projects similar to yours in the Polkadot ecosystem?

While the Polkadot ecosystem has several projects exploring aspects of metaverse and NFT functionality, none combine no-code 3D creation with native cross-chain NFT integration as Polka.Space does.

The closest comparable projects include:
1. Cosmize: An Astar-based metaverse platform focused primarily on social spaces and event hosting. It allows NFT decoration but requires technical knowledge to create custom environments.
2. KodaDot: A multi-chain NFT marketplace with emerging XR integration. While it excels at displaying and trading NFTs, it lacks comprehensive 3D environment creation tools.
3. Unique Network: Provides advanced NFT 2.0 capabilities (dynamic/nested NFTs) with cross-chain functionality via XCM, but doesn't offer an intuitive spatial interface for these assets.
4. Efinity: Enjin's gaming-focused metaverse chain enables cross-chain NFT transfers but targets primarily gaming use cases rather than general creative applications.

### If so, how is your project different?

Polka.Space differentiates itself in several key ways:

1. True No-Code Approach: Unlike other projects that require technical knowledge, Polka.Space is designed specifically for non-technical creators, allowing anyone to build 3D spaces without coding skills.
2. Cross-Chain Integration Focus: While other projects support limited cross-chain functionality, Polka.Space is built from the ground up around Polkadot's XCM protocol to seamlessly integrate NFTs from any parachain.
3. Speed and Accessibility: Our platform enables creators to build 3D spaces in minutes rather than hours or days, with a simple interface focused on visual creation rather than technical implementation.
4. Single Wallet Experience: We emphasize a unified wallet experience across all parachains, eliminating the fragmentation that plagues even Polkadot-based competitors.
5. Visual-First Philosophy: Unlike marketplace-first approaches (KodaDot) or technical protocol-first approaches (Unique Network), Polka.Space prioritizes the visual experience of 3D spaces as the primary interface.

### If not, why might such a project not exist yet?

The intersection of no-code metaverse building and Polkadot's cross-chain capabilities represents a unique challenge that requires specialized expertise in both immersive technology and blockchain integration:

1. Interdisciplinary Expertise Gap: Building intuitive 3D interfaces requires specialized VR/AR knowledge that most blockchain developers lack, while most spatial computing experts lack blockchain expertise.
2. Technical Complexity: Implementing cross-chain functionality through XCM requires deep understanding of Polkadot's architecture, which is still evolving and poorly documented for non-blockchain specialists.
3. Market Timing: The technological foundations for both accessible 3D creation and mature cross-chain messaging have only recently converged, with XCM v4's advanced capabilities and WebXR standards reaching stability in late 2024.
4. UX Design Challenges: Creating truly intuitive interfaces for spatial Web3 experiences requires solving complex UX problems that have deterred many teams from attempting no-code approaches.

## 👥 Team

### Team Name: Name of your team. If you apply as a legal entity, please use its name.

Polka.Space

### Contact Name: Full name of the contact person in your team

Carlos Shields-Davis

### Contact Email: Contact email

Flareondon@gmail.com

### Website: Your website, GitHub org, blog, or similar

https://www.behance.net/switchswita3bb

### Team members

Please list the legal name of all grant beneficiaries. Solo developers (1-person teams) are eligible for funding.

- Carlos Shields-Davis
- Jason Cui

### LinkedIn Profiles (if available)

https://www.linkedin.com/in/carlosshields/

### Team Code Repos

https://github.com/baseddlsg/Polka-Space

### Please also provide the GitHub accounts of all team members:

https://github.com/baseddlsg/

### Team's experience

Carlos: 
- Built holographic AI assistant Alfred that raised over $800k from crowdfunding and $200k from VCs. [https://sidekicks.ai/]
- Worked with the largest companies in music like UMG, Capitol Records, etc... to create immersive concerts.
- Worked with the European Arts Councils and several municipal governments in China to create immersive exhibitions.
- Created an NFT called CREATURES that was tied to Unreal Engine gaming and made over $400k in 2 days. Created and launched an Unreal Engine game based on the NFT character.
- Run an indie studio where we sold over 15k copies of our games
- MA VR from University of The Arts, London

Jason Cui:
- Worked with London Contemporary Dance Schools on several immersive exhibition fusing dancing with real-time motion tracking technology
- Worked with one of the largest bespoke designers in London to create 3d representations of clothing as part of an immersive fashion experience
- Worked with London College of Fashion to create immersive Runway shows containing over 20 students work
- BA VR from University of The Arts, London

## 📊 Development Status

If you've already started implementing your project, please provide a link and a description of the code. Otherwise, please provide some documentation on the research and other work you have conducted before applying.

https://github.com/baseddlsg/Polka-Space

Description of the project codebase:

VR Genesis Frame – Project Code Overview

1. Purpose
VR Genesis Frame is a cross-chain 3D metaverse builder. It lets users:
- Create and explore 3D virtual spaces in the browser
- Mint, view, and import NFTs (3D models) from multiple blockchains (Polkadot Asset Hub, Unique Network, Moonbeam, Astar, etc.)
- Move NFTs between chains using XCM (cross-chain messaging)
- Customize avatars and interact with objects

2. Main Components

A. Frontend (React + Three.js)
- Framework: React (with Vite for fast builds)
- 3D Engine: Three.js via React Three Fiber
- UI: Tailwind CSS, custom React components

Key Features:
- 3D Scene: Users can add, move, and scale 3D objects (primitives or imported models)
- NFT Gallery: Shows NFTs owned by the connected wallet, supports multiple chains
- Object Import: Users can import NFTs as 3D objects into the scene
- Avatar System: Ready Player Me integration for custom avatars
- Virtual Land: Users can load and interact with different land plots/environments
- Wallet Integration: Connects to Polkadot.js extension (Substrate) and MetaMask (EVM)
- Cross-Chain Actions: UI for minting, transferring, and importing NFTs across chains

Important Files:
- `src/components/vr/VRScene.tsx` – Main 3D scene logic
- `src/components/vr/NFTGallery.tsx` – NFT gallery UI and logic
- `src/components/vr/ObjectControls.tsx` – Handles object manipulation
- `src/components/vr/Model.tsx` – Loads and renders 3D models
- `src/contexts/WalletContext.tsx` – Manages wallet state and connections
- `src/services/blockchainService.ts` – Handles blockchain reads/writes
- `src/services/mintingService.ts` – Handles NFT minting logic
- `src/services/ipfsService.ts` – Handles IPFS uploads and downloads

B. Smart Contracts
- ink! contract (Substrate): Handles NFT minting, transfer, metadata, and simulated XCM for cross-chain movement.
- Solidity contracts (EVM): (If present) For NFT minting/interactions on EVM chains like Moonbeam/Astar.

C. Backend/Storage
- IPFS: Used for storing 3D model files and NFT metadata in a decentralized way (via NFT.Storage).
- No centralized backend: All state is on-chain or in the browser.

3. Cross-Chain Support
- Polkadot.js API: For Substrate-based chains (Asset Hub, Unique, etc.)
- ethers.js: For EVM chains (Moonbeam, Astar)
- XCM: Simulated in the contract and UI for cross-chain NFT transfers

4. Project Structure
vr-genesis-frame/
├── contracts/                  Smart contracts (ink! and/or Solidity)
│   └── substrate/AssetHubNFT_new/  Main ink! contract
├── public/models/              3D model files (.glb)
├── src/
│   ├── components/             React components (UI, VR, wallet, etc.)
│   ├── contexts/               React context providers (wallet, avatar, etc.)
│   ├── services/               Blockchain, IPFS, analytics, etc.
│   ├── stores/                 Zustand state stores
│   └── ...                     Pages, hooks, config, etc.
├── package.json                Project dependencies and scripts
├── README.md                   Project documentation
└── .gitignore                  Files to ignore in git

5. How It All Works Together
- User connects wallet (Polkadot.js or MetaMask)
- User can view their NFTs from multiple chains in the gallery
- User can mint new NFTs from 3D objects they create in the scene
- NFTs and their metadata are uploaded to IPFS
- Smart contracts handle minting, transfer, and (simulated) cross-chain movement
- User can import NFTs into the 3D scene and interact with them
- All 3D and blockchain logic is handled client-side; no centralized server

6. Tech Stack
- Frontend: React, TypeScript, Three.js, Zustand, Tailwind CSS
- Blockchain: ink! (Substrate), Solidity (EVM), Polkadot.js, ethers.js
- Storage: IPFS (NFT.Storage)
- Wallets: Polkadot.js extension, MetaMask

## 📅 Development Roadmap

### Overview
- Estimated Duration: 2.5 months
- Full-Time Equivalent (FTE): 2
- Total Costs: $7,500 USD

### Milestone 1: Polkadot Integration & Core Functionality ($3,750, 1.25 months)

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Comprehensive inline code documentation and user tutorial explaining cross-chain NFT imports, 3D object creation, and Polkadot wallet integration. |
| 0c. | Testing | Unit tests covering smart contract functions, XCM messaging, and 3D object persistence, with a detailed testing guide. |
| 0d. | Article | Article explaining how Polka.Space leverages Polkadot's XCM protocol to enable seamless cross-chain NFT visualization in 3D spaces. |
| 1. | Asset Hub Smart Contract | Implement and deploy a custom ink! contract on Asset Hub that will: (1) Store 3D object metadata including position, rotation, scale, and texture properties. (2) Handle NFT minting with spatial data. (3) Implement secure ownership verification. (4) Allow for cross-chain references via XCM. |
| 2. | Cross-Chain NFT Gallery | Develop a comprehensive NFT gallery component that will: (1) Query NFTs from Asset Hub, Moonbeam, and Unique Network using Polkadot.js API. (2) Display NFTs with chain origin, ownership, and metadata in a unified interface. (3) Implement filtering and sorting by chain, collection, or attributes. (4) Provide import functionality to place NFTs in 3D spaces. |
| 3. | XCM Transaction Flow | Implement proper XCM messaging that will: (1) Enable secure verification of NFT ownership across parachains. (2) Handle fee estimation for cross-chain operations. (3) Provide status updates during cross-chain transactions. (4) Optimize for minimal latency and maximum success rate. |

### Milestone 2: User Experience & Feature Completion ($3,750, 1.25 months)

| Number | Deliverable | Specification |
| ------ | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | Updated documentation covering all new features, with tutorials for multi-user sharing and NFT minting workflows. |
| 0c. | Testing | Extended test coverage, including integration tests for the complete user journey and cross-chain operations. |
| 0d. | Demo Video | Comprehensive demonstration video showcasing all platform features and Polkadot integration points. |
| 1. | 3D Object Minting | Create a minting interface that will: (1) Allow users to select 3D objects created in the environment. (2) Add metadata and properties for the NFT. (3) Handle minting transactions to Asset Hub with appropriate fees. (4) Display transaction status and confirmation. |
| 2. | Multi-user Viewing | Implement sharing functionality that will: (1) Generate shareable links to 3D spaces. (2) Handle multiple concurrent viewers. (3) Synchronize object positions and states across users. (4) Optimize networking for performance. |
| 3. | UI/UX Refinement | Enhance the user interface to: (1) Implement intuitive drag-and-drop functionality for all operations. (2) Create responsive designs for mobile and desktop. (3) Develop guided onboarding for new users. (4) Implement accessibility features for broader inclusivity. |

## 💰 Budget Breakdown

### Milestone 1 ($3,750)
- Smart Contract Development: $1,500 (50 hours @ $30/hour)
- Cross-Chain NFT Gallery: $1,250 (42 hours @ $30/hour)
- XCM Implementation: $750 (25 hours @ $30/hour)
- Documentation & Testing: $250 (8 hours @ $31.25/hour)

### Milestone 2 ($3,750)
- 3D Minting Implementation: $1,250 (42 hours @ $30/hour)
- Multi-user Viewing: $1,000 (33 hours @ $30/hour)
- UI/UX Refinement: $1,250 (42 hours @ $30/hour)
- Documentation & Demo Video: $250 (8 hours @ $31.25/hour)

## 🔮 Future Plans

### Post-Grant Development:
- Expand parachain integration to include additional Polkadot ecosystem chains
- Implement more advanced social features for multi-user interaction
- Develop virtual land system for persistent spaces
- Create template library for rapid space creation

### Additional Funding Plans:
- Apply for Polkadot Treasury funding for scaling development
- Seek partnerships with existing NFT projects in the Polkadot ecosystem
- Explore Web3 Foundation grants for advanced feature development

### Vision for Growth:
Our long-term vision is to make Polka.Space the standard entry point for non-technical users into the Polkadot ecosystem. By providing an intuitive, visually appealing interface for Polkadot's powerful cross-chain capabilities, we aim to attract creators, collectors, and brands who might otherwise be intimidated by blockchain complexity.

## ℹ️ Additional Information

Regarding the 98.3% success rate mentioned during our hackathon presentation: This figure represents our target benchmark based on research into XCM transaction reliability compared to traditional bridge approaches. While implementing the actual XCM integration, we'll be measuring and optimizing our performance against this benchmark.

Our project leverages AI-assisted development tools (Cursor) to accelerate implementation, allowing our small team to focus on user experience and Polkadot integration. This approach has already proven successful with our hackathon MVP and will help us efficiently deliver within the Fast-Grant timeline and budget constraints.
