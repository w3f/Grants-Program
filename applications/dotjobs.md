# DOTJOBS

- **Team Name:** Dotjobs
- **Payment Address:** 1292Uph4BwS9zcpoAextrGYJXFSC8NDuYnB5zqE87Er9y4AU
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

### Overview

DotJobs is an open-source job and talent platform built for the Polkadot and Kusama ecosystem.
Our mission is simple: to connect projects, teams, and initiatives across the ecosystem with the right talent, while amplifying careers, opportunities, and the future of work in Web3.
We believe the future of work is decentralized, collaborative, and borderless(Dotjobs serves as the web3 version of indeed and upwork combined)
DotJobs is more than a job board,  it is a career hub for the Polkadot and Kusama ecosystem, unifying opportunities and talent under one open platform.


### Project Details
<img width="2657" height="1079" alt="dotjobs logo_white" src="https://github.com/user-attachments/assets/021eeb37-eefd-4f59-b0fd-31da13b91427" />

##### Key Features

Ecosystem-Wide Opportunities:
DotJobs aggregates and showcases roles from Rollups, DAOs, projects, and ecosystem teams, connecting talent with meaningful opportunities across Polkadot and Kusama. Dotjobs also aims to eliminate google forms as means of application for ambassador programs and other Ecosystem related applications, serving as an in house application medium.

On-Chain Identity:
Users verify their identity through Polkadot Identity and Polkassembly, with their verification status displayed directly on their DotJobs profile.
Only on-chain verified users can post jobs, ensuring trust and authenticity across the platform.

Awareness & Education:
DotJobs also drives awareness through:
- Educational campaigns
- AMAs with founders
- Initiatives highlighting career growth in Web3


#### Platform Overview and Navigation

DotJobs is built for seamless navigation, designed for both Web3 natives and non-Web3 users.

##### Home Page
<img width="944" height="428" alt="Screenshot 2025-10-15 123210" src="https://github.com/user-attachments/assets/5834f1a9-903b-4f93-a4ff-0505fdd7c066" />
<img width="951" height="431" alt="Screenshot 2025-12-29 103532" src="https://github.com/user-attachments/assets/d7bb222d-d9e2-4028-ad10-38d8c8b0d4da" />

The Home Page serves as the platform’s central hub and includes:
- Find Jobs: Browse all open roles and gigs.
- My Jobs: Manage job listings or hiring posts.
- My Applications: Track submitted applications.
- Find Talents: Discover and hire verified professionals.
- On-Chain Identity: Verify using Polkadot Identity or Polkassembly.
- Sign Up / Sign In: Access your personalized account.

Additional elements:
- Ad banner for announcements or sponsored listings.
- Search bar to find jobs, companies, or users.
- Browse by Category leading to specialized job sections.
- Footer with links to:
- About Us
- Terms of Use
- Support
- Roadmap
- Privacy Policy
- FAQ
- Social and community handles



##### Sign Up and Sign In
<img width="527" height="377" alt="Screenshot 2025-12-29 104920" src="https://github.com/user-attachments/assets/7b9ef58c-00c0-4c54-b261-a4005740dd12" />
<img width="542" height="380" alt="Screenshot 2025-12-29 104731" src="https://github.com/user-attachments/assets/716800ee-22af-4a04-8c83-4d21f217d0b7" />

The authentication flow supports multiple entry options:
- Email and password
- Google sign-in
- X (Twitter) sign-in


After registration, a user profile is automatically created.
Users can connect their Polkadot wallet and verify their on-chain identity via Polkassembly or Polka Identity.
Verified users receive a verified badge and gain the ability to post jobs.

##### User Profile
<img width="930" height="362" alt="Screenshot 2025-12-29 104203" src="https://github.com/user-attachments/assets/c9b7ad48-1da6-4d87-b0b0-a4305d629bba" />

The profile icon at the top-right corner gives quick access to:
- Edit profile information
- Update experience, skills, and contact info
- View verification status

##### Job Posting
<img width="946" height="428" alt="Screenshot 2025-12-29 105740" src="https://github.com/user-attachments/assets/bb919206-a890-434f-bcf3-09fa2179d8a1" />

A “Post Job” button (highlighted in red) appears at the top of the interface.
Requirements:
- On-chain verification
- Fill in job title, description, requirements, budget, and duration
- Submit listing for publication

##### Finding and Applying for Jobs
<img width="956" height="430" alt="Screenshot 2025-12-29 105927" src="https://github.com/user-attachments/assets/4a9c5fd0-58b7-40ac-a363-a4f75c6a79a4" />

Users can explore jobs by visiting the Find Jobs tab.
From there:
- Use filters or search by keywords
- Browse by categories
- View detailed listings
- Apply by submitting the provided form and attaching a resume or portfolio

##### Accessibility
DotJobs supports Light Mode and Dark Mode for user preference and comfort.

The UI was designed using Figma. Here is link - [Dotjobs UI](https://www.figma.com/design/EwbbRLAqZOOc8Evgo9v6Xe/Dotjob?node-id=0-1&p=f)

##### Technology Stack

- Frontend: React/Nextjs
- Backend: Node.js with TypeScript to handle core logic, API integrations, and cross-chain messaging.
- Database: MongoDB to store user transaction history and application metadata.
- Blockchain Integration: Polkadot.js API to enable wallet connections

NOTE: Dotjobs is not a public good platform, which means that there is a revenue model inline with our roadmap.


### Ecosystem Fit

DotJobs is a talent and opportunity hub for the Polkadot and Kusama ecosystem.
Talent is a critical but often fragmented layer of any decentralized ecosystem. DotJobs fits into Polkadot by aggregating and showcasing roles from rollups, DAOs, parachains, and ecosystem teams, making opportunities more discoverable and accessible to both existing and new contributors.

By acting as a shared talent layer, DotJobs:
- Reduces fragmentation in hiring across the ecosystem
- Improves visibility for ecosystem projects seeking contributors
- Serves as an onboarding gateway for new developers, creators, and non-technical contributors entering Polkadot
- DotJobs complements the technical infrastructure of Polkadot by strengthening the human coordination layer required for long-term ecosystem sustainability.

##### Target audience

DotJobs serves two primary audiences:
- Demand side (employers): Parachain and rollup teams, DAOs and ecosystem organizations, Polkadot-based startups and open-source projects
- Supply side (talent): Developers (Substrate, Rust, Solidity, frontend, DevOps), Designers, writers, community managers, researchers, Creators and non-technical contributors exploring Web3 careers

A secondary audience includes new users seeking an entry point into the Polkadot ecosystem through meaningful work opportunities.

##### Needs that Dotjobs meet

DotJobs addresses several ecosystem-wide needs:

- Fragmented hiring channels: Job opportunities are currently scattered across Discords, forums, Twitter, and private communities, making discovery inefficient for both teams and talent.
- Poor onboarding for new contributors: Many interested developers and creators struggle to find credible, ecosystem-aligned opportunities to begin contributing.
- Low visibility for ecosystem projects: Smaller teams and DAOs often lack reach when hiring, especially outside their immediate networks.
- Lack of talent amplification: Most job boards focus only on listings. DotJobs also focuses on talent visibility, education, and long-term career growth within the ecosystem.
- Trust and authenticity issues: DotJobs integrates on-chain identity and verification to ensure that only legitimate ecosystem actors can post roles, increasing trust for applicants.


##### How these needs were identified

These needs were identified through:
- Direct observation of Polkadot hiring practices across forums, Discords, and social media
- Community feedback from developers and contributors seeking structured opportunities
- Discussions and signals from ecosystem forums highlighting onboarding and talent retention challenges

We also published a dedicated Polkadot forum post outlining these challenges and validating the demand for a unified talent hub:Linik [here](https://forum.polkadot.network/t/the-current-state-of-jobs-in-the-polkadot-ecosystem-introducing-dotjobs/15540?u=vicdan)

Additionally, early platform traction (registered users, active job postings, and applications within the first month) provides raw data validating market demand.
Below is a visual display of that:
<img width="765" height="169" alt="Screenshot 2025-12-27 181531" src="https://github.com/user-attachments/assets/a47f95f8-4f9b-4339-b8dc-e3ba67753134" />

Also, below is a view of the find talent page already showcasing talents, their skills and geographic locations

<img width="950" height="437" alt="Screenshot 2025-12-30 094407" src="https://github.com/user-attachments/assets/7a1de7fb-4690-49da-b4ae-32d24e5e6d5c" />


##### Similar projects in the Polkadot / Substrate / Kusama ecosystem

The closest comparable initiative is the Polkadot Job Board (affiliated with Getro).

How DotJobs is different

While existing job boards primarily focus on listing open roles, DotJobs is designed as a two-sided ecosystem hub:
- Job + Talent focus: DotJobs amplifies both opportunities and contributors, not just vacancies
- Ecosystem-only focus: Built exclusively for Polkadot and Kusama, avoiding dilution from multi-chain listings
- Education & onboarding: DotJobs goes beyond hiring by offering learning pathways, awareness content, and guidance for new ecosystem entrants
- On-chain identity integration: Verified job posters using Polkadot identity mechanisms improve trust and reduce spam
- Long-term ecosystem alignment: Designed as open-source public infrastructure rather than a generic recruitment tool

This broader scope positions DotJobs as a talent coordination layer, not a simple job aggregator.

## Team :busts_in_silhouette:

> [!IMPORTANT]
> Please note that the data provided in this section is for administrative and informational purposes only. All beneficiaries of a grant must also be listed in the KYC/KYB process during the application phase. See our [FAQ](https://grants.web3.foundation/docs/faq#what-is-kyckyb-and-why-do-i-have-to-provide-this-data) for more info.

### Team members

- Daniel Uba [@vi_cdan](https://x.com/Vi_cdan)
- David Davidson  [@Davidsonjizzle](https://x.com/Davidsonjizzle)
- Festus Ishioma [@Fest Dev](https://x.com/devfestus_?s=21)

### Contact

- **Contact Name:** Daniel Uba(@vi_cdan)
- **Contact Email:** dan.nnamdi@gmail.com
- **Website:** https://x.com/Vi_cdan

### Legal Structure

- **Registered Address:** NA
- **Registered Legal Entity:** NA

### Team's experience

- Daniel Uba(vicdan): A Web3 ecosystem builder and community advocate with 4+ years of experience in NFTs. I’ve actively contributed to the Polkadot ecosystem as a former KodaDot Ambassador and currently as an Ambassador for Chaotic NFT Marketplace, where I focus on growing the art and NFT vertical through creator onboarding, community education, and ecosystem amplification. I’ve also organized and hosted offline community events, including small art exhibitions and meetups(Supported by meetup bounty), introducing artists and newcomers to Polkadot-based NFT platforms and strengthening grassroots creator participation within the ecosystem.

- David Davidson(DaviidsonJizzle): A Web3 community builder and Polkadot Ambassador with strong experience driving grassroots adoption in Nigeria. He has onboarded hundreds of users into the Polkadot ecosystem through educational campaigns, Twitter Spaces, and offline meetups, guiding them on wallets, OpenGov, and on-chain governance tools. His work blends community management, content creation, and ecosystem growth, supporting Polkadot-native projects while amplifying African and global builders. Known for authentic engagement and cultural relevance, he plays a key role in bridging Polkadot’s technology with real-world community adoption.

- Festus Ishioma: A software developer with 4 years of hands-on experience building sophisticated web applications using Go, JavaScript, and TypeScript. Over the years, I’ve contributed to a wide range of projects, spanning personal initiatives, company-based solutions, and open-source collaborations. My experience covers the full software development lifecycle, from designing scalable back-end systems with Go to developing clean, responsive front-end interfaces using modern JavaScript and TypeScript frameworks. I’m comfortable working in both startup-paced environments and more structured teams, always focused on writing maintainable, efficient code and delivering real-world solutions. More Recently, I am part of the team building Longswipe( An Instant Onchain and off chain voucher Protocol)

### Team Code Repos

- https://github.com/dotjobs007-beep

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/fesTech-cloud

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/jizzle-szn-749391249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
- https://www.linkedin.com/in/festus-ishioma-2785621a7/

## Development Status :open_book:

DotJobs is under active development with a publicly accessible v1 already live, demonstrating clear proof of execution and ecosystem alignment.

Live platform: https://dotjobs.online/

Deployment: Available as a dApp on SubWallet, enabling native access for Substrate users.

###### Current Implementation (Live)

The first production version includes the following core components:
- Substrate wallet connection
- On-chain identity verification
- Job creation, listing, and application flows
- Basic user profiles

This release has allowed us to validate technical assumptions, gather early user feedback, and iterate based on real usage.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 1 Month
- **Full-Time Equivalent (FTE):**  3
- **Total Costs:** 10,000 USD

### Milestone 1: Core Platform Optimization & Trust Infrastructure

- **Estimated duration:** 2 Weeks
- **FTE:**  3
- **Costs:** 5,000 USD

##### Home Page & Find Job Page Optimization: Improve the usability, performance, and clarity of DotJobs’ Home Page and Find Jobs interface to enhance opportunity discovery across the Polkadot ecosystem.

- Redesigned Home Page and Find Jobs UI
- Improved job listing layout and filtering
- Performance optimizations for faster page loads
- Responsive design across desktop and mobile

##### Ambassador Program Application Module: Build native ambassador program application functionality enabling Polkadot ecosystem projects to publish and manage ambassador programs directly on DotJobs, eliminating reliance on external Web2 tools.

- Ambassador program posting interface for projects
- Standardized, in-platform application forms
- Application submission linked to on-chain verified user profiles
- Project dashboard for reviewing and managing applications

##### On-Chain Identity Verification Improvements: Enhance DotJobs’ verification system by integrating additional Polkadot Identity registrars to reduce friction and improve accessibility of on-chain identity verification.

- Integration of multiple Polkadot Identity registrars
- Improved verification flow and UI
- Clear display of verification status on user and project profiles

> [!NOTE]
> **The default deliverables 0a-0d below are mandatory for all milestones**, and deliverable 0e at least for the last one.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article for the work done. |
| 1. | Home Page & Find Job Page Optimization | (as mentioned above) |
| 2. | Ambassador Program Application Module | (as mentioned above) |
| 3. |On-Chain Identity Verification Improvements| (as mentioned above) |



### Milestone 2: Governance Integration Research, UI Design & Voting Infrastructure Foundations

- **Estimated Duration:** 2 Weeks
- **FTE:**  2
- **Costs:** 5,000 USD

##### Governance Model Research & Specification: Research and define a DAO-style governance model suitable for DotJobs, leveraging Polkadot-native technologies for community-driven decision making.

- Governance model specification document
- Definition of voting scope (featured job listings, platform updates, feature decisions)
- Token or identity-based voting assumptions clearly documented
- Architecture overview for Polkadot integration

##### Governance UI/UX Mockups: Design user-facing governance interfaces to support transparent and intuitive participation in voting and decision-making processes.

- UI/UX mockups for governance dashboard
- Voting flow designs (proposal creation, voting, results)
- Mockups for featured job voting interface
  
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | MIT |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** |
| **0c.** | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. |
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an article for the work done. |
| 1. | Governance Model Research & Specification | (as mentioned above) |
| 2. | Governance UI/UX Mockups | (as mentioned above) |

## Future Plans

#### Sustainability & Financing

DotJobs is designed to become self-sustaining through a progressive revenue model aligned with platform usage. Planned revenue sources include a 
- 5% escrow fee on completed freelance jobs,
- Promoted/sponsored job listings,
- Advertising,
- Paid job posting and bulk application features.

NOTE: Monetization will be introduced incrementally according to the roadmap, with community feedback guiding implementation.

#### Short-Term Adoption & Promotion

In the short term, the team will focus on improving core platform functionality, onboarding employers and job seekers, Collaborations and increasing ecosystem awareness. Promotion is currently organic, supported by an active and growing community (230+ X followers, 100+ Telegram Community members), regular social content, and live educational sessions such as X Spaces focused on Polkadot careers and hiring.

#### Long-Term Vision & Commitment
The long-term goal of DotJobs is to evolve into a fully on-chain freelance job platform built on Polkadot Hub. Development toward this transition is planned to begin in Q2–Q3 2026, following the project roadmap, with features including on-chain escrow, identity and reputation systems, and community-driven governance. The team is committed to maintaining DotJobs as a long-term ecosystem utility.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

Here you can also add any additional information that you think is relevant to this application but isn't part of it already:

- Dotjobs has been self funded by the Team up to this point. No external body is funding the project.
- Prior to the Polkadot marketing bounty shut down, we planned a Polkadot Career sprint: The Polkadot career sprint is a 3-Month ecosystem wide learning and talent activation campaign designed to onboard and train thousands of users, increase on chain identity adoption and transform the newcomers into a job ready polkadot contributor.
  The bounty shut down put the idea on a pause. We still plan to Execute that in the near future. Here is a view of the proposal we drafted --> [Here](https://docs.google.com/document/d/19oPkUWUttRZxWZQKbs277Hz7Y7OAPnmrW6I2WYlpuSQ/edit?tab=t.0) 
