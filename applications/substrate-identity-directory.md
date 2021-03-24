# Open Grant Proposal


* **Project Name:** Substrate Identity Directory
* **Team Name:** https://github.com/Shard-Labs
* **Payment Address:** 0x526F2bC9a5fc0839AD4956b06CB6dFf26F9503be


## Project Overview 
This application is in response to following RFP https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/identity-directory.md

### Overview

Identity Directory is a proposal of a fully client-side web application that would read and display registered identities on Substrate-based chains which implement the Identity pallet. By browsing a specific link, a user would be able to see beautifully rendered identity data of an on-chain identity along with all the metadata in the identity entry, an avatar if provided, and any verifications from the registrars on-chain. Users would be able to match and verify identities and also have access to sending tokens directly to another user.

GOALS:
Create a web service to query on-chain identities. The service accepts and reads input parameter as address, index, or XXX and
If the input parameter is address or index create a single page view for a specific identity
If the input parameter is neither address nor index create a list page view 



### Project Details 
A web service would have a way of reading the following links:
https://polkadot.polkaperson.com/<identity>
https://kusama.polkaperson.com/<identity>
Web service would read the <identity> parameter and make a query to the corresponding chain and retrieve identity data of the requested identity. 
Web UI would have two ways of viewing data. A list view and a single page view. A list view would be a way for users to query the chain and display all registered identities on the Kusama and Polkadot chains. This view would be the default view if no specific identity is queried and provided in the URL. By clicking on the specific identity in the list, a user would be redirected to a single page view for the chosen identity. A single page view would be a way for users to query a specific identity data of the on-chain identity. This view would be a way for users to see identity activities indicative of a member’s reputation containing identity card of an on-chain identity along with all the metadata in the identity entry, an avatar if provided, any verifications from registrars in the chain, and buttons that allow you to send tokens directly to the user. Single-page view UI will contain multiple closable and re-orderable columns so users can order them as they choose. The order will be remembered across the app with the option to toggle and freeze a layout for a specific user. It would support a plug-in ecosystem for different sub-views of identities.

Mock-ups:

![List view](https://i.imgur.com/p47ecmi.png)
![Single page view](https://i.imgur.com/wCDbaID.png)



## Team 

### Team members
* Darko Macesic (https://www.linkedin.com/in/darko-macesic/)
* Karlo Majer (https://www.linkedin.com/in/karlomajer/)
* Ana Milic Strkalj (https://www.linkedin.com/in/ana-milic-strkalj/) 

### Contact
* **Contact Name:** Ana Milic Strkalj
* **Contact Email:** ana@shardlabs.io
* Website https://shardlabs.io

### Legal Structure 
* **Registered Address:** Kroz Smrdečac 19 Split, Croatia
* **Registered Legal Entity:** SHARD LABS d.o.o.

### Team's experience
We have experience in several private and open source projects aswell as projects on polkadot ecosystem. Most notable and relatable to the proposal:
- ink! Remix Plugin (https://github.com/Shard-Labs/ink-remix-plugin)
- ZoKrates (https://github.com/Zokrates/ZoKrates)
- ZoKrates Remix Plugin (https://github.com/Shard-Labs/zokrates-remix-plugin)
- Sourcify (https://github.com/ethereum/sourcify)
- Kusama Tips Widget (https://github.com/Shard-Labs/kusama-tips-widget)


### Team Code Repos
- https://github.com/Shard-Labs
- https://github.com/dark64
- https://github.com/karlomajer
- https://github.com/anamst


## Development Roadmap 

### Overview
* **Total Estimated Duration:** 9 weeks
* **Full-time equivalent (FTE):**  3
* **Total Costs:** 34500 DAI

### Milestone 1 Designing and design implementation for list page / individual identity page. 
* **Estimated Duration:** 6 weeks
* **FTE:**  3
* **Costs:** 24.500 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 / MIT / Unlicense |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how the user can utilize the basic application. |
| 0c. | Article/Tutorial | We will write an article or tutorial that explains the work done as part of the grant. |
| 1. | Design a list page | Create design mockups in Figma. |
| 2. | Design an individual identity page | Create design mockups in Figma. |
| 3. | Implement list page | Build UI components in VueJS used in the identity list page. | 
| 4. | Implement individual identity page | Build UI components in VueJS used in the individual identity page. 
| 5. | Implement query logic for identity data | Implement query logic which will be used to retrieve identity data. |  
| 6. | Query identity activities | Implement query logic which will be used to retrieve activities indicative of a member’s reputation. |  



### Milestone 2 Implementing logic for sending tokens. Support for the offline mode.
* **Estimated Duration:** 3 weeks
* **FTE:**  3
* **Costs:** 10.000 DAI

| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 1. | Implement logic for sending tokens | Implement logic for sending tokens; retrieve balance, parse inputs, display transaction fee, create the transfer transaction. |
| 2. | Make the web service work offline | Web service can be used in offline mode; the user can specify a local node to which will the service connect. |
 

## Future Plans

After finishing milestones 1 and 2 users can utilize the basic application which supports querying by address, index or identity fields. Application has a list page and a single page view with a basic info column fully functional. Users will be able to set their own node endpoint.
There will be a follow-up for the project that would support a plug-in ecosystem for different sub-views of identities. On-line version would come with some default plug-ins deactivated and an off-line version would support simple installation of other plug-ins. Default plug-ins would be basic info, governance, treasury and validator, and optional plug-in would be transaction history, identity history, remark history and society plug-ins.


## Additional Information  

Possible additional information to include:
* What work has been done so far? 
    - We have created v0 of the design and included them in the application.
* Are there are any teams who have already contributed (financially) to the project? 
    - No.
* Have you applied for other grants so far? 
    - We have received funding and completed Ink! Remix plugin and Kusama embeddable tipping button.
