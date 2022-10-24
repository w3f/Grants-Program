# Open Grant Proposal

> This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the [Open Grants Program Process](https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md) on how to submit a proposal.

* **Project Name:** BLDG App
* **Team Name:** BLDG BLOX INC
* **Payment Address:** 3BR66M3qUbYKnUaP7ZF3G6cuyCcEF6nbgf
* **Status:** [Terminated](https://github.com/w3f/Open-Grants-Program/pull/131#issuecomment-874245652)

*The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up: 

### Overview

The Bldg App is an online bulletin board to support organizations to work closely with their communities. Since launching in January 2020, our platform has supported dozens of diverse organizations including universities, coworking spaces, and nonprofits to create and share resources.

Our first milestone is to deploy smart contracts to log project engagement activity and form an ESG (Environmental, Social, and Corporate Governance) ratings dashboard. This dashboard will allow institutional users to measure project and campaign growth.

Our second milestone aims to help onboard users to the polkadot ecosystem. We’ll be integrating with polkadot.js and introducing users to the web3 fundamentals. Make use of current in development polkadot SDKs around user identity and data management (e.g kilt.io)

After 5 years of developing various creative and social-impact programs in the blockchain sector, we began developing the Bldg App in 2019 to provide an alternative infrastructure for community management and member contributions. Our aim was to develop an application with public traction first, then integrate smart contracts so that organizations and users could have more confidence and control over their data.

With our MVP live and supporting organizations across the US, we’re moving to the next phase of bridging the platform with blockchain through analytical and rating tools such as this ESG dashboard. 

### Project Details 
Core functionality for the ESG ratings dashboard is split into calculations, storage and visualisations.

**ESG Rating Calculations** – Serverless functions
The rating system will initially be run as a callable serverless function. Passing input data (TBD) returns rating value and/or submits corresponding value with a timestamp and issuing authority (initially BLDG BLOX inc/BLDG app.)
* / Calculate ESG Rating 

**ESG Rating Dashboard UI** – Front-end Data visualisations
* / Request All
* / Request By Project ID

**ESG Rating Data Storage** – Smart Contract Interactions 
* / Request Latest By Project ID
* / Request All By Project ID
* / Submit By Project ID

**Smart Contract <–> Jamstack bridge** – Serverless functions
// Matches above smart contract requests to be stored in a real-time database – removing the need for individual users to continually interact with the blockchain cientside. 
Scheduled tasks to run and submit ESG rating calculations

**Tech Stack**

The Bldging app MVP uses the jamstack style architecture. A pre-rendered SPA served via Netlify. We use Google Firebase real-time database for data storage, Firebase authentication for ease-of-use Oauth and serverless functions where necessary.
The front-end is powered by Nuxt.js

We’ll provide documentation, examples and source code via github (https://github.com/BLDG-BLOX/) for the following.
  * Polkadot parachain based smart contract for Submitting/Reading Project based ESG rating values
  * Serverless functions for bridging data from on-chain to off-chain database
  * Alternative dashboard UI for viewing and verifying ESG ratings  – a replica of what we’re using internally for the Bldging app extracted for ease-of use.
  
* Current MVP running at  – [http://bldg.app/](http://bldg.app/ )
* Information and articles can be found on medium at [https://medium.com/bldg-blox](https://medium.com/bldg-blox)

### Ecosystem Fit 
Currently, ESG analysis and data are created through private services (i.e. Morningstar, MSCI, Sustainalytics) with very little information available for public use. Our aim is to expand on real-time ESG analysis produced by the user and organizational activity on our platform, all verified and secure on-chain.

We believe this to be a unique opportunity to transition our current and new users onto blockchain while deploying a consumer application on Polkadot. 


## Team :busts_in_silhouette:

### Team members
* Michael Lee, CEO
* Sam Billingham, Lead Engineer


### Contact
* **Contact Name:** Micheal Lee
* **Contact Email:** micheal@bldgblox.io
* Website: https://bldg.app/

### Legal Structure 
* **Registered Address:** 100 Bogart St. Brooklyn NY, 11206
* **Registered Legal Entity:** BLDG BLOX Inc.

### Team's experience
* Our team has 5 years of experience with blockchain program development and creative programming. Interest and development in blockchain began with the Steem protocol, initially launching the Sndbox Incubator as a foundational program for global participants to launch social enterprises through the various tools available on Steem. 
* Our flagship project included Steem Park (https://youtu.be/TChGLKaspFk), the first public design project launched through blockchain, with a 10,000USD grant support from the Steem Foundation.
* Over the years, our office has support several blockchain companies with creative and community development including Cryptokitties, Blockade Games, the TQ Tezos, and other. Sample projects can be found on thecreativecrypto.com.


### Team Code Repos
* [https://github.com/Sambillingham](https://github.com/Sambillingham)
* [https://github.com/code-with-sam](https://github.com/code-with-sam)

### Team LinkedIn Profiles
Micheal Lee: [https://www.linkedin.com/in/michaelslee54/](https://www.linkedin.com/in/michaelslee54/)
Sam Billingham:  [https://www.linkedin.com/in/sambillingham/](https://www.linkedin.com/in/sambillingham/)

## Development Roadmap :nut_and_bolt: 

### Overview
* **Total Estimated Duration:** Project will launch in February/March 2021 (~3months)
* **Full-time equivalent (FTE):**  2
* **Total Costs:** ~20,000 USD (1.2 BTC)

### Milestone 1 — ESG Ratings Dashboard
* **Estimated Duration:** 6 weeks
* **FTE:**  2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions. |
| 1. | Interface Designs | Wireframes and designs provided in Adobe XD to showcase dashboard | 
| 2. | Smart contract | We will create a smart contract for submitting ESG (Environmental, Social, and Corporate Governance) rating values for individual projects/organisations. Written in Ink to be deployed on a polkadot parachain. Contract functionality to support read/write storage access of rating value (rating, issuing/signing authority & timestamp)  |  
| 3. | Automate ESG Ratings | Node.js scheduled serverless functions for calculating and submitting ESG values to smart contract. Will calculate ESG (TBD) using data provided by clientside app input and/or cloud database (Firebase) and broadcast function calls to substrate chain using JS polkadot/api. Ratings to run periodically (daily/weekly) and on demand. |  
| 4a. | Dashboard | Vue.js powered SPA dashboard interface – showcase a project’s current and historical ESG ratings.  |  
| 4b. | Dashboard | View and verify issuing authority. Show the percentage of onchain/offchain data used in the calculations. Where possible provide access to raw data |  
| 4c. | Dashboard | Searching, sorting & filtering UI   |  
| 4d. | Dashboard | Shareable individual card/view per Project |  
| 5. | Bldg.app | Integrate dashboard with current BLDG.app MVP |
| 6. | Example | We’ll host a separate prototype version of the standalone dashboard UI |
| 7. | Article/Tutorial |  We will write an article and/or video tutorials that explain the work done as part of the grant and how to make use of it. 

### Milestone 2 —  User Blockchain Onboarding (Identity Management)
* **Estimated Duration:** 6 weeks
* **FTE:**  2
* **Costs:** 0.6 BTC

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions. |
| 1. | Polkadot.js | Integrate polkadot.js extension  | 
| 2. | Link Accounts | Allow users of bldg.app to link internal account with a Polkadot parachain account |  
| 3. | Identity Protocol |  Integrate with third party identity protocol  or data management SDK (e.g Kilt.io) |  
| 4. | Data Metrics  | SAssign metrics to individual users – e.g NGO-online-contributor for activity within BLDG application in NGO based projects |  
| 5. | Article/Tutorial | Showcase how bldg.app is integrating with other parachain based protocols in a series of walkthrough articles/videos. The advantages it provides and how other applications can do the same. 


## Future Plans
* Our plans include a number of further milestones in blockchain integration with Polkadot. 
* Once the dashboard is complete, several key metrics will be integrated into the front end of the Bldg App with links back to the parachain explorer. 
* Finally, leveraging ESG data for institutional grants, investing, donations, and crowdfunding. We are currently speaking with the Acala team to explore how to integrate stablecoin transactions for this purpose. 


## Additional Information :heavy_plus_sign: 

* What work has been done so far?
    – The Bldg App MVP is live – http://bldg.app/
* Are there are any teams who have already contributed (financially) to the project?
    – No
* Have you applied for other grants so far?
    – No
