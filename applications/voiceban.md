# VoiceBan - A Decentralized Social Platform

* **Team Name:** VoiceBan
* **Payment Details:**
  * **DOT**: 1cqNABGgtivgMt4PSAL81QporrxrfRooF91DYJoQhPoqUvt.
  * **Payment**: 1cqNABGgtivgMt4PSAL81QporrxrfRooF91DYJoQhPoqUvt (USDC). 
* **Level:** 3

## Project Overview :page_facing_up:

### Overview

VoiceBan is a censorship-resistant, resilient, and fully decentralized social and infrastructure protocol built on Substrate. 
At its core, the project seeks to eliminate single points of failure in Web3 applications by addressing two of the most persistent weaknesses in decentralized systems today: 
- reliance on DNS for frontend access, 
- and reliance on hardcoded or centralized methods for frontend-backend connectivity. 

To solve this, VoiceBan introduces two patentable innovations: 
- Decentralized backend discovery powered by IPFS/IPNS with deterministic CID rotation, and 
- Decentralized name resolution that enables resilient, censorship-resistant frontend access through Progressive Web Apps (PWAs). 

Together, these innovations ensure that applications within the Polkadot ecosystem remain continuously accessible, even under DNS takedowns, infrastructure outages, or targeted censorship.

VoiceBan is deeply integrated with Substrate, leveraging its modular framework to implement custom pallets for frontend-backend connectivity, identity management, governance, and IPFS integration. 
The architecture is designed to function as a standalone chain, with the future plans to make it parachain-ready, allowing it to function as a standalone chain or connect seamlessly into the Polkadot and Kusama networks. 
Beyond its own application as a decentralized social media platform, VoiceBan provides reusable infrastructure components – pallets, libraries, and resolver clients — that can be adopted by any parachain, wallet, or frontend application requiring censorship resistance. 
In doing so, it strengthens the broader ecosystem by directly addressing the DNS dependencies that remain a critical vulnerability across Web3.


![A simplistic flow diagram](https://github.com/VoiceBan/Grants-Program/blob/master/static/img/images/flow-diagram.png)

Our team is motivated by a simple but urgent objective: to create a system that can never experience a total outage. 
From state-level DNS blocking of social platforms in Turkey (2023), to Cloudflare outages that disrupted major Web3 frontends in 2024, 
the evidence is clear that both centralized and decentralized applications remain fragile when critical resolution layers are compromised. 
VoiceBan exists to remove these single points of coercion, enabling both end users and developers in the Polkadot ecosystem to rely on infrastructure that stays online regardless of political or infrastructural pressures.

### Project Details

VoiceBan is designed as a complete decentralized social media platform coupled with an infrastructure layer that can be reused across the Polkadot ecosystem. 
The frontend is built as a Progressive Web App (`PWA`) in [`Yew.rs`](https://github.com/yewstack/yew/tree/master), compiled to WebAssembly, 
and equipped with service workers that manage deterministic CID computation and IPFS/IPNS gateway discovery for frontend–backend connectivity. 
Mockups of the core user experience include:
- A profile management dashboard where users create and verify their on-chain identity, 
- A social feed interface supporting posts, threaded comments, and reactions, and, 
- A governance panel where community members can flag content, vote on proposals, and participate in decision-making. 

These designs mirror familiar Web2 usability while embedding blockchain-native primitives such as identity proofs, governance reputation, and tamper-proof interactions.

The core data models and APIs are fully on-chain. Unlike many projects that push user content to IPFS or other storage layers, 
VoiceBan persists posts, comments, likes, and profile updates directly into the Substrate blockchain’s database. 
This ensures that all social interactions are immutable, auditable, and secured by consensus, without reliance on external pinning infrastructure. 
The `UserProfile` struct captures attributes like identity metadata and governance participation, 
while `ink!` smart contracts (soon to be replaced by custom pallets) handle the dynamic logic for posts, threaded comments, and group interactions. 
The exposed API surface allows developers to query content, retrieve user groups, and track engagement with deterministic results anchored in the chain state.

The technology stack combines Substrate for consensus and runtime logic, custom pallets for validator discovery and governance, 
and `ink!` smart contracts for modular social functionality. 
At the access layer, the Yew.rs-based PWA leverages service workers to compute deterministic IPNS records, select healthy IPFS gateways, 
and establish WSS connections to validators discovered via IPNS. 
This design guarantees censorship resistance and multi-gateway failover without introducing centralized points of control. 
Together, these layers form a fully decentralized pipeline; from backend validator resolution, to on-chain storage of user content, to frontend delivery through a resilient, installable PWA.


![A high-level PWA workflow](https://github.com/VoiceBan/Grants-Program/blob/master/static/img/images/PWA-Workflow.png)

Our access architecture is layered. In the pre-installation phase, less experienced users can retrieve the PWA via a familiar CNAME (e.g., `app.voiceban.com`) 
that dynamically rotates across IPFS gateways using a `Heartbeat` service. 
This minimizes downtime if any gateway or DNS entry is compromised. 
Once the PWA is installed, the application is 100% decentralized: the service worker computes deterministic IPNS records and queries multiple gateways in parallel, 
eliminating DNS dependencies entirely. 
This belt-and-suspenders design ensures continuity of access both for new users and for those who have already onboarded.

A proof-of-concept (PoC) is already in place, demonstrating frontend–backend connectivity, validator endpoint resolution through IPFS/IPNS, and user onboarding via sign-up and login flows within the PWA.
(**A demo has been provided to [Piet Wolff](https://github.com/PieWol)**) This MVP validates our architecture and enables benchmarking under realistic conditions, such as gateway downtime or DNS removal. 
The next stage will stabilize the architecture, switching from NPOS to a custom consensus mechanism for faster message delivery, complete frontend features, integrate governance-based moderation, and launch a public testnet with reproducible instructions for developers and validators.

At the same time, it is important to clarify what VoiceBan is not. 
It is not intended as a universal DNS replacement; the name-resolution layer is specific to Substrate and Polkadot applications. 
Nor does it attempt to provide legal compliance tooling, advertising systems, or mobile-native applications within the scope of this grant. 
Instead, VoiceBan focuses narrowly on building the infrastructure needed to guarantee resilient access, censorship resistance, and verifiable social primitives, while leaving room for others in the ecosystem to extend the platform for additional use cases.

### Ecosystem Fit

VoiceBan sits at the intersection of application and infrastructure in the Polkadot stack: 
it is a Substrate chain providing a censorship-resistant social layer and a reusable access layer (frontend install and backend discovery) that any parachains or DApps can adopt. 
Concretely, VoiceBan contributes a Yew.rs PWA with service-worker–driven IPNS discovery for connecting browsers to the network validators over WSS (no DNS dependence), 
a palletized validator-rendezvous mechanism, and on-chain social primitives (profiles, posts, comments, reactions, etc.). 
This makes it useful in three ways: 
- as a standalone social chain; 
- as an embeddable discovery stack for parachains, wallets, explorers, and tooling that want DNS-independent browser access; and 
- as a set of composable pallets/contracts that other teams can import with minimal coupling to our app.

Our target audience spans: 
- Parachain teams and dapp/frontend developers who need resilient browser connectivity to their nodes; 
- Validator operators who want a standardized way to publish WSS endpoints that clients can discover without hardcoded bootlists; 
- Governance/DAO projects that can reuse our identity/reputation primitives; and, ultimately 
- End users who need an application that stays reachable under pressure. 

The needs we address are twofold: 
1. Frontend reachability under DNS coercion or outages, and
2. Browser-friendly, decentralized backend discovery without centralized bootstraps or brittle hardcoding. 

These needs are well-documented in incident reports and measurements: 
1. During the February 2023 restrictions in Türkiye, social media access was impeded via throttling and DNS interference; 
measurement data from [`OONI`](https://ooni.org/post/2023-turkey-throttling-blocking-twitter/) and reporting from [Freedom House](https://freedomhouse.org/country/turkey/freedom-net/2023) describe repeated throttling/blocks over the period, 
underscoring how DNS-anchored access fails precisely when people need it most. 
2. Likewise, infrastructure outages periodically take large swaths of web properties offline; 
Cloudflare reported customer-visible incidents in [2024](https://blog.cloudflare.com/cloudflare-incident-on-june-20-2024/) and [2025](https://blog.cloudflare.com/deep-dive-into-cloudflares-sept-12-dashboard-and-api-outage/) affecting reachability; 
3. Regional submarine-cable failures in [March 2024](https://www.reuters.com/world/africa/internet-disruption-hits-west-central-africa-netblocks-cloudflare-data-shows-2024-03-14/) degraded access across West and Central Africa; 
highlighting why multi-gateway, multi-path access matters for Web3 frontends.

Within the Substrate/Polkadot/Kusama ecosystem, there are adjacent efforts but no project that combines browser-level, 
DNS-independent access, deterministic IPNS-based validator discovery, and a chain-native social application. 
- Social projects such as Subsocial focus on the application layer; 
- Identity projects such as KILT focus on credentials; 
- Infra threads in the [Polkadot forum](https://forum.polkadot.network/t/decentralized-nodes-polkadotters/14128) discuss decentralization of nodes and cloud dependencies. 

VoiceBan’s distinction is to close the last mile for browsers (installable PWA + IPNS discovery over multiple public gateways) 
and to standardize a rendezvous layer for validators that any parachain or app can import; thus, 
removing DNS as a single choke point while keeping libp2p discovery untouched once inside the network. 
In related ecosystems, partial solutions exist—naming (ENS/Handshake), hosting (Fleek), or social graphs (Lens/Farcaster)—but they either remain DNS-dependent for practical access or rely on centralized relayers/indexers for UX. 
VoiceBan diverges by 
(a) making browser entry decentralized and verifiable via IPNS + multi-gateway resolution, 
(b) storing all social content on-chain (no reliance on pinning for core data), and 
(c) packaging the access/resilience logic as reusable pallets and libraries that Polkadot teams can drop into their stacks.

## Team :busts_in_silhouette:

### Team members

- Veto Creed (CEO & Founder)
- [Usama Ali](https://github.com/Ali-Usama) (Team Lead)
- [Kofi Otuo](https://github.com/Kofituo) (Full-stack Blockchain Developer)
- [Thien Tran](https://github.com/duythien) (Full-stack Blockchain Developer)

### Contact

- **Contact Name:** Veto Creed
- **Contact Email:** veto@voiceban.com
- **Website:** https://voiceban.io

### Legal Structure

- **Registered Address:** 8 The Grn, ste B, Dover 19901, Delaware, United States (e.g. High Street 1, London LK1 234, UK)
- **Registered Legal Entity:** Voiceban LLC

### Team's experience

Our team consists of several experienced full-stack and protocol engineers with a diverse background in blockchain, distributed systems, and web development. 
Each member has many years of technical experience with a combined 15+ years of experience in distributed systems and blockchain technology. 
They specialize in Substrate runtime development, and custom pallet creation, with prior contributions to the `rust-ipfs` ecosystem. 
They are also experienced in designing and operating high-availability, cloud-based distributed systems, with a focus on reliability and resilience. 
Our team is committed to building a decentralized social network that is accessible to everyone, regardless of political or infrastructure pressures.

### Team Code Repos

- https://github.com/VoiceBan/VoiceBanBackend
- https://github.com/VoiceBan/VoiceBanFrontend
- https://github.com/VoiceBan/HearbeatService


## Development Status :open_book:

VoiceBan is an active Substrate-based blockchain project currently in the early MVP release phase. 
The team has completed the foundational backend and frontend connectivity layers, achieving a working proof of concept that demonstrates deterministic CID-based discovery, user authentication, and social interaction primitives. 
The core runtime already enables sign-in/sign-up, posts creation, and on-chain profile management. 
A local test network is operational, validating end-to-end communication between the Yew.rs PWA frontend and the Substrate backend through pseudorandomly derived IPNS records. 
These achievements establish the technical groundwork for the project’s next milestone: deploying a public PWA version with resilient gateway rotation and extended social functionality.

**Completed MVP Components**:
- Custom Substrate runtime with `UserProfile` and `IPFS` pallets 
- Pseudorandom backend discovery using IPFS `multiaddrs` 
- Basic on-chain profile creation and management 
- Local development network with comprehensive integration tests 
- Internal testing across 5 validators and 50+ test profiles demonstrating full frontend-backend synchronization

The VoiceBan codebases are currently private while the underlying technologies for **Decentralized Backend Discovery** and **Decentralized Name Resolution** undergo the patent submission process. 
We will provide direct access to selected Web3 Foundation reviewers for code verification and, once the intellectual property filings are accepted, we intend to open-source the repositories under permissive licenses for community adoption and contribution.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 months
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 89,000 USD

### Milestone 1 — Runtime Refactor & Core Social Pallets

- **Estimated duration:** 2 months
- **FTE:**  3
- **Costs:** 25,000 USD

**Rationale for Rewrite**

During the MVP phase, we implemented posts creation using ink! contracts to validate our data model, event flow, and frontend-backend connectivity via deterministic CIDs. 
While this served as a successful proof of concept, contract-based social logic introduces unnecessary runtime overhead, higher fees, and less predictable performance for high-frequency actions (posts, comments, likes).

Because VoiceBan’s social layer is protocol-level functionality, migrating this logic into Substrate pallets offers major benefits, including the lower execution cost, and more efficient storage access patterns.
This milestone formalizes the move from PoC -> production-grade architecture.

|  Number | Deliverable               | Specification                                                                                                                     |
|--------:|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                   | Code published under Apache 2.0                                                                                                   |
| **0b.** | Documentation             | Inline Rustdocs + developer guide explaining pallet APIs and how to send transactions via Polkadot.js or the PWA.                 |
| **0c.** | Testing and Testing Guide | Unit/Integration tests covering ≥ 90% of pallet logic. Testing guide for running pallet tests locally.                            |
| **0d.** | Docker                    | Dockerfile to spin up a development chain exposing the new pallet functionality.                                                  |
|     0e. | Article                   | Blog post summarizing why pallet-based architecture is preferred and how it improves chain performance, UX, and decentralization. |
|      1. | Pallet: Posts             | Replace ink! post contract with a native pallet supporting: create, update visibility, soft-delete, pagination, event emission.   |
|      2. | Pallet: Comments          | Native pallet for threaded comments, linked to posts by PostId, with on-chain indexing for efficient queries.                     |
|      3. | Pallet: Reactions         | Support likes/dislikes/other reactions as a lightweight extrinsic, optimized storage maps, and event-level inclusion.             |
|      4. | Pallet: Groups            | Group creation, join/leave, membership lists, group moderator roles; replaces ink! group logic from the PoC.                      |
|      5. | Chain Integration         | Runtime integration, weight benchmarks, and configuration of extrinsics in metadata for PWA compatibility.                        |

### Milestone 2 - Profile Page UI + Friends Page UI
(Complete core user profile experience)

- **Estimated Duration:** 1.5 months
- **FTE:** 3
- **Costs:** 20,000 USD

|    Number | Deliverable            | Specification                                                                                                                     |
|----------:|------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **0a–0d** | Mandatory deliverables | License, documentation, tests, Docker.                                                                                            |
|   **0e.** | Article                | Detailed walkthrough of the frontend profile system.                                                                              |
|    **1.** | Profile Page UI        | Yew.rs-based responsive page showing avatar, bio, posts, stats, and “Edit Profile” functionality.                                 |
|    **2.** | Friends Page UI        | Dedicated page showing another user’s profile summary, list of friends/followers, and actions (Add, Remove, Message placeholder). |
|    **3.** | Identity Integration   | Connect UI to on-chain `UserProfile` pallet; implement event subscriptions for live updates.                                      |


### Milestone 3 - Search UI + Search Infrastructure

- **Estimated Duration:** 1.5 months
- **FTE:** 3
- **Costs:** 20,000 USD

|    Number | Deliverable                | Specification                                                                                                     |
|----------:|----------------------------|-------------------------------------------------------------------------------------------------------------------|
| **0a–0d** | Mandatory deliverables     | License, documentation, tests, Docker.                                                                            |
|   **0e.** | Article                    | Explanation of decentralized search patterns and trade-offs.                                                      |
|    **1.** | Search UI                  | Search page with filters (users, groups, posts) and live suggestions.                                             |
|    **2.** | Search Indexing Extensions | Extend pallets with indices to support fast lookups for profile names, tags, post content references, and groups. |
|    **3.** | Results Page               | Responsive results UI with pagination and consistent styling.                                                     |


### Milestone 4 - Requests Page & Groups Page UI

- **Estimated Duration:** 1 month
- **FTE:** 3
- **Costs:** 12,000 USD

|    Number | Deliverable             | Specification                                                                                            |
|----------:|-------------------------|----------------------------------------------------------------------------------------------------------|
| **0a–0d** | Mandatory deliverables  | License, documentation, tests, Docker.                                                                   |
|   **0e.** | Article                 | “Groups & Requests: Designing a Decentralized Social Layer.”                                             |
|    **1.** | Requests Page           | List incoming friend requests and group invitations with Accept/Reject extrinsics.                       |
|    **2.** | Group Page UI           | UI based on provided Figma designs: header image, description, supporters, posts, audio, photos, videos. |
|    **3.** | Group Logic Integration | Bind UI actions to on-chain group pallet operations.                                                     |


### Milestone 5 - PWA Enhancements & Decentralized Name Resolution

- **Estimated Duration:** 1 month
- **FTE:** 3
- **Costs:** 12,000 USD

|    Number | Deliverable                 | Specification                                                                                                                                            |
|----------:|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a–0d** | Mandatory deliverables      | License, documentation, tests, Docker.                                                                                                                   |
|   **0e.** | Final Article               | Comprehensive technical article: “VoiceBan: A Decentralized Access Layer for Substrate Applications.”                                                    |
|    **1.** | Service Worker v2           | Improve the previously implemented deterministic IPNS computation + multigateway fetch; and introduce health-based validator WSS selection and failover. |
|    **2.** | Gateway Rotation & Fallback | Integrate heartbeat service to rotate CNAME gateway targets for pre-install users.                                                                       |
|    **3.** | Connectivity Testing        | Simulate gateway failures and confirm PWA reliably discovers validators via multiple IPFS gateways.                                                      |

**Not included in Phase 1**

Direct Messaging is intentionally excluded from this grant phase.
VoiceBan plans to adopt a non-NPoS consensus mechanism optimized for low-latency messaging. 
This subsystem will be proposed separately in Phase 2, once the chain architecture and social pallets are fully established.


## Future Plans

In the short term, our focus is on completing the development milestones outlined in this proposal, stabilizing the Substrate runtime, and deploying a public testnet that demonstrates VoiceBan’s decentralized access layer and core social features. Following the completion of the grant milestones, we will open the codebase under a permissive license once our intellectual property submissions have been processed, enabling broader community participation and external audits. We also plan to engage with the Substrate and Polkadot developer communities through technical write-ups, workshops, and contributions to shared tooling that supports frontend access resilience and decentralized discovery.

Long-term maintenance and development will be supported through a combination of ecosystem partnerships, potential follow-up grants, and a forthcoming seed round aimed at building a sustainable engineering team. VoiceBan is designed as a public-good infrastructure layer for the Polkadot ecosystem, and we intend to pursue collaborations with parachain teams, wallet developers, and community governance projects that may adopt our pallets, resolver logic, and PWA architecture. These integrations will guide new feature development and ensure that VoiceBan evolves in alignment with real-world needs across the ecosystem.

The team intends for VoiceBan to become a long-lived, decentralized social coordination layer and censorship-resistant access protocol within Polkadot. Future iterations will introduce a specialized consensus mechanism tailored for low-latency messaging, enhanced governance tools, and cross-chain interoperability with other social or identity systems. We are committed to maintaining and improving the project beyond the scope of this grant, and to fostering a community around resilient communication infrastructure that strengthens the broader Web3 landscape.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website.
**Figma Designs** https://www.figma.com/proto/iRqabzofEJBjk1jDcu878I/Web-App-V2--Web-View-?node-id=473-17460&t=coF44i9Qg5ldgnTH-1
