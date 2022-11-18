# The CrowdloanFET Project

- **Team Name:** Mutai Solutions
- **Payment Address:** 0xE27F2E8321Fb4c32525a4ED86d2902dbA63491E4 Ethereum (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 1

## Project Overview :page_facing_up:

 **This application is response to the [Crowdloan Front End Template RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/open/crowdloan_front_end_template.md)**

The CrowdloanFET project is a free and opensource white-label solution for Polkadot projects to showcase the Crowdloan to prospective and current project supporters and community members. 

Built using Nextjs, Tailwind and Polkadotjs, projects can easily configure/modify and deploy a frontend for their crowdloan campaign, either on their own infrastructure that supports node or on affordable/free platforms like Vercel.

The template will come with an unopinionated style and will provide the appropriate information architecture for different projects to add on top of and apply their own brand assets.


## Project Details

### Technology stack overview:

 - Framework: **Next.js**, built using Typescript
 - Styling and branding config: **Tailwind**
 - Wallet/on-chain data & network interactions: **Polkadotjs**

### Configuration:

To make the template generic & simple to configure, we shall use 3 main points of modifation:

- **Markdown Files** - To populate the project copy thorough various sections of the template
- **.ENV configuration file** - To configure various settings that may be required for querying data on-chain and various other uses around the template. A few config variables to include would be: `PARA_ID`, `HOMEPAGE_LINK`, `DISCORD_INVITE_LINK`, `TWITTER_ACCOUNT_USERNAME`, `BLOG_LINK`, etc
- **Tailwind.config.js** - To configure key branding aspects. e.g Colours, Font, etc

These as well as further configuration steps shall be outlined the accompanying documentation and tutorial article.


### Mockups:

### Project Overview/Description Section

**Wireframe**

![image.png](https://user-images.githubusercontent.com/14836056/202225912-19b5906d-e532-40ce-bfb4-376d44bf381c.png)


**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202226004-2c7ac951-db82-4704-8c58-e744d9aa28e1.png)


### Crowdloan details & timeline Section
**Wireframe**

![image.png](https://user-images.githubusercontent.com/14836056/202226870-2e319a79-5d36-441b-90df-6c670f4fc995.png)

**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202226931-d3da8dfc-b45e-42fe-ad80-99c21e460a67.png)

### Crowdloan Rewards Section:

**Wireframe**

![image.png](https://user-images.githubusercontent.com/14836056/202229039-c810bde8-8860-43da-a165-02c89d5e6e6c.png)

**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202229444-51223716-aa35-440d-9db2-8a177f927eb1.png)


### Crowdloan Contributions Section:

**Wireframe**

![image.png](https://user-images.githubusercontent.com/14836056/202388654-9b8bb827-a74d-4885-b767-d282f8f4e575.png)

**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202388697-b7971a33-1adb-4d42-9115-f81802c251ec.png)

### Competing crowdloans Section:

**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202399108-f1c388fd-06df-4c46-9e1d-030c7719f4b2.png)


### FAQ Section:

**Example Mockup**

![image.png](https://user-images.githubusercontent.com/14836056/202399482-2cf6ba84-bff1-4845-bbfd-7aaca1919203.png)


### Ecosystem Fit

As outlined above in the Project Overview, this project is targeted toward project maintainers and their respective communities/contributors that are undertaking a crowdloan campaign. This ideally would help with eliviating some of the workload on the project maintainers while also providing conclusive visibility of a crowdloan to the wider Polkadot ecosystem at large and an easy approach to contributing to it.

Similar implementations/projects:

 - https://acala.network/acala/join-acala
 - https://mantanetwork.medium.com/the-calamari-crowdloan-on-kusama-74a3cb2a2a4b

## Team :busts_in_silhouette:

### Team members

- **Bryan Mutai** : Full-Stack developer and web designer

### Contact

- **Contact Name:** Bryan Mutai
- **Contact Email:** work@bryanmutai.co

### Legal Structure

- **Registered Address:** 90 JGO, James Gichuru Road, Lavington, Nairobi, Kenya - P.O.Box 1669-00100 Nairobi GPO
- **Registered Legal Entity:** Mutai Solutions

### Team's experience

I studied software engineering at the University of Glasgow, I currently have 5 years experience in web design & development and have been working as a freelance web developer, working in various programming languages (Typescript/Python) and in various frameworks and libraries (React/Angularjs/Django). Over the past 2 years I have also been contributing towards various blockchain related opensource projects. Recently in particular:

- Designed & built a Voting Delegation Dashboard for the APWine DAO using React/Typescript/Tailwind - https://vote-delegation-dashboard.vercel.app/
- Contributions to the Shapeshift Web App & related KeepKey hardware wallet features. - https://github.com/shapeshift/web/commits?author=brymut
- Integrating price data for Superfluid tokens into the Gnosis Safe web app backend - https://github.com/safe-global/safe-eth-py/pull/381
- Added support for Zora NFTs viewing & the Celo blockchain onto the Mask.io browser plugin - https://github.com/DimensionDev/Maskbook/commit/810999f38a09df8d5cefb490b4ca475b837458bc & https://github.com/DimensionDev/Maskbook/commit/c5cfdf393baf6cf7997f66cbabc5e5952dc8cb4d
- Github Page: [https://github.com/<team_member_1>](https://github.com/brymut/)

### Team LinkedIn Profiles

- [https://www.linkedin.com/in/bryanmutai/](https://www.linkedin.com/in/bryanmutai/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration**: 1 Month
- **Full-Time Equivalent (FTE)**: 1
- **Total Costs**: 5,600 USD

### Milestone 1

- **Estimated duration:** 1 month
- **FTE:**  1
- **Costs:** 5,600 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can deploy an instance of the template for their project|
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.	| Docker |	We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.|
| 0e. | Article | We will publish an article that explains the core functionality of the template and intended use as well as a step by step tutorial targeted towards developers on how to configure, modify & deploy the template on a popular hosting platform like Vercel |
| 1. | Template User interface implementation | I will design and implement the template UI using Tailwind in the Nextjs framework. The user interface will include: Project information, rewards schema, current contributions, time left in the crowdloan and information on the contribtions made after the crowdloan ends as shown simulated in the mockups above  |
| 2. | Contribution form & interaction | A simple interface for users to contribute directly through the deployed template through the entire cycle contribution, handling both a finalised contribution as well as any encountered errors |
| 3. | Example User interface | Using the output from 1 & 2 I will create a sample crowdloan deployment that would be the result of implementing the Front End template following the steps outlined in the output from 0d. |


## Future Plans

- Core maintainance of project, such as critical bugs and security updates
- Implementing/merging community suggestions/Pull Requests on features that could help improve the experience of both deploying and using the template.
- Collecting feedback from projects that consider/use this template.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
