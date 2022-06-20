# W3F Grant Proposal

- **Project Name:** Etch
- **Team Name:** Generation Spark
- **Payment Address:** 3B5ZuUZQDE4MdAEaTC8uB8ueaXcXX5R3Vb (BTC)
- **[Level]** 1

## Project Overview :page_facing_up:

An organization’s social responsibility can take the form of a wide variety of commitments. These can range from having a diverse workplace to increasing green energy use. It’s easy for an organization to make claims regarding how they’re run, but these often exist only as marketing copy. Etch is a platform that allows organizations to make socially responsible commitments and have them written indelibly to the blockchain using smart contracts. This will make an organization's stated goals regarding social responsibility transparent and permanent. It will also provide a place for workers to see what an organization stands for.

### Overview

Etch is software for organizations to make enduring commitments regarding their social responsibility.

Having worked previously on Advokat; an NLP powered chatbot that helped workers understand their rights during the COVID-19 Pandemic, it was clear from user input that many organizations didn’t behave in ways that aligned with their mandates. In addition, we feel strongly that inequality and global warming are the two defining issues of our time. We’d love to be able to contribute in some way to help alleviate these issues. Commitments made in marketing copy are like words on a whiteboard: easily erased when they prove to be inconvenient. It’s our hope that Etch makes socially responsible commitments more akin to words carved into stone.

This project will use ink! and substrate to create smart contracts that store the commitments. React and Polkadot js will be used to create a front end to create and maintain these contracts with a simple UI.

### Project Details

We will engage in user-research to identify in detail the requirements and needs of business owners and heads of organizations related to CSR commitments.

The software will include pre-made templates for different types of organizations. Users will then be able to customize these commitments before storing them on the blockchain.

An additional section will contain a UI where a user can store information about the employees and their salaries. The software will automatically create a report including information about gender pay gaps and pay ratios based on this data.

The goal with the proof of concept will be to implement the functionality for mock entities/organizations and not real-world organizations.

Examples of information to be stored and calculated for each organization:

Stored commitments
- Recycling
- Carbon offset usage
- Maternity/Paternity leave
- Paid sick leave
- Charitable donations
- Employee profit sharing
- Green energy generation
- Vegetarian/Vegan meal options
- No blocking of unionization efforts

Employee 
- Grade
- Salary
- Gender
- Demographic data

Metrics
- Median worker salary
- Gender representation
- Gender pay disparity
- Diversity
- Executive pay ratio

### Ecosystem Fit

Our primary audience are business owners and heads of organizations. Particularly those who wish to distinguish themselves from others and attract enthusiastic workers who align with their mission. Additionally, workers who want to understand the commitments an organization has made would also find this useful.

There’s currently a great desire by workers that their employers engage in socially responsible behavior, be held accountable and provide workers with purpose. Etch moves these commitments from websites and talking points to the blockchain to provide more transparency.

## Team :busts_in_silhouette:

### Team members

- Ashutosh Chhibbar
- Nira Datta

### Contact

- **Contact Name:** Ashutosh Chhibbar
- **Contact Email:** ashchhibbar@gmail.com
- **Website:**

### Legal Structure

- **Registered Address:** 
- **Registered Legal Entity:** 

### Team's experience

Ash is Co-founder and CTO of BrighTex Bio-Photonics, an integrated hardware and software company focused on A.I. He has 17 years of software development and data science experience. 
- Created DeepTag, a cloud AI platform for use in digital marketing in skin care and cosmetics
- Oversaw the development of Skin Advisor and Clarity hardware & software systems used by laboratories in skin care R&D.
- Worked with Legal Aid at Work to develop an NLP powered chatbot that helped inform workers of their rights during the pandemic. Designed and developed logic modeled on legal rights and employment law


Nira is a UX Researcher / Designer and has been creating accessible, user friendly experiences in the government, not for profit and private sectors for over 10 years. 
She will help design Etch so it is easy-to-understand and accessible for all users, ensuring it is up to the standards of industry design principals.
Previous projects include: 
- Designing and implementing a user friendly chatbot to help workers understand their rights in collaboration with the Legal Aid at Work, and employment law not-for profit
- Designing and implementing the first mobile check-in experience to allow Veterans to prepare and check in to health appointments easily online
- Implementing ux content design best practices for CourseHero online education platform allowing students to easily connect with expert tutors
- Designing and building a new version of the San Jose 311 mobile app, allowing citizens to report issues to the City of San Jose, including those who speak a primary language other than English.

### Team Code Repos

DeepTag homepage and web app
https://deeptag.ai/DeepTagPage.html#home-section
DeepTag documentation
https://api.btbp.org/apidocs/deeptag/

Blog post detailing the work we undertook with Legal Aid at Work to develop the NLP powered Advokat chatbot.
The software featured a large, branching logic model that meticulously matched the labor laws that were created during the pandemic in the U.S.
https://legalaidatwork.org/blog/new-chatbot/

- https://github.com/achhibbar

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ashutoshchhibbar
- https://www.linkedin.com/in/niradatta

## Development Status :open_book:

Articles and studies that point to meaningful, purpose driven work and CSR statistics becoming increasingly important to employees and workers.
- https://f.hubspotusercontent40.net/hubfs/9253440/Asset%20PDFs/Promotions_Assets_Whitepapers/BetterUp-Meaning&Purpose.pdf
- https://www.mckinsey.com/business-functions/people-and-organizational-performance/our-insights/help-your-employees-find-purpose-or-watch-them-leave
- https://online.hbs.edu/blog/post/corporate-social-responsibility-statistics

We had a conversation with Sebastian Müller about the concept of Etch. He mentioned additional details that he’d like to see in a grant proposal and to start with a level 1 grant.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 6 Months
- **Full-Time Equivalent (FTE):**  0.5
- **Total Costs:** 10,000 USD

### Milestone 1 — User Research, Prototypes & Design

- **Estimated duration:** 2 months
- **FTE:**  0.5
- **Costs:** 3,300 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0. | License | Apache 2.0 |
| 1. | 3 User research interview|  Interview 3 business owners/organization leaders to identify user needs in detail|
| 2a. | Wireframes | 3 business archetypes with ability to change template values|
| 2b. | Wireframes | Ability to create and store an organization’s employees and data|
| 2c. | Wireframes | Organization report of metrics based on stored data|
| 2d. | Wireframes | Search function that pulls data and reports for existing organizations|
| 2e. | Wireframes | Search function that pulls commitments for existing organizations|
| 3. | 2 User tests| Conduct user testing of the prototypes with 2 individuals|
| 4. | Data flow & Class Diagrams| Ink! Smart Contract designs based on the prototypes and user research| 
 
### Milestone 2 — Implementation

- **Estimated Duration:** 4 months
- **FTE:**  0.5
- **Costs:** 6,400 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 5. | Smart Contracts | Implementation of designs from data flow diagrams and prototypes |
| 6. | React | Implementation of UI prototypes |
| 7. | Web App | Hosted and functioning web app |


## Future Plans

- Have Etch work for real-world businesses. 
- Add a secure log-in and the ability to upload business documents that verify identity and ownership. This will avoid users adding businesses they have no links to. -
- Integrate with DAOs to automatically pull relevant information for automated metrics calculations.


## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We found out about the grants program by researching online about potential grants for web 3.0 projects.
