# Blue Whale

- **Team Name:** Blue Whales
- **Payment Details:**
  - **DOT**: 16fzqUU1Zf8B1G7xogBkWbWBW3DUPSv7GKBV4TzzniRpURLw
  - **Payment**: 16fzqUU1Zf8B1G7xogBkWbWBW3DUPSv7GKBV4TzzniRpURLw (USDC)
- **Level:** 2

## Project Overview :page_facing_up:

### Overview

**Tagline: Making Polkadot crypto transactions as easy as sending a text message.**

Blue Whale is an AI-powered smart wallet that allows users to send, receive, and manage Polkadot-based assets directly through WhatsApp. We are simplifying crypto adoption by integrating the wallet seamlessly into a familiar interface.

**Over 2.7 billion people use WhatsApp monthly, but only 420 million own crypto wallets**, which means crypto adoption has reached just 16% of WhatsApp's user base. This 84% gap exists because traditional wallets are complex, intimidating, and require downloading unfamiliar apps.  Meanwhile, Polkadot's powerful technology remains largely inaccessible to mainstream users who would benefit from it the most.

Using Blue Whale, we embed a smart Polkadot wallet directly into WhatsApp, transforming cryptocurrency  from a technical concept to a conversational experience. Users can send DOT with the same ease as sending a text: "send 10 DOT to Sarah" — done.

**Why This Matters for Polkadot:**

- **Massive Reach Expansion:** Direct access to 2.7 billion WhatsApp users versus the current 420 million crypto wallet owners globally, with potential 6x market expansion.
- **New Use Cases Unlocked:**
  - Group payment splitting for dinners, events, or shared expenses
  - Real-time chat tipping for content creators and community moderators
  - Mini-apps for parachain dApps (shopping, governance, staking) without app downloads
  - Cross-border remittances using a familiar messaging interface
- **Developer Ecosystem Growth:** Our TypeScript SDK and analytics dashboard will enable parachain teams to build chat-based dApps with zero onboarding friction, accelerating the entire ecosystem's reach.
- **Adoption Velocity:** 30-second wallet setup versus 15+ minutes for traditional onboarding, reducing abandonment rates.
- **Financial Inclusion:** Serves users in emerging markets (Africa, Southeast Asia, Latin America) where WhatsApp penetration (85%+) far exceeds traditional banking access (40-60%).

**Team Interest:** Having witnessed firsthand the friction points for users in the Global South, unreliable internet connections, limited app storage, and low digital literacy, we are very passionate about democratizing crypto access, particularly for the 1.7 billion unbanked adults globally who own smartphones but lack traditional financial infrastructure.  Conversational interfaces represent not just convenience but a necessity for genuine financial inclusion.

Our previous experience with blockchain chatbots revealed consistent patterns: when complexity is removed, adoption accelerates exponentially. We're building Blue Whale to bring this transformation to Polkadot's superior multi-chain ecosystem.

### Project Details

**UI Components:**

**Natural Language Command Interface**
- Plain English commands: "send 5 DOT to John", "what's my balance?", "Show last 10 transactions"
- Multi-language support (initial: English, Spanish, French, Swahili, Hindi)
- AI-powered intent recognition with error correction ("send 5 dot" → interprets as "send 5 DOT")
  <img width="1920" height="945" alt="image" src="https://github.com/user-attachments/assets/c93f8748-d055-45c1-b2b7-142cdd76ffbf" />
  <img width="1920" height="945" alt="image" src="https://github.com/user-attachments/assets/df46ef2f-af32-4d0f-82f3-7bec7e8ba208" />



**Balance & Portfolio View**
- Real-time DOT balance updates
- Asset breakdown for multi-token holdings
- Historical value tracking with 7/30/90-day charts

**Transaction Confirmation Flows**
- Two-step verification with a clear summary before execution
- PIN security layer 
- Gas fee estimation and approval
- Transaction status notifications (pending → confirmed → finalized)

**Transaction History Viewer**
- Detailed receipt with block explorer links

**Data Models / API Specifications:**

Core API Endpoints:
- `/wallet/create` - Generate a new Polkadot wallet for a WhatsApp user
- `/wallet/balance` - Query wallet balance across assets
- `/transaction/send` - Initiate and sign transaction
- `/transaction/history` - Retrieve transaction records
- `/analytics/track` - Track user engagement metrics

Data Models:
- `User: { whatsappId, walletAddress, createdAt, preferences }`
- `Transaction: { txHash, from, to, amount, asset, timestamp, status }`
- `MiniApp: { appId, name, developer, permissions, analytics }`

**Technology Stack:**
- Blockchain: Polkadot/Substrate, Westend Testnet
- Backend: Node.js with Express, PostgreSQL database
- SDK: TypeScript SDK for developers
- Frontend: React-based analytics dashboard
- WhatsApp Integration: WhatsApp Business API
- Cryptography: Polkadot.js for wallet operations

**Architecture Overview:** 

The system consists of three main components:
1. WhatsApp Interface Layer - Handles message parsing and user interactions
2. Wallet Service Layer - Manages key storage, transaction signing, and blockchain interactions
3. Developer Platform - Provides SDK, documentation, and analytics dashboard

**What Blue Whale Will NOT Provide:**

To maintain sharp focus and deliver quality, Blue Whale deliberately scopes to core wallet functionality:
- Blue Whale is not a full DeFi protocol—it focuses on wallet functionality and everyday transactions
- No tokenomics or native token issuance
- Not a replacement for advanced trading platforms—designed for simple, everyday transactions
- Initial Polkadot-only support — Multi-chain support planned for the future 
- Marketing campaigns and business development are outside the scope of this grant

### Ecosystem Fit

**Where and How Does the Blue Whale Fit:**

Blue Whale occupies a unique position as accessibility infrastructure for the Polkadot ecosystem. While existing wallets serve crypto-native users well, 95% of potential users never install them due to friction. We solve this by meeting users where they already are in their daily messaging app.

Blue Whale aims to be the lowest-friction "on-ramp infrastructure" that connects users into the broader Polkadot ecosystem. Once comfortable with basic transactions in WhatsApp, users naturally graduate to:
- Full-featured wallets (SubWallet, Nova, Talisman) for advanced features
- Parachain dApps for DeFi, NFTs, and governance
- Direct blockchain interaction as their confidence grows

We complement, rather than compete with, existing wallets by serving a distinct audience: the next billion users who will never download Polkadot.js.

**Target Audience:**

**Primary: Non-Technical Mainstream Users (60% focus)**
- Demographics: Ages 18-55, smartphone owners, active on social media
- Characteristics:
  - Limited crypto knowledge (heard of Crypto, unfamiliar with wallets)
  - Concerned about security but intimidated by seed phrases
  - Use WhatsApp daily for personal and business communication
  - Prefer simple, familiar interfaces over feature-rich complexity
- Blue Whale Value: Zero-learning-curve crypto access

**Secondary: Developers & Mini-App Creators (20% focus)**
- Demographics: Blockchain developers, parachain teams, Web2 developers exploring Web3
- Characteristics:
  - Seeking to expand user reach beyond crypto-native audiences
  - Building consumer-facing dApps (marketplace, gaming, social)
  - Want to reduce onboarding friction for their applications
- Pain Points:
  - 95% of users abandon during wallet setup."
  - Needs analytics to understand user behavior."
- Blue Whale Value: SDK providing chat-based UX + analytics for parachain dApp

**Tertiary: Existing Polkadot Community (10% focus)**
- Demographics: Current DOT holders, active governance participants
- Characteristics:
  - Own multiple wallets but seek convenience for mobile/casual transactions
  - Early adopters are willing to test new tools
- Pain Points:
  - "I don't want to open my browser wallet for small transactions."
  - "Mobile wallets are good but require switching apps"
- Blue Whale Value: Instant access for quick transactions without app switching

**Quaternary: Small-to-Medium Merchants & Service Providers (10% focus)**
- Demographics: Small business owners, e-commerce merchants, service providers, freelancers
- Geographic: Emerging markets (India, Nigeria, Philippines, Brazil, Indonesia) and global SMEs
- Business types: Retail shops, restaurants, online stores, freelance services, tour operators, content creators
- Characteristics:
  - Already using WhatsApp Business for customer communication and catalog management
  - Seeking lower payment processing fees (traditional processors charge 2-4% vs. crypto <1%)
  - Serving international customers or diaspora communities
  - Want instant payment settlement to improve cash flow
- Pain Points:
  - "Payment processors take 3% of every transaction—it adds up fast"
  - "International transfers take days and cost too much.".
  - "I need payments to settle instantly for better cash flow."
  - "My customers abroad want to pay in crypto, but I don't know how." 

**Needs Addressed:**

- **Simplified Onboarding:** Eliminate the need for users to download and learn new wallet applications
- **Familiar Interface:** Uses messaging UI that billions already understand
- **Developer Accessibility:** Provides SDK and analytics for building Polkadot-based chat applications
- **Mobile-First Access:** Enables crypto transactions on devices users already carry
- **Reduced Friction:** Natural language commands replace complex transaction forms
- **Merchant Payment Infrastructure:** Offers small businesses an affordable and instant way to accept crypto payments directly within their existing WhatsApp Business workflow, eliminating the need for expensive payment processors and multi-day settlement delays.

**Evidence of Need and Feasibility:**

Recent research from Consensys (2024) indicates that **60% of potential Web3 users perceive complexity as the main primary barrier to adoption**, while **74% prioritize ease of use**. Globally, using a Web3 wallet for transactions is the most common activity, though wallet ownership remains below 50%. Security (77%) and ease of use (74%) are the top factors when choosing a crypto wallet.

Meanwhile, messaging platforms like the success of Telegram trading bots (e.g., Unibot) demonstrate market appetite for chat-native crypto tools. 

**Evidence of Market Need & UX Barriers**

🔹 **Crypto UX Barriers**

Consensys 2024 Global Web3 Survey: "60% of potential users cite complexity as the main barrier to Web3 adoption. 77% value security and 74% value ease of use." 

📎 Source: https://consensys.io/blog/global-survey-on-crypto-and-web3-press-release-2024

UX remains a significant barrier for mainstream Web3 adoption.

From the Onchain Research survey: "Poor UX has been an equally significant obstacle … Unlike Web2 applications,  Web3 apps often require users to navigate complex wallet setups, manage private keys…" 

Source: https://onchain.org/research/crypto-consumer-apps-unlocking-real-world-utility-and-driving-mass-adoption-in-2025/chapter/1/

Users struggle with fragmentation (multiple wallets, chains)

Article from Cointelegraph: "Fragmentation and complicated user experience remain two of the most significant obstacles 62% of crypto users reported using at least two wallets …" 

Source: https://cointelegraph.com/news/multi-wallet-usage-16-ai-address-crypto-fragmentation-gap

Academic validation of chat-based crypto interfaces

Brokerbot: A Cryptocurrency Chatbot in the Social‑technical Gap of Trust (2021) – Peer-reviewed research exploring a chatbot interface on messaging platforms interacting with crypto, providing academic validation for the chat-wallet concept in Blue Whale. 

Source: https://link.springer.com/article/10.1007/s10606-021-09392-6

**WhatsApp Reach:**  WhatsApp is the world's most used messaging app with over 2.7 billion monthly active users (as of 2025).  Statista – Most Popular Messaging Apps Worldwide 2025

**Comparable Projects in Polkadot Ecosystem:** 

After thorough research, no existing WhatsApp-integrated Polkadot wallets were found. Traditional Polkadot wallets include:
- Polkadot.js Extension (browser-based)
- Talisman Wallet (browser & mobile)
- SubWallet (mobile app)
- Nova Wallet (mobile app)

**How Blue Whale is Different:** 

Blue Whale is unique in combining:
- Chat-based UX instead of a standalone app
- Natural language transaction processing
- Developer SDK for building mini-apps within the messaging platform
- Built-in analytics for tracking user engagement
- Zero app installation requirement—works within the existing WhatsApp

**Similar Projects in Related Ecosystems:**

- **Telegram Wallet Bots (various blockchains):** Blue Whale differs by focusing on WhatsApp's larger user base and providing comprehensive developer tools
- **WeChat Mini-Programs (China):** Similar concept, but Blue Whale brings this to the global WhatsApp audience with Polkadot integration

**How Blue Whale Improves DOT Token Usage:**

- Makes DOT transactions accessible to non-crypto-native users through a familiar messaging interface
- Enables micropayments and tipping in group chats, increasing transaction volume
- Provides developers with tools to create DOT-based mini-apps and services
- Facilitates DOT-based commerce through chat-based shopping experiences

## Team :busts_in_silhouette:

### Team members

- Ngozi (Team Leader) – Blockchain enthusiast and innovator with project management experience
- Ali – Blockchain developer with 5 years of Substrate experience, specializing in chatbot development

### Contact

- **Contact Name:** Ngozi
- **Contact Email:** ngozi@bluewhale.io
- **Website:** https://bluewhale.io 

### Legal Structure

- **Registered Address:** To be provided during the KYC/KYB process
- **Registered Legal Entity:** To be provided during the KYC/KYB process

### Team's experience

**Ngozi**, Project Management Professional (PMP) certified with a specialized focus on decentralized technology implementations, has over 5 years of experience in blockchain project management and outreach:
- managed cross-functional teams in the delivery of blockchain infrastructure projects
- Organized and executed blockchain educational workshops and hackathons across Africa, onboarding developers to Web3 technologies

**Ali** is a seasoned blockchain developer with 5 years of hands-on experience building on Polkadot and related technologies. Ali's background includes:
- Development of custom Substrate pallets for DeFi protocols, including governance modules and token economics implementations
- Active contributor to multi-chain ecosystem projects 

**Navneet C:** Specialized in WhatsApp Chatbot, Business Automation & AI Agent Expert
- Built Connverz to help automate customer engagement using the WhatsApp Cloud API
- Expertise in natural language processing, Meta API (NLP), API integrations, and enterprise-scale automation workflows

**Previous Grant Applications:** This is our first Web3 Foundation grant application.

### Team Code Repos

Organization:
- https://github.com/Blue-Whale-Repo 

Team Members:
- https://github.com/asadalisiyal (Ali)
- https://github.com/sidelaw  (Ngozi)
- https://github.com/Nav-Chouhan (Nav) 

### Team LinkedIn Profiles (if available)

LinkedIn profiles not yet available.

## Development Status :open_book:

**Current Status:** The Research phase is complete, and the MVP is in active development.  

**Prior Work and Research:**
- https://github.com/Blue-Whale-Repo/Initial-stuture
- https://drive.google.com/file/d/1ywJbEtq56KUSrZDeURvN4ndY5YXoTD09/view?usp=sharing

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 1.5
- **Total Costs:** 15,000 USD
- **DOT %:** 50%

### Milestone 1 — WhatsApp Smart Wallet Integration

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT License |
| **0b.** | Documentation | We will provide both inline documentation of the code and a comprehensive developer guide that explains how to integrate the Polkadot wallet into WhatsApp. The documentation will include: (1) Setup instructions for running the WhatsApp bot, (2) API documentation for all wallet endpoints, (3) Step-by-step tutorial for creating a wallet, sending transactions, and checking balances via WhatsApp, (4) SDK documentation for developers who want to build mini-apps, and (5) Security best practices for key management. |
| **0c.** | Testing and Testing Guide | Comprehensive unit tests will fully cover core features, ensuring functionality and robustness. We will provide: (1) Unit tests for wallet creation, transaction signing, and balance queries (target: >80% code coverage), (2) Integration tests for WhatsApp message handling and blockchain interaction, (3) End-to-end tests simulating complete user workflows, (4) Detailed guide explaining how to run all tests locally and in CI/CD pipeline, (5) Test data and mock WhatsApp messages for validation. |
| **0d.** | Docker | We will provide a Dockerfile for testing all the functionality delivered with this milestone. The Docker container will include: (1) Complete backend service with dependencies, (2) Test Westend Testnet connection, (3) WhatsApp API integration (with test credentials documentation), (4) Pre-configured PostgreSQL database, (5) Instructions for running the complete stack locally. |
| **0e.** | Article | We will publish an article/workshop on Medium and share it in the Polkadot community that explains: (1) How we integrated Polkadot wallets into WhatsApp, (2) The technical challenges we overcame, (3) Vision for chat-based crypto adoption. Target audience: Polkadot developers and crypto enthusiasts. |
| 1. | Smart Wallet Integration | We will deliver a fully functional Polkadot smart wallet embedded in WhatsApp operating on Westend Testnet. Features include: (1) Non-custodial wallet creation with secure key generation, (2) Support for DOT token transfers. Users can send a WhatsApp command to create a wallet and receive confirmation with the wallet address. |
| 2. | Chat Interface | We will deliver a natural language chat interface that allows users to: (1) Initiate transactions using commands like "send 10 DOT to [address]", (2) Check balances with "show balance" command, (3) View transaction history, (4) Interact with mini-apps through conversational flows, (5) Receive real-time transaction confirmations and notifications.. Verification: Demo video showing complete transaction flow from WhatsApp message to blockchain confirmation. |

### Milestone 2 — Analytics Dashboard & Developer SDK

- **Estimated Duration:** 1 month
- **FTE:** 1.5
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT License |
| **0b.** | Documentation | We will provide comprehensive documentation for: (1) Analytics dashboard user guide explaining all metrics and visualizations, (2) SDK documentation with complete API reference, code examples, and integration tutorials, (3) Mini-app development guide with best practices, (4) Authentication and security documentation for developers, (5) Troubleshooting guide for common integration issues. |
| **0c.** | Testing and Testing Guide | We will deliver comprehensive tests covering: (1) Unit tests for SDK functions and API endpoints (>80% coverage), (2) Integration tests for dashboard data aggregation and visualization components, (3) End-to-end tests simulating developer workflows using the SDK, (4) Performance tests for dashboard loading with large datasets, (5) Detailed guide for running all tests with sample data. |
| **0d.** | Docker | We will provide a Dockerfile that includes: (1) Analytics dashboard with all dependencies, (2) Backend API service for analytics data, (3) Sample data generator for testing visualizations, (4) PostgreSQL database with test data, (5) Instructions for accessing the dashboard and testing SDK integration locally. |
| **0e.** | Article | We will publish an article/tutorial explaining: (1) How developers can build mini-apps on Blue Whale using the SDK, (2) How to leverage analytics to understand user behavior, (3) Case study of a sample mini-app integration. The article will be shared on Medium and in Polkadot developer communities. |
| 1. | Analytics Dashboard | We will publish an article/tutorial explaining: (1) How developers can build mini-apps on Blue Whale using the SDK, (2) How to leverage analytics to understand user behavior, (3) Case study of a sample mini-app integration. The article will be shared on Medium and in Polkadot developer communities. |
| 2. | TypeScript SDK | We will deliver a React-based web dashboard that provides: (1) Real-time user engagement metrics (active users, transaction volume, retention rates), (2) Transaction analytics with visualizations (daily/weekly/monthly charts)|
| 3. | Developer Portal | We will deliver a comprehensive TypeScript SDK for developers that includes: (1) Wallet integration methods (create, query, transact), (2) Mini-app registration and management APIs, (3) User interaction tracking methods. The SDK will include an example project.Retry|

## Future Plans

**Long-term Maintenance and Development:**

- how you intend to finance the project's long-term maintenance and development: The project will be sustained through transaction fees (micro-fees on transfers) and premium developer tools, Revenue from merchant and enterprise integrations, Community-driven development with open-source contributions

**Short-term Enhancement and Promotion (3-6 months):**

- Deploy wallet and SDK to Polkadot mainnet after successful Westend testing
- Launch public beta with marketing campaign targeting the Polkadot community
- Host developer workshops and hackathons to encourage mini-app development
- Integrate with popular Polkadot dApps (e.g., DEXs, NFT platforms) as mini-apps
- Enhance the analytics dashboard to provide deeper insights into user behavior
- Publish case studies and tutorials showcasing successful integrations
- Attend Polkadot conferences to demonstrate the platform

**Long-term Vision (6-12+ months):**

- Expand to support additional Polkadot parachains
- Build a merchant dashboard for transaction analytics, customer insights, and financial reporting
- Enable instant fiat on/off-ramps for merchants who want to convert crypto payments immediately
- Implement staking functionality directly in WhatsApp
- Enable governance participation through chat commands
- Build a marketplace for mini-apps and developer tools
- Explore integration with other messaging platforms
- Partner with payment processors to enable fiat on/off-ramps
- Scale infrastructure to support millions of users
- Establish Blue Whale as the standard for messaging-based crypto interfaces in the Polkadot ecosystem

**Team Commitment:** We are committed to the long-term success of Blue Whale and plan to continue development beyond this initial grant. We see this as foundational infrastructure for Polkadot adoption.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- **Work you have already done:** Research phase completed, initial MVP development in progress
- **If there are any other teams who have already contributed (financially) to the project:** Self-funded 
- **Previous grants you may have applied for:** This is our first grant application
