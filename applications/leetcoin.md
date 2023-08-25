# LeetCoin

- **Team Name:** LeetCoin
- **Payment Address:** 0x03e95B0657846cD3dCF500791506947272eE12c8 ETH
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2
- **Status:** [Terminated](https://github.com/w3f/Grants-Program/pull/1182#issuecomment-1675270082)

## Project Overview :page_facing_up:

### Overview

LeetCoin is the LeetCode for Web3, centered on leveling up dev’s skills. We are creating a platform to help enhance
technical skills in a gamified and fun way, expand Web3 technical literacy through highly visual smart contract analysis
and create an online judge system for Ink!, Solidity and Vyper to evaluate smart contract solutions against predefined
test suites. Web3 is relatively new and most companies do not have established technical interviewing guidelines. Also,
technical exploits, both front-end and at the smart contract level, have become a widespread problem harming the
ecosystem. To succeed we will take an incremental approach starting with creating problem sets with concepts and
challenges that can help developers follow a standardized way to up their level no matter what it is, from beginner to
expert across key areas. Problems will be of three primary types:

1. open-ended (write a function that utilizes the x data oracle and returns properly formatted Big Number),
2. comprehension based (given this smart contract, spot the problem leading to a reentrancy guard attack), and
3. knowledge based (which of the following can improve this snippet of code?).
   These problem sets will become community-driven through incentivizing creation of new problems.

The project will be driven by the community and offer interactive, gamified resources for developers to get to their
next stage, hiring companies to source superior candidates and better learning resources. Every problem solved as well
as created by a community member will be tied to incentives to encourage continuous learning and sustainability. We will
partner with Web3 projects, infrastructure builders and tooling experts to co-create problem sets of key skills they
believe future hires should have.

### Project Details

#### Features

We are working on 3 important core functionalities:

- Many new Web3 devs lack knowledge in core areas such as Ink!, Security & Auditing, Solc Versioning Knowledge,
  OppenZepplin, Testing (Apeworx & Brownie), and Exploits (Frontend & Smart Contract). Our platform will host and curate
  the sets of gamified practice problems that cover core knowledge in the above areas. Each challenge runs against a
  suite of test cases. New problems will be added regularly and designed by a mix of the LeetCoin team, community
  members, and Web3 industry partners.
- Hiring core teams is difficult and always a bit risky, especially when many developers prefer to remain anonymous and
  lack GitHub coding activity, verifiable resumes, or LinkedIn pages. LeetCoin offers core teams a fun way to discover
  and vet potential builders by testing the only thing that matters: evaluating technical skills in an objective, fair
  and data-driven approach. We plan to raise the hiring standards across the entire ecosystem and make hiring better for
  everyone.
- LeetCoin’s online judge engine can compile and run smart contracts code written in Ink!, Solidity and Vyper. The
  engine records the execution metadata like statistics and saves the execution output to a permanent storage that can
  be evaluated against the predefined test suite.

#### Online Judge System

An important part of the LeetCoin platform is the online judge system. The online judge is an engine that can run the
candidates’ code solutions against a specified testing suite, evaluate the performance and report the test results back.
Currently, there are no online judge solutions that can evaluate the smart contracts against predefined testing suites.
We are creating one with the initial support for Ink!, Solidity and Vyper.

#### Architecture

The platform consists of 3 main components

1. Frontend application - the UI React application that displays all the available problems, problem pages, code editor,
   user profile, login/signup page, and admin dashboard. The frontend application interacts with the backend application
   using REST API to request available coding problems, submit problem submissions, retrieve submission results,
   retrieve user information, etc.
2. Backend application - the core NodeJS application that is responsible for the business logic. The application has a
   database that stores the list of available coding problems, users, coding submissions and etc. The main purpose is to
   serve the data from the database via REST API.
3. Online judge engine - the core engine component of the backend app that executes the coding solutions in an isolated
   environment. The engine supports Ink!, Solidity and Vyper smart contract languages. It compiles the smart contract
   code, runs it and saves the output to a dedicated storage in string format. The engine also reads the submission
   outputs from the storage and compares it against the expected output and reports back the failed and succeeded test
   cases along with the execution metadata (e.g statistics) and reports them back to the backend application.
   ![](https://imgur.com/fDx7QFR.png)

#### Technology Stack

The frontend application is written in React and NextJS and hosted on AWS Amplify platform. The backend application utilizes
express server framework which is built on top of NodeJS. It is really easy to design REST API using express and the API
specification will be written in Swagger. TypeScript is used on the backend. The online judge is packaged as a portable
module that can be easily incorporated in the other projects. The judge is written in TypeScript. The submission output
database will be initially hosted on Postgres.

#### Mockups:

![](https://i.imgur.com/seKd2sa.png)
![](https://imgur.com/W0mNmDc.png)

### Ecosystem Fit

LeetCoin is an applied, community-driven education-focused public good aimed at building the future builders of
Ethereum. It is important because it offers a streamlined way to level up across 3 domains: practice problems, visual
and simplified smart contract analysis and hiring.

We want to provide new devs a gamified way to learn and enhance skills regardless of their background, a way that
already fits their mental schemas if they are transferring over from Web2 and familiar with popular platforms like
HackerRank and LeetCode. These platforms unfortunately focus on Web2 algorithmic challenges and do not offer
Web3-focused problem sets. Not only will a gamified way allow beasier Web3 adoption by developers, it allows practical
experience across key areas that ethereum developers only learn over time in a haphazard way by exploring github repos
and spending countless hours individually analyzing and testing code. Given that many projects by new devs in the
ecosystem are forks of existing smart contracts that are often not fully understood, new devs risk releasing code that
leads to exploits and harms the reputation of the ecosystem, presenting a barrier to future potential devs from
entering. Problem sets will cover key areas from security and coding to cryptographic primitives and allow builders to
create their own personalized learning paths. Better builders lead to a stronger Ethereum foundation and superior
talent. Problem sets manifest the Web3 ethos by being open-source and inviting the collaboration of community, domain
experts and leading protocols. Community involvement is key given the fast-moving evolution of the ecosystem.

By allowing hiring teams a means of curating their own problem sets from our open-source database or developing their
own, it allows them to pre-screen and vet new hires leading to a higher standard. We aim for Leetcoin to be adopted
across the ecosystem similar to how similar platforms have improved hiring processes in Web2. By vetting devs before
inviting them to the initial interview to join a core team, the caliber of builders will improve resulting in less
technical exploits and superior builders in the ecosystem.

#### Relevance to Polkadot and Substrate

We anticipate more adoption of Ink! as a smart contract language and teach more developers how to write smart contracts
better and more secure. In addition, we anticipate more developers to express interest and switch to Web3 development
and help Web3 companies to raise their hiring standards.

## Team :busts_in_silhouette:

### Team members

- Ali Serag
- Alberto Cevallos
- Bolat Khojayev

### Contact

- **Contact Name:** Bolat Khojayev
- **Contact Email:** team@leetcoin.co
- **Website:**

### Legal Structure

Legally incorporated in Canada.

- **Registered Address:** 1188 WEST GEORGIA STREET VANCOUVER, BC, V6E 4A2, CANADA
- **Registered Legal Entity:** BOSS SOFTWARE CONSULTING LTD.

### Team's experience

#### Ali Serag - Lead Smart Contracts Developer

Ali is a serial builder passionate about technology and community. Ali Co-Founded Fostrum, a startup backed by Techstars
and Barclays Bank and launched various award-winning open-source initiatives such as covidimpact.ca (Call for Code, Code
the Curve). Ali has worked on various DeFi projects over the past several years, both anon and publicly. Having acted as
president of the largest tech early-talent community in Canada, Ali is passionate about education and community. Ali
advises Vancouver City Council candidates on blockchain and tech-centered policies and is a close advisor to Coding in
Color, an international educational initiative supported by the government of Canada focused on teaching refugee youth
coding skills.

#### Bolat Khojayev - Lead Full-stack Developer

Bolat was a senior Amazon full-stack developer and architect who turned to Web3. He worked with various early-stage
start-ups such as Connectly.ai and Carmodity to develop their first MVPs, define coding best practices, hire competent
developers and establish a high performing engineering culture. Bolat has been interviewing prospective engineers for
over 5 years (at Amazon, Connectly and Karat) and has launched various mentorship initiatives, including Qazaq Codes, a
curriculum teaching Russian speaking devs core coding competencies.

#### Alberto Cevallos - Contributor

Alberto is the founder of GreenOak.xyz and heads its Builder Program which provides mentorship and support for projects
contributing to the Web3 ecosystem. He is a seasoned Web3 builder and investor, having been co-founder of BadgerDAO and
acting as an early core team member of Travala.

### Team Code Repos

- https://github.com/LeetCoinCo
- https://github.com/LeetCoinCo/leetcoin-backend
- https://github.com/LeetCoinCo/leetcoin-frontend

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted
elsewhere or live are also fine.

- https://github.com/Aliserag
- https://github.com/NoirKomBatman
- https://github.com/albertocevallos

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ali-serag-0135a47a/
- https://www.linkedin.com/in/bkhojayev/
- https://www.linkedin.com/in/albertocevallos/

## Development Status :open_book:

We have created a landing page https://leetcoin.co and some initial backend skeleton
structure https://github.com/greenoakxyz/leetcoin-app. There is no prototype yet and we are currently developing it.

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 37 Weeks
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 29,999 DAI

### Milestone 1 — Implement Ink! Problem Builder, Solution and Compiler

- **Estimated duration:** 21 weeks (Completion by March 15, 2023)
- **FTE:**  3
- **Costs:** 12,000 DAI

This milestone will allow for the creation and use of Ink! coding problems.

| Number | Deliverable            | Specification                                                                                                                                                                                         |
|-------:|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                | Apache 2.0                                                                                                                                                                                            |
|    0b. | Documentation          | We will provide the documentation for the repository code as well as a tutorial for publishing/designing a user-generated coding problem and test suites.                                             |
|    0c. | Testing Guide          | Best practices for developing test suites to run code against and a FAQ.                                                                                                                              |
|    0d. | Article                | Announcement blog post explaining how LeetCoin can be used for upgrading web3 developer skills, improve security and help with properly vetting dev core-team candidates to minimize technical risks. |
|     1. | Design Document        | Description of architecture and interface                                                                                                                                                             |  
|     2. | User Authentication    | Create a wallet based authentication system for problem builders as well as users with Web3 Onboard                                                                                                   |  
|     3. | Online Judge           | Online judge that compiles Ink! contract code and runs it against test suites comparing the actual output with the expected ones based on the different test cases                                    |  
|     4. | Frontend problems list | A simple table that displays all available problems on the platform                                                                                                                                   | 
|     5. | Frontend code editor   | Code editor for the problems                                                                                                                                                                          |  
|     6. | First Ink! Problem Set | Develop first 5 Ink! problems working with core teams of popular DeFi protocols                                                                                                                       | 
|     7. | Database               | Database to store all problem datasets (Postgres)                                                                                                                                                     | 
|     8. | API                    | Create an API with express, express router, Postgres and CORS                                                                                                                                         | 
|    9. | Frontend user profile  | User profile page where they can edit their information and see their progress                                                                                                                        | 
|    10. | Logging                | Server logging with morgan and winston                                                                                                                                                                | 

### Milestone 2 — Educational Modules and Extension

- **Estimated Duration:** 8 weeks (Completion by May 15, 2023)
- **FTE:**  3
- **Costs:** 10,000 DAI

This milestone will extend the problem compiler and problem sets as well as introduce new functionality related to
different learning paths and in-depth analysis of hugely popular smart contracts.

| Number | Deliverable                     | Specification                                                                                                                                             |
|-------:|-------------------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                         | Apache 2.0                                                                                                                                                |
|    0b. | Documentation                   | We will provide the documentation for the repository code as well as a tutorial for publishing/designing a user-generated coding problem and test suites. |
|    0c. | Testing Guide                   | Best practices for developing problem sets, how to test them and a FAQ.                                                                                   |
|    0d. | Article                         | Announcement blog post explaining the new educational modules on the platform.                                                                            |
|     1. | Set Creator                     | Implement problem set curation and creation                                                                                                               |  
|     2. | Problem Favouriting             | Allow users to favourite specific problems to easily reference later                                                                                      |  
|     3. | Expand Online Judge             | Allow for problems written in Ink!, Rust and Go by extending compiler                                                                                     |  
|     4. | Diversify Sets                  | Define and add more problems.                                                                                                                             |  
|     5. | Badges                          | Award badges to specific users and educators that have hit specific achievements                                                                          |
|     6. | Page with educational resources | List of awesome educational Ink! resources

### Milestone 3 — Hiring Module

- **Estimated Duration:** 8 weeks (Completion by July 15, 2023)
- **FTE:**  3
- **Costs:** 7,999 DAI

This milestone will introduce functionality to allow hiring core teams to generate links of predefined problems to share
with prospective applicants as well as receive feedback on the applicant’s performance.

| Number | Deliverable              | Specification                                                                                                                                                                                                                                                                                                                                                           |
|-------:|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                  | Apache 2.0                                                                                                                                                                                                                                                                                                                                                              |
|    0b. | Documentation            | We will provide the documentation for the repository code as well as a tutorial for publishing/designing a user-generated coding problem and test suites.                                                                                                                                                                                                               |
|    0c. | Testing Guide            | Best practices for developing test suites to run code against and a FAQ.                                                                                                                                                                                                                                                                                                |
|    0d. | Article                  | Announcement blog post explaining LeetCoin's hiring tools to help vet the candidates.                                                                                                                                                                                                                                                                                   |
|     1. | Employer Problem Sets    | <ul><li>Allow employers to search through database of existing problems and add them to problem set</li><li>Implement problem set timer</li><li>Implement employer problem set one-time-use link generator</li><li>Allow employers to optionally specify ethereum address to solve problem</li><li>Allow employers to create custom problems to mix and match</li></ul> |  
|     2. | Applicant Authentication | Applicants must connect with their Polkadot wallet in order to start and view timed employer problem set                                                                                                                                                                                                                                                                |  
|     3. | Mailing Notifier         | Mailing system that notifies specified email upon completion of problem set with applicant’s answers                                                                                                                                                                                                                                                                    |

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

