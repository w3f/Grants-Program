# W3F Grant Proposal

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with a `>` (such as this one) can be removed.
>
> See the [Grants Program Process](https://github.com/w3f/Grants-Program/#pencil-process) on how to submit a proposal.

- **Project Name:** Imbue Network
- **Team Name:** Elamin LTD
- **Payment Address:** 0xcF27835b42Da4C1E44f94b671cBC544de828144d (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:
Imbue Network was born out of the growing problem of funding projects. There is a real problem in the polkadot ecosystem with funding, projects tend to launch on ETH as an easy way out due to lack of options. The problem is then compounded because of seed/private investors so by the time the token launches, their community can only get a chance to invest through severly limited whitelists

Imbue Network wants an end to Eth raises and whitelists. We aim to solve this problem by building a parachain that allows its token holders to propose and then fund a proposal.

### Project Details

Imbue network aims to become a DAO and a parachain, so we will be heavily dependant on both Substrate/Polkadot/Cumulus

We aim to build on top of the great work the OAK network has done around [quadratic funding](https://github.com/OAK-Foundation/OAK-blockchain/tree/master/pallets/quadratic-funding) and build a custom pallet that holders of the Imbue network token ($IMBU) will be able to propose a new project and idea, detail how much they need and milestones. The proposal can also detail stages in their milestones and split the required amount. I.e Claire is a founder of a project and needs $100k and detailed 5 milestones. Claire needs $10k upfront to start off with then once milestone 1 is complete Claire requires a further $40k for milestone 2 and 50k for milestone 3.

We also will build a UI that allow users to connect their polkadotJs wallet to allow other holders to vote on the projects they want to see implemented.

Once voting completes, DAO council members will then approve the winning proposals and allocate a portion of the funds - % that was defined in milestones - immeditely.

Once the founder believes they completed their first milestone they can use the pallet to initialise a vote, only the original funders can then vote to validate whether the milestone was completed successfully or not. If the vote passes the next stage of funds are unlocked.

- For MVP we hope to achieve:
  - Grants pallet - where holders can propose projects/ideas and receive funding
  - Democracy pallet - where funders can vote on proposals and milestones
  - DAPP integrated with polkadotjs for a more seemless user experience.
  
- What wont be ready but we hope to add
  -  Funding will initially only be done via the $IMBU token, but we hope to add other currencies as we grow. We will also explore working with statemint to manage this funds

An overview of the flow is detailed here, please bear in mind this is just showing the happy path

- [lucid chart](https://lucid.app/lucidchart/300b88e2-bbcc-4782-b46f-198a04dff9e3/view)

We will be adding signitures for each pallet call over the next few weeks.


### Ecosystem Fit

We believe we are solving a real problem in the polkadot ecosystem, and cannot think of any other project that aims to do what we are trying to do.

We do not consider IDO platforms as a solution to this problem. There is also the governance aspect which is also missing from the space but is also needed

However, https://aragon.org/ is something similar that is built on top of Etherum. We believe our USP is the funds being unlocked in stages and allowing funders to vote on those milestones

## Team :busts_in_silhouette:

### Team members

- Sam Elamin
- Aala Sharfi
- Kanthan Segeran

### Contact

- **Sam Elamin:** 
- **sam@imbue.network:** 

- **Aala Sharfi:** 
- **aala@imbue.network:** 

- **Kanthan Segaran:** 
- **kanthan@imbue.network:** 
  
### Legal Structure

- **Registered Address:**  56 Balder Rise, London. United Kingdom SE12 9PF
- **Registered Legal Entity:** Elamin LTD

### Team's experience

Sam has over 15 years experience as a developer and has worked in some of the world's largest companies such as Sony Playstation,Discovery Communications and JustEat. He has extensive experience in Big Data and for the past year has been leading the tech team @ Kylin Network

Kanthan has 10 years of experience in IT specializing in integration, cloud & security architecture
He has also worked with Sam @ Kylin Network

Aala is a multidisciplinary designer specializing in branding and publication design. Aala's strengths lie in identity design, digital and print design, with technical skills in Adobe CC, (AfterEffects, Photoshop, InDesign and illustrator) Microsoft Office, Figma as well as AutoCAD and Sketchu


### Team Code Repos

- https://github.com/ImbueNetwork

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/samelamin
- https://github.com/aalavanthan18

## Development Status :open_book:
We are still at the early stage of development, getting our website out in the next week or two. We do have some wireframes around how people will be able to propose/vote for project which can be found below

- https://github.com/ImbueNetwork/website-assets/blob/main/templates/new-project.jpg
- https://github.com/ImbueNetwork/website-assets/blob/main/templates/project-details-page.jpg
- https://github.com/ImbueNetwork/website-assets/blob/main/templates/projects.jpg


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/samelamin/
- https://www.linkedin.com/in/kanthan-segaran-5783708b/
- https://www.linkedin.com/in/aala-sharfi-90b35a95/


## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 6-9 months)
- **Full-Time Equivalent (FTE):** 3 FTE, 2 PTE
- **Total Costs:**  30k.

### Milestone 1 — MVP start

- **Estimated duration:** 3 month
- **FTE:**  2 FTE, 2 PTEs
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Dapp | UI to add proposals onchain. This can be either stored onchain completely or a combination of IPFS and onchain. The UI will be written in Typescript/NodeJS and interact with PolkadotJS wallets to deduct costs for voting/adding proposals
| 0c. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Substrate module: Grants pallet | Add grants pallet to add proposals onchain, each proposal has a unique ID which votes will be counted against. This pallet will be called by project proposers to submit new projects/milestones.

The grants pallet is essentially a data store of grants, it will also need to track progress on each grant application


I.e one unique grant ID has a one-to-many milestones relationship and the council will determine when to mark a milestone as complete

### Milestone 2 — Adding new features and refining existing ones

- **Estimated Duration:** 3 month
- **FTE:**  2 FTE, 2 PTE
- **Costs:** 15,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | DevOps | Building out CI/CD pipeline using github actions
| 0b. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0c. | Voting Pallet| Add voting module to add governance and votes on grants
| 0d. | Public board | Work in an agile manner and maintain a public board so the community could keep an eye on progress
| 0e. | Dapp | Allow voting on proposals via a linked PolkadotJS wallet. Votes on new projects/milestones for existing ones. To be built in react
| 0f. | Article | We will publish a medium article and workshop that explains how the grant funds were spent as well as detailed guides on how to spin up the collators and submit a proposal then vote on it
| 1. | Substrate module: Democracy pallet | Votes pallet to allow voting on proposals (working alongside the grants pallet). Votes meant to be stored via IPFS. Voting will be done with 1 $IMBU = 1 vote. 
| 2. | Substrate module: Funding pallet | Works alongside the democracy pallet to unlock funding in the stages defined by the project orignally. This will be called after council votes on approval of funding/milestones. This will also be called by the proposer to withdraw the approved funds. Can potentially be merged with the grants pallet

The proposed flow for milestone 2 is: 

- Given Alice is proposing an idea/project, alice submits this proposal via the UI. The proposal details can be stored on/offchain but the ID needs to be stored onchain.

- The council approves it which then goes to voting via the democracy pallet.

- $IMBU holders vote on the project they want to see implemented by partially funding a locked account.

- The council then approves the initial amount (defined by Alice in her milestones ) via the treasurey pallet(if required) and unlocking a % of funds that the $IMBU holders locked

- For each and every milestone Alice completes, she submits it and the whole process restarts again culminating with the treasury unlocking the % of funds required for that milestone. The only difference here is that only IMBU holders that funded the project (and council if treasury was involved) can vote on milestones. For simplicity's sake 1 $IMBU = 1 Vote


The Funding pallet needs to be built in such a way where it can either fund the project proposals in the native IMBU token or in any other token.
We can reuse the treasury pallet but change it in such a way to allow this iterative milestone unlocking behaviour.

...

## Future Plans

We want to build out Imbue network as a DAO, We also want to build out the ability to allocate funds on the different polkadot currencies so a proposer can choose which currency they want to be funded in

Ideally, for future milestones, we would like to remove the need for the council completely and have this fully determined by the IMBU holders. Also a vote can be a fraction of an IMBU so your vote weight is equal to the % of the amount funded

Work with Parity on how we can utilise Statemint with fund storage/allocation

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website 

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Sam has already worked on building the kylin parachain almost single handedly, grew the team to 4 before starting Imbue Network. He is more than capable of making the Imbue network vision a reality
