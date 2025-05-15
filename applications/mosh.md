<img width="477" alt="Screenshot 2025-05-06 at 9 15 29 PM" src="https://github.com/user-attachments/assets/cbfc62fd-b4bc-49dd-a52c-fa857a7a13a1" />

# Mosh

## 🌟 Project Overview

### Name and One-Liner

**Mosh** – A decentralized ticketing platform to help real fans access concerts fairly by verifying fan loyalty and preventing bot scalping with NFT proof.

### Description

The ticketing industry is plagued by scalping and fraud: during the Taylor Swift Eras Tour, Ticketmaster crashed under 3.5 billion bot-driven requests, leaving millions of real fans locked out. In the UK, markups have reached 41% over face value, and hidden fees can climb as high as 70% of the ticket price.

Mosh is a decentralized concert ticketing platform that uses blockchain technology to create a fairer experience for fans. Mosh leverages NFTs to represent ticket ownership, making each ticket scam-proof.

To combat scalping, Mosh introduces a "proof of fan-ness" system, where fans earn NFT-based loyalty badges by attending events. These badges grant early ticket access to real fans, creating a fairer and more vibrant concert atmosphere.

Mosh also enforces smart contract-based resale rules:

* 40% of profits go to the artist
* 40% to the seller
* 20% to Mosh

By decentralizing ticketing, removing hidden fees, and fostering genuine fan engagement, Mosh addresses issues like ticket fraud, price gouging, and declining concert quality.

## 🔗 Polkadot Integration

Our project, Mosh, is built on **Moonbeam**, a Polkadot parachain, allowing us to deploy Solidity smart contracts with external dependencies from the OpenZeppelin Library.

Moonbeam’s native OpenZeppelin support, efficient gas metering, 6-second block times, and low-latency finality were essential for our platform, which involves minting and transferring thousands of NFT-based tickets and loyalty badges during live ticket drops.


By building on Moonbeam, we remain fully within the Polkadot ecosystem, benefiting from the relay chain’s shared security model. Polkadot’s multichain architecture, composability, and high transaction throughput uniquely enabled us to create a decentralized ticketing platform that delivers the scalability, speed, and integrity that traditional EVM networks can't match.

In the future, we also hope to explore **ink! smart contracts** to expand beyond Moonbeam.

## 🌟 Why We Are Excited

Both of us love music and concerts, as we play instruments and DJ in our free time. We've personally experienced the frustration of ticketing systems as concert fans, which gives us a personal connection to this project. Our connections to local artists in Philadelphia make us well-positioned to grow this platform and solve the problem through Mosh.

---

## 🔍 Project Details

### Documentation of Core Components, Protocols, Architecture

#### Tech Stack

![Screenshot 2025-05-06 at 9 15 08 PM](https://github.com/user-attachments/assets/066380f5-9265-4b65-b153-198af0849972)

#### Protocol Architecture

The protocol is composed of three main smart contracts:

* **EventManager**: Manages event creation, ticket drops, role registration (Fan or Musician), and attendance tracking.
* **Ticket**: An ERC721-based NFT contract representing unique, on-chain tickets with metadata tied to each concert event.
* **Marketplace**: Enables secure, rules-based secondary ticket sales with automatic revenue splits.

Concert metadata is uploaded to IPFS and linked via the NFT URI. Loyalty logic is baked into EventManager, which tracks fan attendance and awards badges.

#### User Identity and Role Protocol

Upon wallet connection, users register as either:

* **Fan**: Can browse, purchase, resell tickets, and accumulate loyalty
* **Musician**: Can create events and manage tickets

#### NFT Resale and Incentive Logic

* Resales go through Marketplace
* Revenue split: 40% Artist / 40% Seller / 20% Mosh
* NFTs remain traceable and immutable

#### Frontend Architecture

* Built with **React.js**
* Interacts with Moonbeam using **Ethers.js**
* Features: Wallet connection, role registration, event browsing, resale dashboard
* Uses **IPFS via Pinata** for metadata and image storage

#### Planned Extensions

* Off-chain event listeners for loyalty scoring
* Gas abstraction for mobile users

#### Security & Polkadot Fit

* Inherits shared security from Polkadot Relay Chain
* EVM-compatible
* High throughput and real-time minting

### Mockups / MVP:

**Demo Video**: [Watch the demo](https://youtu.be/d_7bKOSgQl8)

<img width="632" alt="Screenshot 2025-05-06 at 9 16 14 PM" src="https://github.com/user-attachments/assets/bff3cd07-b6a3-497d-8b18-8527ec750829" />

### Data Models / API Specifications

Frontend data structure (sample payloads for contract calls):

```json
{
  "eventName": "Midnight Echoes Tour",
  "description": "A synthwave live set",
  "imageFile": "concert.png",
  "priceInETH": "0.05",
  "maxTickets": 200,
  "eventDate": 1724025600,
  "metadataURI": "ipfs://QmXYZ..."
}
```

Smart Contract Interfaces:

```solidity
function createEvent(string calldata name, string calldata metadataURI, uint256 price, uint256 maxTickets, uint256 eventDate) external;
function buyTicket(uint256 eventId) external payable;
function listTicket(uint256 tokenId, uint256 price, uint256 eventId) external;
```

### Limitations

Our product is specifically designed for concert ticketing and not events in general. By the end of the three months, we hope to have our product deployed, and while we will be promoting our platform to local musicians in the area, we have no expectations of how many artists or fans will be on our platform.

---

## 🤌 Ecosystem Fit

* **Fit**: Consumer-facing dApp within Polkadot for live events
* **Target Audience**: Concert fans and independent musicians
* **Need**: Fixes ticket fraud, bot scalping, and artist underpayment
* **Comparable Projects**: Few ticketing solutions in Polkadot; Mosh is unique in loyalty verification and resale logic

---

## 👥 Team

**Team Name**: Mosh
**Contact Name**: Nevan Sujit
**Email**: [nsthettayil@gmail.com](mailto:nsthettayil@gmail.com)
**Website**: [GitHub Repo](https://github.com/tsnevan4204/polkadot-mosh)

**Team Members & GitHub**:

* [Nevan Sujit](https://www.linkedin.com/in/nevan-sujit/) – [https://github.com/tsnevan4204](https://github.com/tsnevan4204)
* [Yuvraj Lakhotia](https://www.linkedin.com/in/yuvraj-lakhotia) – [https://github.com/yuviji](https://github.com/yuviji)

### Team's experience
**Nevan Sujit:**
Nevan Sujit is an undergrad student at the University of Pennsylvania studying Math and Electrical Engineering in the Vagelos Program for Energy Research. He is on the Penn Blockchain Club, where he has particular experience with creating smart Solidity Contracts and the ReactJS frontend framework. He has a lot of hacking experience coming from the numerous hackathons he’s competed and won at, building projects like a documentation generation tool and consumer goods bundler deep learning model.


**Yuvraj Lakhotia:**

---

## 📊 Development Status

(https://github.com/tsnevan4204/polkadot-mosh)

### 📦 Project Structure

**backend/**: Contains the full suite of Solidity smart contracts, deployed using Hardhat, including:

* `EventManager.sol`: Manages event creation, ticket sales, cancellations, and ETH distribution.
* `Ticket.sol`: ERC721 contract for ticket NFTs.
* `Marketplace.sol`: Sets up Marketplace for reselling.
* `test/`: Mocha-based unit tests for smart contract functionality.
* `scripts/`: Deployment and event scripts.

**frontend/**: A React-based web application that interacts with the deployed contracts via Ethers.js.

* Key UI features include event browsing, ticket purchase/resale, and role-based dashboards for Fans vs Event Hosts.
* Styled with a techno-futuristic theme using Tailwind CSS.

### 💡 Technical Features

* Built on Moonbeam (Polkadot Ecosystem) for EVM compatibility and Polkadot-native security.
* **NFT-based Ticketing**: Tickets are ERC721 tokens with on-chain metadata and enforced royalty logic.
* **Proof of Fan-Ness**: Fans earn NFT loyalty badges through event attendance.
* **Smart Contract Resale Rules**:

  * 40% of resale profits → Artist
  * 40% → Seller
  * 20% → Mosh
* **Role Selection and Wallet Integration**:

  * Upon connecting a wallet, users can register as a Fan or Event Manager.
* **Pinata + IPFS**: Used for storing and retrieving event metadata and ticket images.

### ⚙️ Smart Contract Stack

* **Solidity + OpenZeppelin** for secure ERC721 standards
* **Hardhat** for compilation, testing, and deployment
* **Ethers.js** for frontend-contract communication
* **Moonbeam** for EVM compatibility, fast finality, and scalable NFT operations


---

## 🗓️ Development Roadmap

### Deliverables

* **0a. License**
  • Release all code and artifacts under the MIT License.

* **0b. Documentation**
  • Inline documentation of code for contracts & services
  • User guide: contract deployment, off‑chain service setup, CLI usage, end‑to‑end workflow.

* **0c. Testing & Guide**
  • Unit tests for contract logic
  • Demos of the interface to demonstrate user experience
  • Documentation of the code to show what it does

* **0d. Article**
  • Publish a technical blog post detailing architecture, implementation, and test outcomes—targeting Polkadot communities.

### *1. Account Abstraction Integration*

• **Smart contract and frontend integration using ERC-4337-compatible wallets** (e.g., Biconomy, ZeroDev).

  * Users sign transactions using social logins or passkeys, and interactions are wrapped into `UserOperations` relayed by a bundler to the entry point contract.
  
  * Session keys support limited-time interactions (e.g., buying/reselling tickets) without reauthentication.

• **Verification**: Unit tests for `UserOperation` encoding, bundler integration, Paymaster-subsidized flows, and wallet creation logic.

### *2. Mobile App Development*

• Build a **React Native mobile version** of the Mosh frontend for iOS and Android.

• Integrate account abstraction-compatible wallets for seamless social login.

• Implement **QR code-based ticket scanning** for event access.

• Provide an in-app dashboard to manage ticket purchases, loyalty badges, and resale listings.

• Optimize performance and responsiveness across mobile devices.

• **Verification**: UI tests on multiple devices, interaction tracking, and login-to-purchase performance benchmarks.

### *3. Proof-of-Fan Verification System (Spotify Integration)*

• **Spotify API integration (off-chain)** to fetch user's top artists and listening history, and cryptographically sign that data for proof verification:

  * Badge-earning eligibility is verified by matching on-chain artist support with off-chain listening data.
  
  * Serverless verifier function relays verified Spotify credentials into badge minting contract.

• **EVM contract enhancements to track and reward verified fan behavior**:

  * Mint loyalty badge NFTs based on on-chain event attendance.
  
  * Enforce tiered access to ticket drops based on badge level (e.g., Gold Fans get early access).

• **LoyaltyScore contract** to manage fan metadata and loyalty points (e.g., based on events attended, music engagement, and social actions).

• **Dashboard** to view and upgrade loyalty badge tiers.

• **Verification**: Unit tests for badge minting logic, Spotify attestation verification, tier-gating of event access, and UI tests for user badge dashboard.

### 💰 Budget Breakdown

| Milestone | Deliverables                                      | Cost (USD)   | Estimated Completion |
| --------- | ------------------------------------------------- | ------------ | -------------------- |
| 1         | 0a–0d + Deliverable 1 (Account Abstraction)       | \$2,000      | 1 month              |
| 2         | Deliverable 2 (Mobile App Development)            | \$4,000      | 1.5 months           |
| 3         | Deliverable 3 (Proof-of-Fan Verification System)  | \$4,000      | 1.5 months           |
| **Total** |                                                   | **\$10,000** | **3 months**         |

---

## 🚀 Future Plans

* Go-to-market Strategy
  ![Screenshot 2025-05-06 at 9 26 45 PM](https://github.com/user-attachments/assets/f508a8b6-e20c-4c16-8da3-f868878ae7b1)

* Continue development post-grant

  &nbsp;&nbsp;&nbsp;&nbsp;• Development of an initial platform will be complete by the end of this grant, but we hope to both add more features and make the platform more robust.

  &nbsp;&nbsp;&nbsp;&nbsp;• As we scale our platform, we hope to develop a custom parachain for our platform to use that will optimize its needs.

  &nbsp;&nbsp;&nbsp;&nbsp;• We want to create further loyalty features outside of the ones in development roadmap to expand retention of fans on platform.

  &nbsp;&nbsp;&nbsp;&nbsp;• We will apply for Polkadot ecosystem grants (beyond Fast‑Grant) and pursue relevant accelerator support.
* 💰 Additional Funding Strategy

  &nbsp;&nbsp;&nbsp;&nbsp;• We will secure angel checks and will dicuss with VCs for a pre‑seed round.

  &nbsp;&nbsp;&nbsp;&nbsp;• We will apply for Polkadot ecosystem grants (beyond Fast‑Grant) and pursue relevant accelerator support.

---

## ℹ️ Additional Information

* All work original to this team
* No other current funding

Mosh represents a new frontier for live events: decentralized, fan-first, and fair.
