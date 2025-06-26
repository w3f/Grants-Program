## Automated Grant Progress Monitoring & Risk Detection for Web3 Foundation
 
 **Team Name:** Build Union 
- **Payment Details:**
  - **DOT**: 1XYfhcszyy6jiHYvkBqPxUXq6YADRUaUkcZ8vopqNTiqjBv
  - **USDC** 0x53785b7155d016ba9c64fc2117d0eac0b21c9869 
- **[Level] **1


## Problem
The Web3 Foundation Grants Program oversees hundreds of innovative projects within the Polkadot ecosystem, driving its growth and development. However, tracking the progress of these grants remains challenging, as updates are often scattered across GitHub repositories, pull requests, and issues, making it difficult to evaluate milestone completion, detect delays, or assess overall project health. This fragmentation increases the workload for reviewers who must spend hours manually cross-referencing GitHub activity across multiple repositories, correlating commits to milestone deliverables, and identifying stalled projects. There are risks of overlooking early indicators of project stagnation. Without an automated tracking system, the Web3 Foundation faces significant challenges in maximizing the impact and success of its grant funding.

##  Proposed Solution
WatchDog is a lightweight, GitHub-integrated, web-based monitoring platform that aggregates W3F grant progress and activities into a real-time, user-friendly dashboard. It automates milestone tracking, visualizes project activity, and flags risks (e.g., inactivity or delays) using basic ML. Designed to complement W3F’s existing workflows, WatchDog reduces reviewer workload, enhances grantee accountability, and provides the community with transparent insights into funded projects, along with enhancements, like on-chain milestone attestations, to further strengthen trust.

## Features

### Core Administrative Features

- **Search & Filter Tools**  
  Allow admins and the community to explore grants by category, status, technology stack, and development stage.

- **Project Activity & Updates**  
  Real-time updates on significant milestones and deliverables with automated GitHub integration, allowing grantees to add context to project updates and share relevant resources.

 - **Verifiable records** Milestone attestations are hashed and anchored on-chain, creating immutable and verifiable records using a Substrate pallet.
   
- **Administrative Dashboard**  
  Comprehensive overview combining high-level statistics on active grants, completion rates, and ecosystem health for administrative evaluation.

- **Risk Detection & Analytics**  
  ML algorithms to identify early signs of delays and inactivity (e.g., no commits in X days), with risk flags, comparative analysis, and workflow optimization.

- **Auto Review Feedback**  
An automated review feature provides initial feedback to applicants, identifying missing details or inconsistencies in submitted proposals before manual review.

### Community & Transparency Features

- **Public Transparency Hub**  
  Community-facing dashboards with project discovery tools, progress visibility, and engagement opportunities for public access.

- **Automated Reporting**  
  Monthly transparency reports are generated automatically from dashboard data, highlighting ecosystem trends, successful projects, and areas needing attention.

### Strategic & Knowledge Management

- **Community Knowledge Hub**  
  A comprehensive system for capturing, showcasing, and sharing successful projects, case studies, best practices, and replicable patterns across the ecosystem for learning and improvement.

- **Redundancy Prevention**  
  Cross-reference new applications against existing projects to identify potential overlaps and suggest collaboration opportunities before funding decisions.

- **Impact Tracking**  
  To inform future funding strategies.

- **Strategic Alignment Tools** Help potential applicants understand ecosystem priorities and contribute to filling identified gaps, increasing proposal quality, and ecosystem coherence.

**On-Chain Milestone Attestations**
 Milestone submissions are hashed and anchored on-chain using a lightweight Substrate pallet, creating an immutable and queryable audit log
 
## Impact

WatchDog streamlines grant oversight by reducing administrative burden and enabling real-time milestone tracking. By embedding automation, verification, and alerting into the grant lifecycle, it allows the Web3 Foundation to proactively mitigate risks and increase funding accountability with minimal overhead. WatchDog ensures that grant funding translates into progress. It enhances reviewer efficiency, making sure grantees are on track.
## Ecosystem Fit

WatchDog enhances, not replaces, the W3F GitHub-based grant workflow. It enhances and adds a monitoring layer on top of public activity to aid:

- **W3F Grant Reviewers:** Evaluate progress in seconds via real-time dashboards.  
- **Grantees:** Share transparent progress without additional reporting overhead.
- **Community Members:** Access visible signals of grant health and activity.

## Team 👥

**Build Union** – Aggregate Team of Web3 Builders

Build Union is a collaborative collective of talented developers, designers, strategists, and innovators dedicated to shaping the future of the decentralized web. As an aggregate team of Web3 builders, Build Union brings together diverse expertise to create cutting-edge blockchain applications, DAOs services, and other decentralized solutions. We are focused on fostering innovation and accelerating the adoption of Web3 technologies

### Emmanuel — Project Lead

- Project manager and blockchain architect with deep experience in DAO tooling and transparency infrastructure.
- Combines hands-on engineering with leadership in dApp development and open governance tooling.
- LinkedIn: [emmanueleclipsewebsite](linkedin.com/in/emmanueleclipsewebsite/)

### Machine Learning & Data Engineering

**Golden K. — ML Developer**

- Python-based ML pipelines, anomaly detection, data analysis (pandas, numpy, SVM, Torch)
- GitHub: [golden-k22](https://github.com/golden-k22)

**Eliud Munyala — Senior Data Engineer & ML Specialist**

- Leads data engineering at SpaceAI.
- Specializes in data ingestion, transformation, and validation.
- GitHub: [meaLuda](https://github.com/meaLuda)
- LinkedIn: [eliud-munyala](https://linkedin.com/in/eliud-munyala)

### UI/UX Design

**Marko — UI/UX Designer**

- Designed 1,000+ websites and data dashboards.
- Leads UX design for WatchDog.
- Portfolio: [hipfolio.co](https://hipfolio.co)
- Dashboards: [hipfolio.co/dashboard.html](https://hipfolio.co/dashboard.html)

### Full-Stack & Smart Contract Development

**Awais Nazir — Full-Stack Developer (dApps)**

- Specializes in Smart Contracts, React, Next.js, Node.js.
- LinkedIn: [awais-nazir-ch](https://linkedin.com/in/awais-nazir-ch)

**WayToTheVenus — Smart Contract Developer**

- Modular, audit-ready smart contracts.
- GitHub: [waytothevenus](https://github.com/waytothevenus)

**CryptoStar7 — Blockchain & Full-Stack Developer**

- Backend blockchain logic and frontend application layers.
- Smart contract architecture and full-stack web3 tooling.

## Contact

Contact Name:** Emmanuel O
Contact Email:** Virtualsrikignly@gmail.com
linkedin.com/in/emmanueleclipsewebsite/

## Legal Structure

Post-grant approval

## Team Code Repos

- Development Status 📖
  The frontend structure is now complete. The first milestone's delivery is to have an experienced UI/UX designer redesign the interface based on DAO input and community feedback. All technical and architectural planning has been finalized, and we continue to consult with more DAO delegates to align on reporting standards.
  Live demo: https://watchdog2.vercel.app/

## Overview

- **Total Estimated Duration:** 2 months
- **Full-Time Equivalent (FTE):** 2
- **Total Costs:** 10,000 USD
- **DOT %:** 50%

---

## Milestone 1 — Frontend Dashboard MVP

- **Estimated Duration:** 2 Weeks
- **FTE:** 1
- **Costs:** 3,000 USD

| Number  | Deliverable               | Specification                                                                                                      |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                   | MIT license                                                                                                        |
| **0b.** | Documentation             | Inline code comments and README describing setup and usage of the dashboard UI components with mock data           |
| **0c.** | Testing and Testing Guide | Unit tests for UI components; testing instructions included in README                                              |
| **0d.** | Docker                    | Dockerfile to run frontend locally for testing and demonstration                                                   |
| 1       | UI/UX Design              | Wireframes and high-fidelity designs for dashboard, milestone cards, and activity charts                           |
| 2       | Dashboard Implementation  | Responsive React/Next.js frontend with Tailwind CSS, visual components for milestone progress, alerts, and filters |
| 3       | Mock Data Integration     | JSON-based dummy data simulating backend API responses to test dashboard functionality                             |
| 4       | Deployment                | Deploy on Vercel with CI/CD, publicly accessible demo URL                                                          |

---

## Milestone 2 — Backend & GitHub Sync

- **Estimated Duration:** 1.2 month
- **FTE:** 2
- **Costs:** 7,000 USD

| Number  | Deliverable                  | Specification                                                                                                  |
| ------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                      | MIT license                                                                                                    |
| **0b.** | Documentation                | Inline code comments, API documentation, setup guide for GitHub data sync pipeline                             |
| **0c.** | Testing and Testing Guide    | Unit and integration tests for data ingestion, normalization, and API endpoints; testing instructions included |
| **0d.** | Docker                       | Dockerfile for backend service and data sync pipeline                                                          |
| 1       | GitHub API Integration       | Connect and authenticate with GitHub API; fetch commits, PRs, and issues for relevant repos                    |
| 2       | Data Normalization & Mapping | Normalize GitHub data and map to project milestones with basic risk flags                                      |
| 3       | Database Setup               | PostgreSQL schema design and implementation for projects, milestones, activities, and flags                    |
| 4       | Continuous Sync Pipeline     | Scheduled data sync every 6–12 hours with error handling and logging                                           |
| 5       | API Development              | REST or GraphQL API exposing project data, milestone progress, activity logs, and risk flags                   |

### MVP Pages

**Project list & Recent updates page**
![image](https://github.com/user-attachments/assets/1aac1b30-5fc4-4d1f-a84e-32e223ea4493)


**Project details page** Indepth detials on grant
 ![image](https://github.com/user-attachments/assets/0c161026-077a-4d27-8508-d83996d85090) 

 **Grant Control Page**

 ![image](https://github.com/user-attachments/assets/0dc2f168-4783-4362-a848-144c59571a16)

### Post MVP Pages


**Admin Organizational Grant Details**
 ![image](https://github.com/user-attachments/assets/69ffe990-a011-41b6-b54f-42daabcc40f2)

**Admin Vote**
![image](https://github.com/user-attachments/assets/1d857304-9445-49e1-a7fc-45808e4921c5)

**Ai Grant Review** Provide preliminary feedback for applicants regarding missing details and fit in proposals
![image](https://github.com/user-attachments/assets/f5e5be04-4a78-445c-98f3-e616f1e1ca3d)


## Future

### Sustainability & Monetization
While initial funding from the Polkadot Treasury is required to bootstrap development, the long-term vision includes a hybrid, self-sustaining model through the following revenue strategies:

**Ecosystem/ParaChain Audit Subscriptions**
Partner with Parachains organizations to subsidize audit tooling and monitoring services. Small monthly or quarterly fees will give grantees access to advanced oversight features.

**Tiered API Access**
Offer real-time, verified milestone and treasury data via subscription-based APIs. Pricing tiers will reflect data freshness, query volume, and customization needs (e.g., for analytics firms, dApps, or researchers).

**Premium Analytics Dashboards**
Provide enhanced dashboards for large grantees, foundations, or institutional partners, featuring historical analysis, filtering, and benchmarking across grants.

**Sponsored Integrations**
Collaborate with ecosystem tools and infrastructure projects to integrate WatchDog data, supported by licensing or sponsorship agreements.

## Conclusion
WatchDog introduces a structured, intelligent accountability framework for the Polkadot Treasury and OpenGov. By transforming fragmented and inconsistent grant data into real-time, verifiable insights, it strengthens trust, reduces inefficiencies, and helps ensure the long-term effectiveness of Polkadot’s public funding mechanisms.

WatchDog brings clarity and efficiency to the Web3 Foundation grant oversight process. By transforming fragmented GitHub activity into meaningful, actionable insights, it delivers transparent oversight with minimal effort, reduces inefficiencies and maximum trust for both reviewers and the community. As a comprehensive monitoring solution, WatchDog will directly enhance the effectiveness and success of the W3F Grants Program for easier scaling.
