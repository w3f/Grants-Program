# Opentribe: The Talent Layer of Polkadot

## Project Overview

**Tagline (one-sentence summary):**  
Opentribe is building the Talent Layer of Polkadot—an all-in-one platform for bounties, grants, projects, and jobs, designed to empower builders in the Polkadot ecosystem.

**Brief description of the project:**  
Opentribe provides a streamlined interface for organizations (DAOs, parachain teams, and more) to post and manage various opportunities—bounties, grants, projects, and (in the future) jobs—while enabling builders to find and apply for work that suits their skills. We aim to lower barriers, increase collaboration, and accelerate growth within the Polkadot and broader Web3 ecosystem.

**How this project integrates into Polkadot:**  
- **Talent Matching and Rewards**: By integrating with Polkadot wallets (for example, via polkadot.js or similar), Opentribe allows projects and DAOs in the Polkadot ecosystem to post opportunities and reward contributors directly on-chain.  
- **Grants and Bounties**: Polkadot ecosystem organizations can create and manage their own grants, accelerating development without requiring lengthy on-chain governance steps.  
- **Ecosystem Growth**: Opentribe helps attract diverse talent—developers, designers, community managers—thus enhancing overall productivity and innovation within Polkadot.

**Why our team is interested in creating this project:**  
- We see a gap in accessible, user-friendly platforms tailored to the Polkadot ecosystem, especially for tasks beyond coding (e.g., marketing, community, design).  
- We want to help builders and organizations collaborate more efficiently, reducing friction and fostering a community-driven approach to development on Polkadot.  
- Our team believes that bridging diverse skill sets under one platform can significantly boost Polkadot's competitiveness in the wider Web3 landscape.

An important distinction between Opentribe and existing bounty mechanisms, like the [Polkadot Bounty Pallet](https://crates.io/crates/pallet-bounties/38.0.0) is **how tasks are funded**. All bounties, grants, and projects on Opentribe are privately funded by **the organization or individual who creates them**. Opentribe does not use or interact with the Polkadot treasury. This means:

- **No Treasury Proposals Required**: Organizations can post and pay out bounties directly without going through Polkadot governance.
- **Fully Independent Funding**: Each bounty or project is paid for by the entity that created it, rather than relying on or requesting treasury funds.
- **Wider Range of Opportunities**: Because tasks are privately funded, they can include both technical and non-technical work, extending beyond official Polkadot initiatives.

---

## Project Details

Below is an overview of the technology stack, core components, and what we have planned.

### Technology Stack

- **Frontend**: Next.js 15, React, Tailwind CSS  
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL database  
- **Authentication**: NextAuth.js (supporting Google OAuth, email authentication, and wallet integration)  
- **Payment/Wallet Integration**: Polkadot-based wallet connections to handle bounty payouts and grant disbursements

### Core Components & Architecture

1. **Earn Section**  
   - **Bounties**: Open tasks (similar to freelance gigs) where multiple builders can submit work; reward goes to the best submission.  
   - **Projects**: Short-term engagements where organizations select the best candidate from a pool of applicants.  
   - **Grants**: One-time payments for completing a specific task or milestone proposed by an organization.  
   - **Jobs (Future Development)**: Full-time or part-time roles within the Polkadot ecosystem.

2. **Organization Dashboard**  
   - Post and manage bounties, projects, grants.  
   - Access applicant details, track submissions, and handle payouts.

3. **Builder Profiles**  
   - Showcase verified skills and past work.  
   - Builders apply for bounties, projects, and grants.

4. **(Future) Build Section**  
   - **Tools**: Repository of development tools and libraries for Polkadot/Substrate.  
   - **Learn**: Educational resources to onboard more developers and non-technical contributors into the ecosystem.

### Mockups/Designs

## Designs

### Opentribe - Explore Bounties
![Opentribe - Explore Bounties](https://i.imgur.com/xu8yfR1.png)

### Opentribe - Connect Wallet
![Opentribe - Connect Wallet](https://i.imgur.com/yf2OYiS.png)

### Opentribe - Bounty Details
![Opentribe - Bounty Details](https://i.imgur.com/WHJR1QF.jpeg)

We plan a clean, modern interface with responsive design for desktop and mobile.

### Data Models / API Specifications

- **User**: Basic user info, roles (builder, org, admin), connected wallets, verification status.  
- **Bounty**: Title, description, requirements, reward details, status, references to submissions.  
- **Project**: Title, scope, application details, assigned builder, deliverables.  
- **Grant**: Requirements, total funding amount, application process, selection criteria.  
- **Job**: (Planned) Similar to Project but with permanent or ongoing roles.  
- **Organization**: Profile info, posted opportunities, verified status.  
- **Submission**: Work submitted by builders for bounties or grants.  
- **Application**: Builder’s application for projects, grants, or jobs.  
- **Skill**: Predefined skill sets that builders can attach to their profiles.

### What the Project is *Not*

- **On-chain Governance Replacement**: We do not aim to replace Polkadot’s on-chain treasury or governance processes, but rather to complement them with a more direct and user-friendly layer.  
- **Strictly Code-Centric**: Opentribe is not limited to coding tasks; it includes roles for design, community, marketing, etc.
- **Not a Treasury-Backed Platform**: Opentribe does not tap into the Polkadot treasury for funding any bounties; all tasks are funded by the person or organization posting them.

---

## Ecosystem Fit

**Where and how does your project fit into the ecosystem?**  
Opentribe positions itself as the “talent layer” for Polkadot—providing a single entry point for anyone interested in contributing to Polkadot-based projects. This complements existing solutions like Polkadot’s on-chain bounty pallet, while expanding use cases (e.g., non-technical tasks).

**Target Audience**  
- **Organizations/DAOs/Parachains** needing to post bounties, grants, or find full-time hires.  
- **Builders** (developers, designers, writers, marketers, educators) looking for Polkadot-related opportunities.  

**Needs Met**  
- Streamlined posting and management of tasks, removing friction for organizations.  
- Transparent, direct payouts via Polkadot wallets.  
- Showcasing real-world proof-of-work for builders, encouraging more diverse skill sets in the ecosystem.

**How we identified these needs**  
- Conversations with Polkadot ecosystem contributors and teams who struggled to find specialized talent.  
- Observing the success (and limitations) of existing bounty boards and noticing a gap for broader roles.  
- Research on typical tasks in Web3 communities beyond pure development (community building, educational content, design, etc.).

**Similar Projects in Polkadot/Kusama**  
- **Kudos Portal**: Focuses on code tasks and is funded via Polkadot treasury. Opentribe opens opportunity creation to any org or individual, beyond code tasks.  
- **Polkadot Bounty Pallet**: Involves on-chain governance proposals for bounties. Opentribe streamlines the process so that not all tasks need to go through formal governance.

**Similar Projects in Other Ecosystems**  
- Platforms like Gitcoin in Ethereum. However, we specifically tailor our user flow to Polkadot’s ecosystem.
- Superteam in the Solana ecosystem
---

## Team

- **Team Name:** Opentribe  
- **Contact Name:** Nitesh Sharma(Team Leader)  
- **Contact Email:** graphicsofdot@gmail.com  
- **Website:** [dotgraphic.info](https://dotgraphic.info)

### Team Members

- **Nitesh Sharma**: [Linkedin](https://www.linkedin.com/in/nit-sharma) - Experienced digital marketer and project manager, with prior contributions to Polkadot-related initiatives.
- **Shikhar Singh**: [Linkedin](https://www.linkedin.com/in/nit-sharma) - **Frontend Lead** - Experienced full stack engineer with strong crypto and frontend development skills.
- **Mratyunjay Soni**: [Linkedin](https://www.linkedin.com/in/manofcode/) -  Backend Lead - Over 5 years of experience in backend technologies including Python, Node and Go.

### Team Information

#### Twitter/X

- [https://x.com/dotgraphic1](https://x.com/dotgraphic1)

#### Team Github Repo

- [https://github.com/dotgraphic1](https://github.com/dotgraphic1)

### Team's Experience

- Our team has experience building on React, Next.js, and integrating with Polkadot wallets and Substrate-based tools.
---

## Development Status

Currently, the team has:
- Completed initial designs and wireframes for the core platform.  
- Established the foundational backend schemas (User, Bounty, Org, etc.) and authentication flows.  
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

---

### Milestone 1 (Months 1–3)

| Number | Deliverable                  | Specification                                                                                                                                                                                         |
| -----: | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.**| **License**                  | MIT License (we will ensure that all relevant code and documentation is licensed under MIT).                                                                                                          |
| **0b.**| **Documentation**           | We will provide inline documentation for all core functions and a “Getting Started” tutorial covering: <br />• How to post a Bounty <br />• How to apply for a Bounty <br />• How to connect a Polkadot wallet. |
| **0c.**| **Testing & Testing Guide**  | We will include unit tests for core modules (User auth, Bounty creation, Submission flow) and provide a guide on how to run them.                                                                     |
| **0d.**| **Docker**                   | A Dockerfile to run the Next.js app (frontend and backend) and PostgreSQL, enabling a straightforward local test environment.                                                                         |
| **0e.**| **Article**                  | Publish an article detailing the MVP launch and how Polkadot projects can easily create bounties to attract talent.                                                                                   |
| **1.** | **Core Platform**            | 1. **User Authentication** (email, OAuth, wallet-based) <br />2. **Builder & Org Profiles** <br />3. **Bounties Module**: Create, list, filter bounties <br />4. **Org Dashboard**: Manage bounties & submissions <br />5. **Grants Module** (listing existing grants & basic application flow) <br />6. **Payment Integration**: Polkadot wallet payout testing <br />7. **Frontend**: Responsive UI, basic theming <br />8. **Initial Deployment**: Deployed for beta testing (Netlify or similar) |

**Expected Outcome for Milestone 1**  
A functional MVP where organizations can create bounties or grants, and builders can apply. Basic verification (email, social) is integrated, along with on-chain wallet connections for test payouts.

---

### Milestone 2 (Future Enhancements — *Still within 3 months if possible*)

> While the focus of the grant is on Milestone 1 to deliver a working MVP, we propose a second, optional milestone within the same 3-month window to add extended features if time/funds permit.

| Number | Deliverable         | Specification                                                                                                                |
| -----: | ------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **2.** | **Extended Features** | 1. **Projects Module**: Short-term engagements with application and selection flow <br />2. **Jobs Module**: Full/part-time listing support <br />3. **Search & Filter Enhancements**: Advanced filtering across all modules <br />4. **Notifications**: Email/web notifications for application status updates <br />5. **Refined UI/UX** based on feedback  |

**Expected Outcome for Milestone 2**  
A more comprehensive platform that, beyond bounties and grants, supports project-based and job-based engagements, plus improved user experience features (search, notifications, etc.).

---

## Budget Breakdown

Below is a simplified breakdown for Milestone 1 (the primary scope for this grant).  

| Category    | Item              | Total Cost | Price (USD) | Description                                                     |
|-------------|-------------------|---------------|------------:|-----------------------------------------------------------------|
| Personnel   | Frontend Dev      | $60/hour      | $18,000     | Responsive UI, integration with backend APIs, component library |
| Personnel   | Backend Dev       | $60/hour      | $12,000     | Auth, DB schema, CRUD endpoints, wallet integration            |                                                               |

**Total Requested Grant:** 30,000 USD

---

## Future Plans

- **Reputation System**: Builders gain endorsements and “on-chain verifiable credentials” for completed tasks.  
- **Mobile Application**: A mobile-friendly version of the platform for easy bounties and application management on-the-go.  
- **Expanded Education**: Tutorials, resources, and an integrated “Learn” section for Substrate/Polkadot.  
- **Deeper Wallet Integration**: Beyond basic sign-in, we plan to store partial user reputation or credentials on-chain, enabling trustless verification.  
- **Partnerships**: We will actively seek out collaborations with major parachains, DAOs, and Polkadot projects to list their opportunities and drive adoption.

Long-term, we intend to finance the project through a combination of:
- **Platform Fees**: A small fee on bounties or grants to sustain infrastructure.  
- **Partnerships/Sponsorships**: Collaborating with parachains or projects that want to highlight their tasks.  
- **Community Support**: Potentially explore partial token-based or membership-based models for advanced features, once the platform is established.

---

## Additional Information

- **Work Already Done**: Initial designs and user flows.
- **Other Contributions**: No external funding at the moment; self-funded by the team.  
- **Other Funding**: We have not applied for additional funding beyond this request for Milestone 1.  
- **References**: Inspiration drawn from Gitcoin, Superteam, Polkadot Bounty Pallet, and various bounty boards in other ecosystems.

If you have any questions or need additional details, feel free to reach out via [graphicsofdot@gmail.com](mailto:graphicsofdot@gmail.com).
