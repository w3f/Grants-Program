# Bytebell - Developer Copilot for Polkadot Ecosystem

- **Team Name:** Bytebell AI Private Limited
- **Payment Details:**
  - **DOT**: 1NY6JBh7KqtWiFVC11fZhoyTH8vEXoJFJRiBFBWoh6kj7GP
  - **Payment Address (USDT - AssetHub)**: 1NY6JBh7KqtWiFVC11fZhoyTH8vEXoJFJRiBFBWoh6kj7GP
  - **Currency**: USDT/DOT (50/50)
- **Level:** 2


## Project Overview :page_facing_up:

RFP reference: none
Follow up grant reference: none

### Tagline
Receipts first developer copilot for Polkadot that answers with exact citations.

###  Brief description
Bytebell is a developer copilot that unifies code, docs, repos, forums, PDFs, and chats into a version aware graph and returns answers with receipts from the exact file and line, updated on every new commit.

### Why we are building this

Developers lose time hunting for scattered context. We want to give Polkadot teams a single place to ask technical questions and get verified answers tied to real code and chain state. We already run paid Web3 copilots and you can check live deployments at ethereum.bytebell.ai and zktech.bytebell.ai. We also shipped an MVP copilot for Polkadot at polkadot.bytebell.ai.

This grant will fund concrete upgrades that Polkadot teams would want:

1. Propose documentation changes automatically on every new git push
2. Ingest Notion workspaces
3. Ingest forum threads in real time
4. Advanced chat analytics in the admin panel that show what questions are asked and from where
5. Automatic detection of documentation gaps and suggestions for fixes


## Project Details

**What we're building:**

A Polkadot-native Developer Copilot that ingests:
- Substrate core repos and pallets
- Polkadot codebase
- Technical RFCs and specification documents
- Key ecosystem documentation sites


**Core features:**
- Version-aware context graph linking code to discussions to specs
- Multi-agent retrieval that searches across all sources in parallel
- Receipt-based answers (file path, line number, commit hash, discussion link)
- Permission-aware access (respects private repos for teams)
- Works via web interface, MCP client, and coming soon - IDE plugins
- Complete Polkadot knowledge corpus (100+ sources)
- MCP integration (Cursor, Claude Desktop, Windsurf)
- Analytics dashboard for ecosystem insights
- Docker images for self-hosting
- Free access for entire ecosystem during grant period

**Technology stack:**
- VoltAgent framework (our multi-agent orchestration system)
- Vector embeddings for semantic search
- Graph database for relationship mapping
- SLMs and LLMs
- Permission inheritance from GitHub/GitLab

**What we already have:**
- Working product serving other ecosystems (Glue, daAI, SEI)
- Proven ingestion pipeline for code, docs, PDFs, and discussions
- Multi-agent architecture that reduces hallucinations < 4%

**PoC/MVP or other relevant prior work or research on the topic**
https://github.com/ByteBell/edge-framework
This is the open-source GitHub repository that you can install and run local AI models on Apple M-series chips machines with more than 16GB RAM.  
We also designed an on-device code copilot that works only with on-device AI.

**What your project is not or will not provide**

- Not a blockchain indexer
- Not a code review or CI CD system
- Not a general chatbot that answers without sources
- Not a Token gated features or tokenomics
- Not a on-premises database hosting inside the reviewer environment
- Not a private customer data or proprietary datasets
- Provide a website widget that will answer anything related to Polkadot technology.
- Provide a web chatbot that will answer anything related to Polkadot technology.
- Provide an admin panel to see history, chat analytics, sources indexed on the Developer copilot.


**Prior work:**
- Live deployment: https://zktech.bytebell.ai (try it with ZK rollup questions), ethereum.bytebell.ai
- GitHub: https://github.com/ByteBell

### Ecosystem Fit

**Where we fit:**
We sit between developers and the Polkadot knowledge base as enterprise AI for trusted knowledge access so the entire ecosystem becomes queryable and verifiable.

**Target audience:**
- Parachain development teams building on Substrate
- New developers onboarding to Polkadot
- DevRel teams across ecosystem projects
- Core protocol contributors navigating complex codebases
- Governance participants researching technical proposals

**Needs we meet:**
1. **Faster onboarding** - New devs can ask questions and get cited answers instead of spending weeks reading docs
2. **Cross-repo context** - Understanding how pallets interact across different parachains
3. **Governance clarity** - Linking proposals to actual implementation and discussion history
4. **Reduced knowledge silos** - When experienced devs leave, their knowledge stays accessible
5. **Better technical decisions** - Complete context from code, specs, and community discussions

**Evidence of need:**
We've spoken to 30+ teams in Web3. The pattern is consistent:
- Web3 learning curve is notoriously steep (forum discussions full of "where do I even start")
- Onboarding developers repeatedly ask the same questions across multiple channels
- Senior devs spend 15-20% of time answering repeated questions
- Onboarding new engineers takes 2-5 months before first meaningful PR

Specific data points:
- Polkadot Forum has thousands of discussions with valuable context scattered across threads
- Substrate documentation site gets 50K+ visits monthly but conversion to actual developers is low
- Multiple teams have told us "if we could search all our context at once, we'd save days per sprint"

**Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**
Not really. There are general AI coding assistants (Cursor, GitHub Copilot) but they:
- Work on single repos, not cross-ecosystem context
- Don't understand Substrate-specific patterns
- Hallucinate frequently because they lack version awareness
- Can't connect governance discussions to actual code

Polkadot has great documentation sites (docs.substrate.io, wiki.polkadot.network) but they're:
- Static and hard to search across
- Disconnected from actual code implementations
- Don't capture community knowledge from forums/discussions
- No way to filter by runtime version or specific parachain

**If not, please indicate why such a project might not have been possible, successful, or attempted.**
- Constantly changing Substrate versions without file path and line binding made answers drift and broke trust.
- No unified permissions across private repos, docs, and forums blocked real adoption.
- No receipts based, cross source graph with automated freshness, so assistants hallucinated and went stale.


**Are there any projects similar to yours in related ecosystems?**
We're aware of some documentation aggregators and AI coding tools, but none combine:
- Version-aware knowledge graphs
- Receipt-based verification (refuse to answer without proof)
- Cross-source context (code + docs + discussions)
- On-chain state awareness
- Permission governance

The closest might be Mintlify or Gitbook for docs, but they don't handle code repositories or community discussions, and they don't provide the graph structure that makes context compound over time. Kapa.ai is almost similar but does not ingest any code repositories which is almost 50% of importance in Technical information gaps.

## Team :busts_in_silhouette:

### Team members

- Saurav Verma (Co-Founder & CEO) [https://github.com/deusmachinea]
- CJ (Co-founder, Head of Engineering) [https://github.com/dev-cj]
- Nitesh (Team) [https://github.com/nitesh32]
- Lovanshu (Team) [https://github.com/bharatsachya]
- Sharvit (Team) [https://github.com/sharvitKashikar]
- Kavish (Team) [https://github.com/dranzer-17]

### Contact

- **Contact Name:** Saurav Verma
- **Website:** https://www.bytebell.ai
- **Contact Email:** saurav@bytebell.ai
- **Linkedin:** https://www.linkedin.com/in/saurav1verma/

### Legal Structure

- **Registered Legal Entity:** Bytebell Technology Private Limited
- **Registered Address:** India

### Team's experience

#### Saurav
- VP Engineering at Polygon (handling millions of daily transactions)
- Built scalability systems at Biconomy (10M+ requests/day)
- Worked with Government of India launching 10+ digital projects
- Previous startup exit in 2012
- 15+ years shipping production systems at scale

#### Chaitanya
8+ years in machine learning and blockchain infrastructure, have shipped production systems that handle high frequency trading data, and have hands on experience building AI agent frameworks. Also have deep expertise with vector databases and semantic search, which lets us design reliable retrieval and reasoning pipelines end to end.



#### Nitesh
Senior Engineer
Bachelor of Engineering in Computer Science
Full stack developer who writes clean functional code and balances quality with speed. Thoughtful specs help Nitesh ship fast and keep standards high.

#### Lovanshu
Engineer
Bachelor of Engineering, Computer Science
Full stack developer with strong machine learning and data analysis experience. Projects include WiseTrader where CNN and LSTM models were used for stock prediction with high accuracy. Skilled with TensorFlow, Keras, and Scikit learn.

#### Sharvit
Engineer
B Tech Computer Science and Engineering
Enjoys modern web stacks such as MERN and PERN and is drawn to AI, LLMs, and intelligent systems. Hackathons and open discussions fuel curiosity. Writes meaningful code and keeps learning every day.

#### Kavish
Engineer
B Tech Artificial Intelligence
Machine learning and deep learning engineer with a strong full stack base. Turns ideas into intelligent systems and scalable applications.

We haven't applied for W3F grants previously, but we've been in the Polkadot ecosystem for years. I've debugged Substrate nodes, helped teams with runtime upgrades, and spent enough time in the forums to know where the pain points are.

### Team Code Repos

- https://github.com/ByteBell

Note: Some of our core infrastructure is currently private as we're in active development with paying customers. We'll open source relevant components as part of this grant.

### Team LinkedIn Profiles

- Saurav - https://www.linkedin.com/in/saurav1verma/
- Chaitanya - https://www.linkedin.com/in/chaitanyajatoliya/
- Nitesh - https://www.linkedin.com/in/nitesh32 
- Lovanshu - https://www.linkedin.com/in/lovgarg/ 
- Sharvit - https://www.linkedin.com/in/sharvit-kashikar-ab866a24b/
- Kavish - https://www.linkedin.com/in/kavish-shah-937590281/

## Development Status :open_book:

We've already built the core Bytebell platform and have it running in production for other ecosystems:

**Live deployments:**
- ZK Ecosystem: https://zk.bytebell.ai
- Ethereum Ecosystem: https://ethereum.bytebell.ai

**Current status:**
- 5 paying customers at $1500/month
- 13 completed or active pilots
- Hundreds of queries processed weekly
- v2.0 shipped, moving to v3.0

**Relevant prior research:**
- We've analyzed context window limitations in LLMs: https://nrehiew.github.io/blog/long_context/ ad context rot
- Built multi-agent systems for reducing hallucinations
- Developed version-aware ingestion for multiple git hosting platforms
- Created permission inheritance from identity providers


**Why this grant:**
We want to build Polkadot-specific features that make sense for the ecosystem but wouldn't be covered by our standard subscription model:
- Substrate pallet-aware parsing
- Polkadot Forum and governance integration
- Parachain-specific best practices corpus


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months + 9 months maintenance
- **Average Full-Time Equivalent (FTE):** 1.5 FTE
- **Total Costs:** 30,000 USD
- **DOT %:** 50% (15,000 USD in DOT, 15,000 USD in USDT)

### Milestone 1 — Core Polkadot integration and version awareness

- **Estimated duration:** 2 month
- **FTE:** 2 to 2.5
- **Costs:** 20,000 USD

**User Stories:**
- "How do I configure a custom pallet in my Substrate runtime?"
- "Show me examples of pallets that implement the on_initialize hook"
- "What's the difference between StorageMap and StorageDoubleMap and when should I use each?"
- "How do I add the Balances pallet to my runtime and configure it?"
- "What pallets does Moonbeam use for EVM compatibility?"
- "Which runtime version introduced XCM v3 and what breaking changes did it include?"

**Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete setup guide for integrating Bytebell's embeddable component into documentation sites. Tutorial showing how to query across Substrate pallets with source citations. |
| **0c.** | Testing Guide | Unit tests for: Substrate project parsing, pallet dependency extraction, runtime configuration tracking, FRAME macro recognition. Guide covers local testing procedures and validation steps. |
| **0d.** | Docker | Provide a full Docker containers UI to manage everything. The containers connect to Bytebell cloud APIs for indexing, storage, chunking, metadata generation, and chat analytics. From this UI you can index new sources, remove sources, run the container on your premises, and your team can ask technical questions with Bytebell. Includes all polkadot technical stack and deployment docs. |
| **0e.** | Article | Technical writeup on parsing Substrate's architecture and maintaining version-accurate context across runtime upgrades. Audience: Polkadot SDK developers. |
| 1. | Substrate-Aware Ingestion Engine | Custom parser understanding Substrate project structure: pallet organization, runtime configs, FRAME patterns, trait implementations. Extracts relationships between pallets, maps dispatchable calls to implementations, tracks storage items and hooks. |
| 2. | Extended Documentation Corpus | Index comprehensive Polkadot ecosystem resources: Polkadot Wiki, docs.polkadot.com, Substrate documentation, technical RFCs, and community tutorials. Total: 1000+ documents with receipts to exact sections. |
| 3. | Embeddable Query Widget | A widget component for documentation sites with sub-2 second response times. Features: receipt-backed answers, source highlighting, configurable styling, mobile responsive. Handles 20+ concurrent users without performance degradation. |
| 4. | Content Management Dashboard | Admin panel for documentation maintainers: add/update/remove indexed sources, trigger re-indexing of specific repositories, monitor indexing status, view citation accuracy metrics. New resources indexed within 30 minutes of submission. You will be able to access the admin panel at app.bytebell.ai with user credentials given to you at the start of the Milestone. |
| 5.	| Automated Documentation Pipeline |	GitHub Actions workflows triggering on pushes to monitored branches (main, develop, release/*). Auto-regenerate API references, code examples, and integration guides when underlying code changes. Webhook-based triggers for real-time updates. Documentation generated within 15 minutes of commit.
| 6. | Governance Proposals | When answering questions about protocol functionality, include: links to governance proposals that enacted changes. Example citation: "Nomination pools introduced in runtime 9340 (block 13,654,321, Referendum 241)". |
| 7. | MCP-compliant server | Integrates with Claude Desktop, Cursor IDE, and other MCP-compatible tools. Responds to queries within 3 seconds. Auto-detects Substrate code contexts and provides relevant parachain-specific information.

**Acceptance Criteria:**
- Widget successfully embedded on Polkadot documentation sites within 2s initial load
- Admin dashboard enables content updates with re-indexing completed in less than 10 minutes
- Extended corpus covers 100+ documents with ≥99% citation accuracy rate
- System maintains performance with 20+ simultaneous users querying different topics
- MCP server integrates successfully with Cursor and Claude Desktop, less than 3s query response time
- Automated documentation generation completes within 15 minutes of code commits to tracked branches
- Generated docs include tested code examples validated against current codebase version

---

### Milestone 2 — Analytics Dashboard & User Insights

- **Estimated duration:** 1 month
- **FTE:** 0.5
- **Costs:** 4,000 USD

**User Stories:**

- "As a DevRel manager, I want to see which topics developers ask about most frequently so I can prioritize documentation improvements for high-impact areas."
- "As a Polkadot ecosystem lead, I want real-time analytics showing query patterns as they happen so I can respond quickly to emerging developer confusion or breaking changes."
- "As a grants committee member, I want to filter queries by parachain, time period, and topic so I can understand which parts of the ecosystem need more developer support."
- "As a technical writer, I want to identify documentation gaps where developers consistently ask questions without finding good answers so I know which guides to create next."
- "As a community manager, I want to see geographic distribution of queries so I can plan regional developer workshops and focus outreach efforts where engagement is highest."
- "As a core contributor, I want to export detailed query data including timestamps, topics, and citation rates so I can analyze developer behavior patterns for research purposes."
- "As a developer advocate, I want to log in with my GitHub account to access personalized analytics and track queries from developers in my region or working on specific parachains."
- "As a product manager, I want to compare query acceptance rates and satisfaction scores across different documentation sections so I can measure content quality objectively."
- "As an ecosystem researcher, I want to identify trending questions that spike suddenly so I can detect when runtime upgrades or protocol changes are causing developer friction."
- "As a parachain maintainer, I want to see which queries about my parachain remain unanswered so I can improve our documentation and support materials."

**Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Analytics dashboard user guide covering all metrics, filters, and export options. Privacy policy documentation for user tracking and data retention. |
| **0c.** | Testing Guide | Performance tests for dashboard under load (10,000+ queries). Tests for authentication flows, data export functionality, and real-time updates. Privacy control validation. |
| **0d.** | Docker | Provide a full Docker containers UI to manage everything. The containers connect to Bytebell cloud APIs for indexing, storage, chunking, metadata generation, and chat analytics. From this UI you can index new sources, remove sources, run the container on your premises, and your team can ask technical questions with Bytebell. Includes all the polkadot technical stack and deployment docs. The new image will have the analytics dashboard, chat analytics and knowledge gap intelligence.
| **0e.** | Article | Insights report analyzing first 30 days of query patterns: top topics, knowledge gaps identified, geographic distribution, citation effectiveness. Recommendations for documentation improvements. API documentation for integrating with external monitoring tools.|
| 1. | Comprehensive Analytics Platform | Dashboard displaying: query volume and trends over time, topic clustering and frequency analysis, geographic user distribution (based on timezone/IP), session metrics (duration, queries per session, return rates), most frequently asked questions, unanswered query patterns, citation click-through rates, answer acceptance and feedback scores. Real-time updates with configurable date ranges and cohort filters. |
| 2. | Knowledge Gap Intelligence | Automated identification of: top 30 most-asked questions, queries with low citation rates (potential documentation gaps), topics with high search volume but limited indexed content, trending questions (spike detection), comparative analysis across parachains and protocol features. |
| 3. | Exportable Reporting | Generate reports in CSV and JSON formats including: complete query logs with timestamps, citation sources and click-through data, user engagement metrics and session data, topic clusters and frequency counts, geographic distribution summaries. Reports generated on-demand or scheduled automatically. |

**Acceptance Criteria:**

- Analytics dashboard processes queries with less than 3s load time for any view 
- Top 30 most-asked questions identified automatically with ≥90% accuracy
- Geographic analytics show user distribution across ≥20 countries during pilot
- Exportable reports include all specified metrics with granular filtering options
- Dashboard identifies ≥10 clear documentation gaps based on query patterns
- Real-time updates reflect new queries within 30 seconds

---

### Milestone 3 — Maintenance & Ecosystem Impact Assessment

- **Estimated duration:** 9 months
- **FTE:** 0.5
- **Costs:** 6,000 USD

**User Stories:**

- "As ecosystem leadership, I want a comprehensive impact report demonstrating ROI and developer satisfaction to justify continued investment."
- "As a potential adopter in another ecosystem, I want quantified benefits and case studies to evaluate Bytebell for our project."
- "As the grants committee, I want evidence of developer adoption, usage patterns, and measurable outcomes to assess project success."

**Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Complete operational guide for Polkadot ecosystem teams to manage Bytebell independently. Includes: infrastructure requirements, scaling guidelines, maintenance procedures, troubleshooting workflows, cost projections. |
| **0c.** | Testing Guide | Stress tests demonstrating system stability under production load. Uptime monitoring validation. Performance benchmarks for various query types and load scenarios. |
| **0d.** | Docker | Milestone specific modules included inside the containers UI are monitoring and alerting, analytics and export, impact reporting with templated KPI dashboards and PDF or CSV export, backup and restore, configuration manager for sources schedules and retention, privacy controls with redaction and data purge, release snapshot and diff viewer for version aware answers,, and health and diagnostics with status checks added on top of the docker image provided at Milestone 2 |
| **0e.** | Article | Public impact report with key findings, case studies, and future roadmap. Additional internal comprehensive report for W3F with detailed metrics, cost analysis, and sustainability recommendations. |
| 1. | Complete Impact Assessment | Report including: total queries processed, unique active users, query resolution rate and accuracy, average time-to-answer vs traditional support channels (forum posts), documentation gap analysis with prioritized recommendations, developer satisfaction survey results (NPS, CSAT scores), time-to-first-contribution metrics for new developers, support ticket deflection rates for covered topics. Includes 3-4 detailed case studies of individual developers showing concrete onboarding acceleration and productivity improvements. |
| 2. | Production-Ready System | Polkadot.bytebell.ai deployed with 99.5% uptime over final 9 months. Production monitoring, logging, and alerting infrastructure. Automated backup and disaster recovery procedures. Load balancing supporting 100+ concurrent users. Performance optimizations ensuring less than 4s p95 latency for complex queries. |
| 3. | Sustainability Plan | Detailed document covering: projected infrastructure costs at various usage scales (100, 500, 1000+ daily active users), recommended maintenance schedule and staffing requirements, monitoring and alerting best practices, suggested update cadence for indexed content, cost reduction strategies and optimization opportunities, path to community-managed operations. |
| 4. | Knowledge Transfer Package | Complete handoff materials enabling Polkadot ecosystem teams to operate independently: administrative guides and operational runbooks, troubleshooting documentation and FAQ, training session recordings for key personnel, direct support channel for first 90 days post-delivery, open-sourced components (Substrate parser, MCP server) with contribution guidelines. |

**Acceptance Criteria:**

- System successfully handled queries with ≥96% citation accuracy rate
- Average query resolution time less than 3s (p95 latency) for production traffic
- Documented case studies show median time-to-first-PR for new contributors reduced by ≥25%
- Developer satisfaction survey shows ≥75% would recommend Bytebell to other Polkadot developers
- Support ticket volume for indexed topics reduced by ≥35% in participating teams
- Complete documentation enables ecosystem teams to maintain and operate Bytebell independently
- Sustainability plan includes realistic cost projections validated against actual usage data
- Geographic reach countries based on query analytics
- Knowledge transfer completed with at least 2 ecosystem team members trained

**What "Maintenance + Automatic Feature Rollout" Means**:
During these 9 months, the Bytebell team will:

- Monitor system performance and uptime (99.5%+ target)
- Respond to bug reports and technical issues

- Automatically deploy new features developed for our core platform
- **Team context features**: Workspace-specific knowledge graphs, team permission management
- **Enhanced user histories**: Personalized query history, learning patterns, context carryover between sessions
- **Custom-trained models**: Polkadot/Substrate-specific fine-tuned models for improved accuracy
- **Advanced retrieval techniques**: As we improve our RAG pipeline, Polkadot deployment benefits automatically

**Community Engagement Requirements**:

- Active Telegram group maintained with Polkadot core developers, parachain teams, and community members
- Weekly engagement summary reports
- Monthly community calls to review feedback and discuss upcoming features
- Quarterly developer satisfaction surveys
- Direct channel for urgent issues and feature requests
---

## Future Plans

**Short term (3-6 months post-grant):**

- Gather feedback and iterate on Substrate-specific features
- Ship IDE plugins (VS Code, IntelliJ) with Polkadot-aware features
- Present at Sub0 or Polkadot Decoded to drive adoption

**Long-term maintenance:**

We're building Bytebell as a sustainable SaaS business. During the 12-month grant period, the Polkadot deployment will be completely free for the entire ecosystem. During this period, Polkadot, individual developers, core contributors, and community members will have unrestricted access to the full feature set—including private repo integration, analytics, and priority support—at no cost.
After the initial grant-funded year, we'll transition to a sustainable model:

Free tier: Public repos and ecosystem docs (always free for individual developers)
Team tier ($999/month): Private repos, team analytics, priority support for commercial Polkadot team
Enterprise: Custom deployments, SSO, SLAs for larger organizations

However, we're committed to keeping the core Polkadot ecosystem deployment accessible. Educational institutions, open-source projects, and individual developers will continue to have free access beyond the first year.

**Growth strategy**:

Start with Polkadot DevRel teams (they feel this pain most)
Expand to core protocol contributors
Partner with Polkadot educational programs (Polkadot Blockchain Academy, etc.)
Build corpus of "best practices" that compound as more teams use it
Open source the Substrate parser and some core components to drive adoption

**Free Access Period (Months 1-12)**
During the 12-month grant period, the Polkadot deployment will be completely free for the entire ecosystem. This includes:

- Polkadot (commercial and non-commercial)
- Individual developers
- Core protocol contributors
- Community members
- Educational institutions
- General Public

Full feature access at no cost:

- Private repository integration
- Analytics dashboard
- Priority support
- All Substrate-specific features
- Unlimited queries

**Transition to Sustainable Model (Month 13 onwards)**
**Starting Month 13 (after grant completion)**, we'll introduce a tiered pricing model:
**Free Tier (Always Free)**:

- Public repositories and ecosystem documentation
- Community forum integration
- Basic analytics
- For: Individual developers, students, open-source projects
- Total 10 million tokens per month

**Team Tier ($999/month)**:

- Private repository integration
- Team analytics and insights
- Priority support
- Advanced features
- Total 200 million tokens per month


**Team's long-term vision:**
We believe every ecosystem needs a unified context layer. Polkadot is perfect because of its technical depth and the challenge of understanding how everything connects. If we nail this, we prove the model works for any complex technical ecosystem. Long term, we want Bytebell to be infrastructure—the layer that makes organizational knowledge queryable, verifiable, and useful for both humans and AI agents.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**
Through the Polkadot ecosystem. I've been following Substrate development for years and have seen grant announcements on the forum.

**Additional context:**

We've already invested 8 months building Bytebell and have paying customers. This grant isn't about proving the concept—it's about making Bytebell work specifically for Polkadot's unique needs and developing more features to help technical teams to move fast. The Substrate-specific features we're building (pallet awareness, runtime version tracking, on-chain context) wouldn't make sense for our Ethereum or ZK customers, but they're critical for Polkadot.

We're also committed to giving back to the ecosystem. Parts of our Substrate parser and the MCP server will be open sourced so other tools can build on them.

**Why we're a good bet:**
- We've already shipped a working product (not vaporware) i.e 
 ethereum.bytebell.ai [36+ github repos, 1000+ pages blogs, ZK research papers 200+]
 modular.bytebell.ai [16+ github repos, 1000+ pages blogs, 15+ third party packages]
 
- We have paying customers proving people want this
- We've built in Web3 infrastructure before (Polygon, Biconomy)
- We're realistic about timelines and scope
- We know how to take brittle systems to production scale

**What we need:**
Funding to focus on Polkadot integration for 3 months. We'll continue maintaining our existing customer deployments, but this grant lets us dedicate engineering time to ecosystem-specific features that benefit everyone.

Happy to answer any questions or do a live demo of the current system. Just reach out to saurav@bytebell.ai.
