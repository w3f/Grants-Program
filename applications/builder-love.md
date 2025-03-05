builder.love

Team Name: Builder Love

Payment Details:

DOT address: 16ELSqwYpGHqjBTcB6AAnrgYCR8wL9raGwPU3QHH1Kab7Z9a

Payment: DOT is fine

Level: 2 ($30,000)

## Overview
Builder Love (https://builder.love) empowers blockchain builders with deep insight and peer validation of blockchain research and development trends that are worth investing time in.

The majority of blockchain builders want to build technology that solves problems, and hopfully makes people's lives better. 

The Polkadot ecosystem's accomplishments, and the tradition of building technology that solves real problems should be celebrated.

We want builder.love to empower builders with the right data, so that they can make better decisions about how they invest their time in the blockchain space.

### Core problem

My motivation to start [builder.love](http://builder.love) is really centered on one core problem:

**Builder time investment decisions are more difficult in blockchain than in other software industries**

This problem stems from three simple aspects of our industry:

- Blockchain is a young industry with little adoption: A lot of competition for a piece of a pie that has not grown much
- An open codebase: It is easy to fork most proejcts
- Token incentives: This is the most pernicious, because highly lucrative, short-term token opportunities create a strong incentivize for hyper-promoting the ecosystem and the community 

These three things have resulted in many competing ecosystems and redundant products and services. Some of these ecosystems are genuine about building technology that is useful for solving problems and, hopefully making people’s lives better. I call this legitimate technology. Some ecosystems exist solely to attract new token buyers. I call this illegitimate technology.

We make a strong assumption that the majority of builders want to build legitimate technology. We think this is right. It has been our experience meeting builders across the space.

So what’s a builder to do? How do they make good time investment decisions in this hyper-promotional environment they find themselves in?

What we want to do with builder.love is to empower builders with deep insight and peer validation of blockchain research and development trends, so that builders can make better decisions about how they invest their time.

## Project Details
An MVP has been created: https://builder.love

Project docs: https://docs.builder.love/

### Primary users

The primary users are blockchain developers and researchers who want deep insights into, and peer validation of, market trends.

builder.love is focused on providing blockchain builders with data and analytics that compare ecosystem and developer framework adoption and trends. Our focus is on developer and researcher activity. We will only incorporate additional analytics and data if they help builders better validate their time investments.

### Data

The core data that defines the full list of active blockchain projects comes from the Electric Capital Crypto Ecosystems repo. Project metrics are sourced from Github and Discourse.

The analytics are currently built using client side JSON files. This was fine to get to an MVP. The next phase of work is building out data infrastructure to support product growth. 

You can see the initial data infrastructure work here: https://github.com/builder-love/data/tree/master

## Ecosystem Fit

### Where and how does your project fit into the ecosystem?

With builder.love blockchain builders can concentrate their time bets on legitimate technology, instead of coincidentally contributing to the illegitimate technology that is draining the goodwill of open blockchains. 

builder.love is complementary to ecosystems like Polkadot that are building legitimate technology. 

### Target users
Blockchain developers and researchers. The user base is not restricted to Polkadot builders, since the strength of Polkadot's builder activity should attract builders that are currently working in other ecosystems. 

### What need does your project meet?

Blockchain builders need help navigating the promotional nature of the blockchain space, in order to find legitimate technology to spend their time building. 

### How did you identify these needs?

We've talked with many builders in the blockchain industry. There is a strong desire to have better data on peer activity. 

### Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

There are no projects I'm aware of that are focused solely on Polkadot builder trends. However, the following are comparable data platforms that contain some data on builder trends:

- [dev.to](dev.to)
- [codersrank.io](codersrank.io)
- [artemis](https://app.artemisanalytics.com/home)
- [Electric Capital Developer Report](https://www.developerreport.com/) 

## If so, how is your project different? 

*Problems with Electric Capital Developer Report:*
- One year data refresh is not timely enough. Builders need much more frequent updates to understand trends
- A report is not sufficient. The data and analytics must be available via a web based app
- Ecosystem boundaries are not clearly defined

*Problems with Artemis:*

- Data labeling is not specific, and in some cases lacks appropriate context or is incorrect
    - Examples:
        - There is no label for execution virtual machine
        - There is no label for Ethereum L2, Rollup, or Alt-L1
        - Data on repo language composition is not tracked
        - Mislabeling, or double counting is prevalent likely due to the breadth of information available on the platform. For example: 
            - Lido is not currently active in Solana ecosystem (should be dropped from the set using some standard methodology, like pairing with contract usage)
            - Chain agnostic tools such as bridges and oracles are inappropriately categorized into one ecosystem (e.g., [Li.Fi](http://Li.Fi) is categorized as a Solana project, Pyth is categorized as a Solana project, and Chainlink is categorized as an Ethereum project)
- The content is not organized to meet the needs of builders that want easily consumable comparative metrics, as the platform appears built to provide data and analytics tools for institutional investors
- The platform has a breadth of information available, which means less resources are available to focus on the builder data product
- Does not incorporate research activity

*How I will solve these problems:*

- We will create a classification model for project repos so that we can aggregate builder activity by ecosystem or development frameworks. This would give us the ability to compare substrate vs non-substrate builder activity across the industry.
- [builder.love](http://builder.love) is solely focused on builder activity, which means the data labeling and classification issues inherent in the data can be addressed

## Team 👥

Team lead: Trevor Jacka

Email: trevor@builder.love

Github: https://github.com/treboryatska

Mirror: https://mirror.xyz/0xd96FA162b064553822e765545E3D48a054eC81F6

builder.love docs: https://docs.builder.love/

Legal structure: none (yet)

### Team experience

*Trevor's experience:*

I'm passionate about open blockchains. During my 12-year tenure at the FDIC (2009-2021), I oversaw more than 500 bank closures. This experience taught me a crucial lesson: trusted intermediaries become unreliable when risks emerge infrequently and incentives aren't properly aligned. I believe open, permissionless blockchains can serve as an effective replacement for many traditional financial system intermediaries.

Since early 2021, I've worked in blockchain technology, focusing on protocol economics and product development roles.

I'm dedicated to collaborating with builders and users to create solutions that enhance people's lives.

My LinkedIn is up-to-date: https://www.linkedin.com/in/trevor-jacka-cfa-84049140/

## Development Status 📖

The site is live: https://builder.love

builder.love Github org: https://github.com/builder-love

## Development Roadmap 🔩

The project development roadmap can be found here: https://github.com/orgs/builder-love/projects/1/views/1

The $30,000 will be used for data infrastructure upgrades, which are estimated to take four weeks. Here is the milestone in the project roadmap: https://github.com/builder-love/react/milestone/1

Resources required for migration: 

- One full time blockchain data engineer (at least 2-3 yrs experience working with blockchain data)
    - 40 hours per week for 4 weeks
    - Estimated hourly rate: $70
    - Total estimated expense: $11,200
- Product lead/analyst (10+ yrs data and analytics experience; 3+ yrs web3 product experience)
    - 40 hours per week for 4 weeks
    - Estimated hourly rate: $145
    - Total estimated expense: $23,200 (founder’s compensation)
    - Role will be fulfilled by founding member
- Saas licenses for cloud hosting API and front end, AI tools, such as cursor.ai and gemini
    - google cloud sql postgres database: $150 per month
    - vercel for public beta: $20 per month
    - Cursor.ai: $65 per month
    - Gemini: $65 per month
    - Miscellaneous buffer: $700
    - Total cost: $1,000

**Why is this work necessary?**

We were able to create a minimum viable product using client-side json files generated locally using python. This process is fragile, not easily testable, will not scale, and client-side json is not suitable for complex queries. The project needs a server-side database and API to support growth beyond the MVP.

## Deliverables
- Data infrastructure with production level availability and security
    - Google cloud sql postgres instance
    - Highly available machines for running pipelines
        - Google sql proxy client/server connection daemon
        - Tailscale local client network
        - Dagster daemons: webserver for monitoring, and dagster execution daemon
    - Configure front end API service
    - Create staging/production relationship
        - Integrate Google Cloud Database Migration Service to ensure no downtime
- Robust and efficient data pipelines that can easily expand to onboard new datasets
    - Pipelines that connect to the right data sources
    - Query buildout
    - API rate handling
    - Better testing built into pipelines to flag for issues
- Data analytics methodology that simplifies platform front end work
    - Standardize analytics tables, queries, charts, and front end tools so that the product team can move fast and learn

## Future Plans

This project needs to be sustainable. At this moment, the team is paying for, and building out, the cloud infrastructure that is required for a database server. 

**What are your plans after the grant is completed?**

We will continue to raise grant funds while we develop a sustainable business model. The leading business model ideas we have at the moment are to place targeted ads for open jobs and tooling directly within the analytics. For instance, the [builder segments table](https://www.builder.love/developers) can have a tooltip that companies can use to advertise relevant open positions. Similarly, tooling and infrastructure providers can advertise relevant products. 

Another business model idea is to create builder profiles. Builders make an investment to the platform by linking their github, social, and other important accounts to the [builder.love](http://builder.love) platform, which then tracks and reports their achievements and activity. This data lays the foundation for builder reputation scores. Builder reputation data is valuable for companies.

## Additional Information ➕

### How did you hear about the Grants Program? 

ethDenver presentation

### Is the project open source? 

Yes. The repos are currently MIT license, and will continue to be in the future. 

### Is the project a public good? 

Yes. The data and analytics are made available for builders to access in many different formats, without explicit costs. 
