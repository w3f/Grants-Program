# Opentribe: The Talent Layer of Polkadot

## Project Overview

**Tagline (one-sentence summary):**  
Opentribe is building the Talent Layer of Polkadot—an all-in-one platform for **RFPs, bounties, and grants**, designed to empower builders in the Polkadot ecosystem.

**Brief description of the project:**  
Opentribe now provides a streamlined interface for **Requests for Proposals (RFPs)**, bounties, and grants. The platform accommodates both **official Polkadot bounties**—referred to here as *grants*—and user-generated tasks. By integrating with Polkadot wallets, Opentribe gives organizations (DAOs, parachain teams, official bounty programs) and community members the ability to post, fund, or respond to RFPs. Builders of all skill sets can discover real opportunities, submit proposals or work, and receive direct on-chain compensation. We aim to lower barriers, increase collaboration, and accelerate growth within the Polkadot and broader Web3 ecosystem.

**How this project integrates into Polkadot:**  
- **RFP Aggregation**: By pulling in official bounties (e.g., open-source, marketing, inkubator) and labeling them as grants, Opentribe offers a central location for discovering and discussing these tasks.  
- **Talent Matching and Rewards**: Through Polkadot wallet integration (e.g., polkadot.js), builders can propose solutions for RFPs or submit work for bounties, receiving direct on-chain payouts.  
- **Ecosystem Growth**: Listing both official bounties and user-created tasks in one place attracts diverse talent—developers, designers, community managers—thus boosting overall productivity in the Polkadot ecosystem.

**Why our team is interested in creating this project:**  
- We see a gap in accessible, user-friendly platforms that make it easy to discover and manage Polkadot-related tasks, including marketing, community-building, design, and other non-code roles.  
- By bridging official bounties with user-generated needs under one RFP framework, we can reduce friction in sourcing talent and coordinating projects.  
- We believe this approach will strengthen the Polkadot ecosystem by showcasing varied opportunities and making them more accessible.

### Distinguishing Official Grants vs. Private Bounties

A key distinction is that official Polkadot-funded opportunities (often referred to as “bounties” in the ecosystem) will be labeled **Grants** on Opentribe. Conversely, **private bounties** remain available for anyone—organizations or individuals—who wish to fund tasks outside of the official Polkadot treasury scope. Opentribe does **not** manage treasury funds; official grants integrated into the platform still originate from their own sources. Users can browse both official grants and privately funded bounties in a single interface.

---

## Project Details

Below is an overview of the technology stack, core components, and what we have planned.

### Technology Stack

- **Frontend**: Next.js 15, React, Tailwind CSS  
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL database  
- **Authentication**: NextAuth.js (supporting Google OAuth, email authentication, and wallet integration)  
- **Payment/Wallet Integration**: Polkadot-based wallet connections to handle bounty and grant disbursements

### Core Components & Architecture

1. **RFP Section**  
   - **Official Grants**: Listed RFPs from recognized Polkadot bounties (e.g., open-source, marketing, inkubator).  
   - **User-Generated RFPs**: Community members can propose new ideas or tasks. Other users can comment and upvote.  
   - **Conversion to Bounty**: If a user-generated RFP gains traction (and the creator opts in), it can be turned into a fully funded private bounty.

2. **Bounties**  
   - **Private Funding**: Open tasks (similar to freelance gigs) where multiple builders can submit work; reward goes to the best submission.  
   - **Integration with RFPs**: RFPs that are “activated” can convert into bounties with clearly defined reward structures.  
   - **Submission & Payout**: Builders upload their work, and upon acceptance, are paid via Polkadot wallets.

3. **Grants**  
   - **Official Bounties**: Represent tasks or milestones from Polkadot ecosystem funding sources.  
   - **Direct Application Flow**: Builders can propose ideas/RFPs to these official grants.  
   - **Organization Dashboard**: Allows official teams to manage submissions and track progress.

4. **Organization Dashboard**  
   - Post and manage RFPs, bounties, and grants in one place.  
   - Access applicant details, track submissions, and handle payouts.  

5. **Builder Profiles**  
   - Showcase verified skills and past work.  
   - Builders can apply for or propose solutions to RFPs, bounties, grants, and projects.

6. **(Future) Build Section**  
   - **Tools**: Repository of development tools and libraries for Polkadot/Substrate.  
   - **Learn**: Educational resources to onboard more developers and non-technical contributors into the ecosystem.

### Mockups/Designs

#### Opentribe - Explore Bounties
![Opentribe - Explore Bounties](https://i.imgur.com/xu8yfR1.png)

#### Opentribe - Connect Wallet
![Opentribe - Connect Wallet](https://i.imgur.com/yf2OYiS.png)

#### Opentribe - Bounty Details
![Opentribe - Bounty Details](https://i.imgur.com/WHJR1QF.jpeg)

We plan a clean, modern interface with responsive design for desktop and mobile. (Screens may be adapted to feature RFP listings more prominently.)

### Data Models / API Specifications

- **User**: Basic info, roles (builder, org, admin), connected wallets, verification status.  
- **RFP**: Title, description, type (official vs. user-generated), upvotes, comments, potential conversion to bounty.  
- **Bounty**: Title, description, reward details, references back to an RFP if applicable.  
- **Grant**: Represents official Polkadot bounty tasks (funding details, application process, deliverables).  
- **Project**: Short-term engagements, application details, assigned builder(s).  
- **Organization**: Profile info, posted RFPs/bounties/grants, verified status.  
- **Submission**: Work or proposal submitted by builders.  
- **Application**: Builder’s application for projects or grants.  
- **Skill**: Predefined skill sets that users can associate with their profiles.

### What the Project is *Not*

- **On-chain Governance Replacement**: We do not aim to replace Polkadot’s on-chain treasury or governance processes, but rather to complement them with a more direct, user-friendly layer.  
- **Strictly Code-Centric**: Opentribe is not limited to coding tasks; it includes roles for design, community, marketing, etc.  
- **Not a Treasury-Backed Platform**: While we integrate official Polkadot bounties into our interface, *Opentribe itself* is privately run and does not directly manage treasury funds.

---

## Ecosystem Fit

**Where and how does your project fit into the ecosystem?**  
Opentribe positions itself as the “talent layer” for Polkadot—a unified entry point where official Polkadot grants (open-source, marketing, inkubator, etc.) and private bounties can coexist. This complements existing solutions like Polkadot’s on-chain bounty pallet, while streamlining the discovery of tasks for both technical and non-technical contributors.

**Target Audience**  
- **Organizations/DAOs/Parachains** needing to post official bounties (as grants) or private bounties, or source short-term projects.  
- **Builders** (developers, designers, writers, marketers, educators) who want a single hub for official tasks and community-driven RFPs.

**Needs Met**  
- Centralized listing of official grants and user-generated tasks.  
- Easier navigation for builders to discover tasks suited to their skills.  
- Transparent, direct payouts via Polkadot wallets.

**How we identified these needs**  
- Conversations with Polkadot ecosystem contributors about the challenge of surfacing official bounties and bridging them with non-technical tasks.  
- Observing that multiple bounty platforms focus narrowly on code repos or require on-chain governance steps.  
- Realizing that combining official bounties with user-generated RFPs under one platform can drive ecosystem-wide collaboration.

**Similar Projects in Polkadot/Kusama**  
- **Kudos Portal**: Primarily code tasks, funded via Polkadot treasury. Opentribe expands beyond code by supporting diverse RFPs (marketing, design, community) and private funding.  
- **Polkadot Bounty Pallet**: Governance-based bounties. We aim to complement this by simplifying listing, discovery, and collaboration, without replacing treasury processes.

**Similar Projects in Other Ecosystems**  
- **Gitcoin (Ethereum)**: Large bounty and grants platform; however, Opentribe is Polkadot-first and does not introduce its own token.  
- **Superteam (Solana)**: Focused heavily on curated bounties and local communities. Opentribe will unify official grants and user tasks for Polkadot without requiring local chapters or tokens.

---

## Team

- **Team Name:** Opentribe  
- **Contact Name:** Nitesh Sharma (Team Leader)  
- **Contact Email:** [graphicsofdot@gmail.com](mailto:graphicsofdot@gmail.com)  
- **Website:** [dotgraphic.info](https://dotgraphic.info)

### Team Members

- **Nitesh Sharma**: [LinkedIn](https://www.linkedin.com/in/nit-sharma) — Experienced digital marketer and project manager, with prior contributions to Polkadot-related initiatives.  
- **Shikhar Singh**: [LinkedIn](https://bento.me/0xshikhar) — **Frontend Lead**. Experienced full stack engineer with strong crypto and frontend development skills.  
- **Mratyunjay Soni**: [LinkedIn](https://www.linkedin.com/in/manofcode/) — **Backend Lead**. Over 5 years of experience in backend technologies including Python, Node, and Go.

### Team Information

- **Twitter/X**: [@dotgraphic1](https://x.com/dotgraphic1)  
- **GitHub**: [github.com/dotgraphic1](https://github.com/dotgraphic1)

### Team's Experience

- Our team has experience building on React, Next.js, and integrating with Polkadot wallets and Substrate-based tools.  
- We also have a background in marketing and community-building within the Polkadot ecosystem.

---

## Development Status

Currently, the team has:
- Completed initial designs and wireframes for the core platform.  
- Established foundational backend schemas (User, Bounty, Org, etc.) and authentication flows.  
- Begun building a prototype for the bounties module using Next.js + Prisma.  

References & previous work:
- GitHub issues and internal planning docs in [dotgraphic1](https://github.com/dotgraphic1).  
- Ongoing discussions with ecosystem participants about best practices for verifying user submissions and awarding bounties.

---

## Development Roadmap

> **Note**: Polkadot Open Source Grants only accept projects up to 3 months of duration and up to 2 milestones. Our plan below fits within this constraint.

### Overview

- **Estimated Duration:** 3 months total  
- **Full-Time Equivalent (FTE):** 2 FTE (1 developer, 1 designer/developer hybrid)  
- **Total Costs:** 30,000 USD

Below is a breakdown of the two milestones:

### Milestone 1 (Months 1–3)

| Number | Deliverable                  | Specification                                                                                                                                                                                         |
| -----: | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.**| **License**                  | MIT License (we will ensure that all relevant code and documentation is licensed under MIT).                                                                                                          |
| **0b.**| **Documentation**           | We will provide inline documentation for all core functions and a “Getting Started” tutorial covering: <br />• How to post an RFP <br />• How to convert an RFP to a Bounty <br />• How to connect a Polkadot wallet. |
| **0c.**| **Testing & Testing Guide**  | We will include unit tests for core modules (User auth, Bounty creation, RFP flow, Submissions) and provide a guide on how to run them.                                                                     |
| **0d.**| **Docker**                   | A Dockerfile to run the Next.js app (frontend and backend) and PostgreSQL, enabling a straightforward local test environment.                                                                         |
| **0e.**| **Article**                  | Publish an article detailing the MVP launch and how Polkadot projects or official bounties can easily publish RFPs to attract talent.                                                                 |
| **1.** | **Core Platform**            | 1. **User Authentication** (email, OAuth, wallet-based) <br />2. **RFP Module**: Create, list, upvote, comment on RFPs <br />3. **Conversion to Bounty**: If an RFP is approved/funded <br />4. **Bounty Module**: Create, list, filter private bounties <br />5. **Grants Module**: Integrate official Polkadot bounties as “grants” <br />6. **Org Dashboard**: Manage RFPs, bounties, and submissions <br />7. **Payment Integration**: Polkadot wallet payout testing <br />8. **Frontend**: Responsive UI, basic theming <br />9. **Initial Deployment**: Deployed for beta testing (Netlify or similar) |

**Expected Outcome for Milestone 1**  
A functional MVP where:
- Organizations can create RFPs or bounties, and post official grants.  
- Builders can propose solutions, upvote/comment on user RFPs, or convert them into bounties.  
- Basic verification (email, social) is integrated, along with on-chain wallet connections for test payouts.

### Milestone 2 (Future Enhancements — *Still within 3 months if possible*)

| Number | Deliverable         | Specification                                                                                                  |
| -----: | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| **2.** | **Extended Features** | 1. **Projects Module**: Short-term engagements with application and selection flow <br />2. **Search & Filter Enhancements**: Advanced filtering for RFPs, bounties, and grants <br />3. **Notifications**: Email/web notifications for application status updates <br />4. **Refined UI/UX** based on feedback <br />5. **Reputation System Prep**: Start implementing basic rating or endorsement features |

**Expected Outcome for Milestone 2**  
A more comprehensive platform that supports a variety of Polkadot-focused tasks (RFPs, bounties, grants, projects), along with improved user experience and community participation features.

---

## Budget Breakdown

Below is a simplified breakdown for Milestone 1 (the primary scope for this grant).

| Category    | Item                 | Total Cost | Price (USD) | Description                                                                         |
|-------------|----------------------|-----------:|------------:|-------------------------------------------------------------------------------------|
| Personnel   | Frontend Dev         | $18,000    | $60/hour    | Responsive UI, integration with backend APIs, component library                     |
| Personnel   | Backend Dev          | $12,000    | $60/hour    | Auth, DB schema, RFP/Bounty logic, wallet integration, and conversions              |

**Total Requested Grant:** **\$30,000**

---

## Future Plans

- **Reputation System**: Builders gain endorsements and on-chain verifiable credentials for completed tasks.  
- **Mobile Application**: A mobile-friendly version of the platform for easy RFP browsing and bounty submissions on-the-go.  
- **Expanded Education**: Tutorials, resources, and an integrated “Learn” section to onboard more developers and non-technical contributors.  
- **Deeper Wallet Integration**: Beyond basic sign-in, we plan to store partial user reputation or credentials on-chain, enabling trustless verification.  
- **Partnerships**: Ongoing discussions with major parachains, DAOs, and Polkadot projects to list their official bounties and user RFPs.

Long-term, we intend to finance the project through:
- **Platform Fees**: A small fee on each bounty or grant to sustain infrastructure.  
- **Partnerships/Sponsorships**: Collaborating with parachains and official programs to highlight tasks.  
- **Community Support**: Potentially introducing optional membership or token-based models for advanced features, once the platform is established.

---

## Additional Information

- **Work Already Done**: Initial designs and user flows, plus a prototype of the bounties module.  
- **Other Contributions**: No external funding to date; self-funded by the team.  
- **Other Funding**: We have not applied for additional funding beyond this request for Milestone 1.  
- **References**: Inspiration drawn from Gitcoin, Superteam, the Polkadot Bounty Pallet, and various bounty boards in other ecosystems.

If you have any questions or need additional details, feel free to reach out via [graphicsofdot@gmail.com](mailto:graphicsofdot@gmail.com).
