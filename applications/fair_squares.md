# W3F Grant Proposal 

- **Project Name:** Fair Squares (FS)
- **Team Name:** FS
- **Payment Address:** //TODO DAI(agreed)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Fair Squares aims is to co-create a more transparent and fair housing market for tenants, co-owners and social investors. In order to make rental housing more affordable and accessible to a larger group of people.

- A brief description of our project.

Fair squares aims to implement the return-on-rent variable on rental houses that has fractional ownership.This variable bring the investor and tenant in direct relationship. Our goal is to find the right balance for the affordable housing gap. A group of individuals, each bundling their capital to invest in a house that is for sale, with the purpose to rent it out. Based on their individual fractional share of the house they will get a yield which is the social return-on-rent.

In order to create affordable housing, while offering investors a better return compared to other defensive investments. The community agrees on the capped yield, which controls the rent and keeps it affordable. These parameters are governed by the council and stakeholders that strive for a fair housing market.  

By using Web3 technology in a semi-permissionless system for real-world assets, digital currencies and decision making we lower the barrier to entry to invest in the housing market and make it transparent and equitable. 


- Integration into Substrate / Polkadot / Kusama.

The Kusama and Polkadot ecosystem allows us to use the required building blocks through the relay-chain. The substrate framework gives us the runtime to be very specialized and bring out a protocol that does like clockwork to onboard assets and rent them out. The already open-sourced frame pallets and community work helps out a lot in this. 

Because of the social mission and required actions on-chain we want a feeless parachain while getting the security from the relay-chain. We are looking to collaborate and use parachain services for DIDs, stablecoins, storage protocols within the substrate web3 ecosystem. In order to combine the real word with assets, by a solid permissioned process and still connected to para and relaychain.

- Our Motivativation.

It is exciting to see DeFi rise, liquidity fights and blockchain tech evolve. We as a team are users of these products and believe there is not turning back from this. Nevertheless we are seeing the negative social economical consequences for the low and middle class even in developed countries. For us blockchain technology was a bigger promise and needs more woven fibers into the real-world. We want people to still earn returns on their investments, but develop for equitable systems that are accesible for all and stop the profit maximization mechanisms on basic needs. 


### Project Details


We are looking to develop a first usable version of the fair-squares node and interface. A fully rounded MVP that gives access to the core functions. We have been already coding on this since September 2021 on the code-base while participating to the APAC hackathon. Where we in very hacky way achieved parts of milestones 1 & 2 reusing parts of old archived substrate.dev codecase.  


Since then we having been discussing what the modules and pallets are required to make this a working software. We ave created this type of [interface](https://youtu.be/_8mnawfNpBQ) that will be for now our front-end. In the last milestone we have a UI sepcialist on board

#### Data model

![](https://mermaid.ink/img/pako:eNrFV1tP2zAU_itWngoU8Y7QpLEOrdLGEEU8RbJMfAoZiV3ZTlnF-O_zPU7iFva0Sm3Tc75zv9h9LSpOoTgvqoZIuajJoyBtyUp2tcI3pGlAoePT02MkeAPyiuKWUyxkyr74c3qK7gQQ2YmdJ5ZsiB_qqBW0hmjMlMwaRtdr5WVfS4YQ5bjSKhVgy54deWJbM2V-lOytlx0ZtwoQ2nDlxBCSG2AUrztGZSBtBN9wCdiyAlHAL6gUdjzS9OSWbwGTjWZsHTm1zp-BXe5-vjAQC6KINX-iuk0DaAOiAqYw10xq6UsmFWEV8DWq_eNebVgqLsgjOI2zz1XFO6ZqivzTks7RTCfOSmqy_V4u5iaZQbkmB5NLemQDOpFKdJWaOI6Q9yTng6tgX6WS9c--BUbqjKZRF1hcqqOPO_aTr94PXWj8jXcSQhW-uH4YF2cFjalZxZkS9UOnvY01vvFQfM9VVHOluwDfRCWG5BhKECbXOmK2jo2zqKXTClgAi-S34PWSbcEk6Dt_HBYrVqivVZr6IGcT7lTZWHUwDfyztkQ0UWgyCNTyhto03YksGYXfE0WDdrw13btKpCdgS3ogjekwpLgizYjWEuMIc51uOVuoVr4FDV3JmNVg9kuoZs2ZHKdjf0Li3F02vHpmXfsA4uzS-XF2D9VFqvdTrHxiODRGxqZJW2DHzB20aDN0dsl5E0drEJ7VMq1N6qQ3lMiGyg3k0nJmohnDc7EkYq5z9JxOGnF_61yv77yOgaPYsX0ONfzWbARkl4SMRJ8wdE-aDnqqSZwZV6ATpJnGSNQDi_Qb186pg900cWhPxkf2UkTP7GuOdIoSu_bUyOy-MPfei_3Aaz1I-kB7D-bm511YsiCy2HAg9-D3YZmkOnS6MtypEXe7X-R7hjsLzmzYLC4zuFlcZitmcfl1fCiewTTv15nM4sFA3sPlhjQDDN04PK8mU7B3ofoJScbrUPMjxOBl1l9PnmyereBRQMTyA1bcjPeMi_qxZvOtmf4IM2d2POz9nc_PVx_PtLH_S0jV6GqSBpQKzI3NFhSh-n4UpakuieC7iXjOkrn_YsvwqCEnuboM8jRYJx9I0duwbQZr5mMZDovzNlnUN2Q3vkb116_0M7yKedGC0BcIqv-gWLtloZ6ghbI414-UiOey0MeOxnUbnVP4Smvd3cX5mjQS5gXR18HVjlWR4FD-X46nvv0F3yGBHQ "Data model")

The techstack that will be created:
- Substrate node template, frame pallets and customized pallets based on FS logic
- Front-end template connected through WS + Polkadot.js for testing specific features.

//TODO
 deliver per milestones drawings of the flows. 


//REMOVE: 
What your project is _not_ or will _not_ provide or implement:

We are not aiming for an immediate parachain or live application. We are aiming for a live testnet, where a lot more testing, experimenting and interaction is required. After completion of all milestones we will  with other parachains are required to happen after the completed milestones. 

### Ecosystem Fit


- Where and how does your project fit into the ecosystem?

Looking at Kusama & Polkadot onboarding more specialized parachains offering generic functionality. We want to make use of these functions such as stable tokens, DIDs/ID, storage, privacy and messaging. We want to focus on creating a protocol and platform that focuses on solving affordable housing. It's a very specific idea in the substrate ecosystem, it has a social good focus with coordination of funds and actions in which we can automate the flow in the runtime. The fit is in the usage of relay-chain security and using all the parachain connectivity while allowing our own custom logic for the Fair Squares solution. 

- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?

The target audience for using the developed pallets are the end-users such as investors, sellers, verifiers, oracles. The current short-term goal is to further research and experiment. We are in talks with several institutions in the Netherlands that we rely on for a functional application for affordable housing. Our goal is to get into a functional MVP that can handle a case and learn from the interaction. This will help us gather information about the limitations of interactions between Blockchain and real-world processes, and devise additional solutions.

- What need(s) does your project meet?

FS project focuses is on utilizing the available building blocks that are known in the cryptosphere to make affordable housing possible with maximum as possible transparancy, while respecting pseudonimity of the users. The real world integration of blockchains are still minimal. We have payments for pyshical goods, but nothing really interacting with the real world, business and retailers. We believe that crypto systems implementation will look very different 5-10 years from now, we hope kick that of by focusing on a real-world problem. For now the need is for the solution just to be functional, but combined with good token-design fair distributions that gives access to equitable systems for future users.

- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?

No projects we aware of that are focusing on housing and/or real estate. There are however big parts of our design heavily inspired by the design of the governance layers in Kusama / Polkadot and Phragmén method for allocating funds in an asset. Outside of substrate based ecosystem there are a couple of real estate projects, maybe the most notable is RealT, but it just focuses on the return of rental houses, where the LLC takes care of everything on the background and users just see their tokens and returns. We want to open this up fully and create an open transparent system while lowering housing costs. 

## Team :busts_in_silhouette:

### Team members

- Name of team leader: Ilhan  Ünlü
- Names of team members: Mahir Özdemir, Kazunobu Ndong, Stephen Meyo Mba, Thibaut Segura and and Mrisho Lukamba 

### Contact

- **Contact Name:** Ilhan Unlu
- **Contact Email:** ilhan@fair-squares.nl
- **Website:** https://fair-squares.nl

### Legal Structure

- **Registered Address:** 's-Gravelandseweg 258 Room 226, 3125BK Schiedam, The Netherlands
- **Registered Legal Entity:** Fair Squares B.V.

### Team's experience

The idea of Fair Squares and work has been existing for 2 years. We wrote a light-paper to put things on paper and develop our idea further on paper. After that finished we decided to publish the idea in a hackathon to get some exposure and experience. The team that stuck after the APAC hackathon (Ilhan & Kazu). The team had limited experience in developing with Rust and Substrate, this is growing by the day.  After finishing the hackathon we had a much more clear idea of what we needed in terms of skills. After the hackathon Stephen joined us. We are not seasoned system developers, this will reflect in the FTE en Amount asked in the rest of our proposal, but we are very eager to achieve the milestones presented. 



- __Ilhan__: has experience with different blockchain development architectures. During his time with the Blocklab.nl (a innovation arm /subsidiary of the Port Authorities in Rotterdam) he has created different applications for Energy and Supply-chains using a decentralized stack. He was also a part of the first cohort runtime developers academy. Active member in Kusama / Polkadot blockchains governance and validating. 
- __Kazu__: Engineer in mechanical design at Fuji Electric. He started studying Rust in August 2021 and participated in 3 hackathons (2 with Polkadot and 1 with Phala) between August and November 2021. Most of what he has done can be found on [GitHub](https://github.com/ndkazu).  The first original program written with Rust is demonstrated in this [video](https://youtu.be/sMpUnaz_AiY)
- __Stephen__: Is a software engineer with experience mainly in .net environment, web app and desktop applications for different clients in banks, health and sport. He started to learn Rust in December with the objective to help concretize the project with his development skills according to the roadmap that we will define further. 
- __Mahir__: is responsible for the market part of the FS research and the pilots with municipalities and other stakeholders. He is involved as an entrepreneur and consultant in various IT solutions such as [unlocQed](https://www.unlocQed.com) (honest recruitment) and works on Weconomics Blockchain projects and is responsible for research, design and valorization. Mahir is not taking part in the grants program as his contribution is not technical, but is vital part of the team for busuiness development. 
- __Thibaut__: MBA and industrial design graduate, 15+ years of experience designing digital products and services for finance, insurance, luxury industry and governments. Thibaut will be focusing on th design and the front-end mainly in the last milestone. 
- __Mrisho__: Mrisho was a part of the APAC hackathon team but didn't get to really contribute. He is an active member in different substrate ecosystem channels. Studies intelligence robotics in multimedia at Malaysia University. Has 2 years experience on software engineering journey. 


Part of the team  team together has only ideating and been working on Fair squares and has not applied for other Web3F grants. 

### Team Code Repos

- https://github.com/Fair-squares  - Github Organisation
- https://github.com/Fair-Squares/fair-squares - substrate node-software
- https://github.com/Fair-Squares/front-end-template - front-end for FS

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/ilhanu
- https://github.com/ndkazu
- https://github.com/letodunc
- https://github.com/toosolid2003
- https://github.com/MrishoLukamba


### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/ilhan-%C3%BCnl%C3%BC-blocklab/
- https://www.linkedin.com/in/kazunobu-ndong-469313170/
- https://www.linkedin.com/in/stephen-meyo-193109a/
- https://www.linkedin.com/in/mahirozdemir/
- https://www.linkedin.com/in/thibautsegura/
- https://www.linkedin.com/in/mrisho-lukamba/
- 
## Development Status :open_book:

- We started of with publishing a [light-paper](https://fair-squares.nl/lightpaper/fair/squares/2021/09/14/english_whitepaper.html). To bring light to the problem and structure the idea. We have interviewed 4 organisations about these research questions presented in the light-paper that we thought needed to be enlightened. The link to the research results can be found [here](https://docs.google.com/document/d/1Y50h3JthlXBGSiG92eQP8MghSd4H07N8GKhO9d_nz7w).
- We have presented our project at amsterDOT conference, the link for the video can be found [here](https://youtu.be/rZdqHgn69wU)
- We have discussed this project with several members of the polkadot community. We talked about it couple of times with Raul from the Polkadot community whether a treasury proposal would be good, we didn't go for this as we saw a lot of parachain development projects to Kusama of Polkadot being rejected by the council. 

//
## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 7 months
- **Full-Time Equivalent (FTE):**  2
- **Total Costs:** 36000 USD

### Milestone 1 — Implement module roles, fund and role-verifiers 

- **Estimated duration:** 6 weeks
- **FTE:**  2
- **Costs:** 7200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up the fs-node and how the housing-fund and  will show how the new functionality works and how to use the functions.|
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the roles modules. In which a user can register on-chain with minimal information and participate in the fair-squares platform |
| 1. | Substrate pallet: **roles** | We will create a Substrate pallet in which users can set their roles when they register, for now this will be a single role and in the future these could be multiple roles by merge identities together. They can choose between investor, seller, tenant, servicer (generic). The goal of deregistering also is possible.| 
| 2. | Substrate pallet: __housing-fund__ | We will create a Substrate module in wich users can desposit and withdraw their funds. This fund registers which `accountId`, `amount`, the `blocknr` and other variables such as the `total_contribution` total per user whether a user has `withdrawn(bool)` their funds. And a total amount of the housing fund. These storages will be used further in next modules for the selection of investors. The housing fund will bid for a house, if it has the funds to bid for an asset, so it also needs a function to allow the bidding mechanism to reserve and lock and transfer the amount out of the housing fund and eventually in a happy flow transact for the asset. |  
| 3. | Substrate module: Role-verifier | built in the **roles-pallet**, this module will focus institutions that will verify users. We need to comply with legislation and if a user is going to for this part we are looking in the future. This part is where a user would start  | 
| 4. | Substrate chain | For this milestone we are trying to create the housing fund, in order for this to happen we need verified roles. To contribute you need the role of the investor. The role-verifier which will be tied to ID verification check if your an investor. This will be in the future connected to a DID system and KYC. The role-verifiers will be appointed through sudo for now in this milestone. |  


### Milestone 2  — Onboarding a house (asset)

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 7200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains 1 and 2. How a seller can onboard a house. 2. How a seller can delegate the rights of selling to a real-estate agent, plus commission setting. 3. The required documents, price setting and deposit required. 
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. Also there will be integration tests covering the pallets and modules of milestone 1. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the onboarding module, governance structure for onboarding a house and flows that are possible. 
| 1. | **pallet-onboarding** | The asset will be a unique asset, for this the `pallet-uniques` will be used. The additional functionalities we will extend from the unique asset is that we add fracationalizing functionality on top of it. The asset needs to fractionalize after a sale is concluded to the new owners. Furthermore we will set a deposit mechanism for the onboarding party so if their are any 
| 2. | **pallet-voting**| We will create a pallet on top the frame pallets  module (//TODO Need more research exactly which frame-pallet we will build on) that will create new voting mechanims to onboard a house. The housing-council will be very much the first line of defence and it's structure and selection is very similar to the council as we know from kusama/polkadot. The housing council will be able to asses an asset and approve, reject, request more info. These function needs to be changed for the voting that comes from the housing council.  When approved the asset can continue to the investor voting. The investors are set by role and we want them to vote on wether an asset is worthy of investing, the investors don't know with certainty that their capital will be allocated on the house their voting. The selection of the investors will be for above a certain amount  |  
| 3. | Substrate chain | Pallets **onboarding** and **voting** give us the full functionality of onboarding assets while on-chain governance by the housing council act as a 2-step due diligence. The steps from milestone 1 will also be upgraded with this as we need new roles for council members. |  


### Milestone 3  — Bidding Mechanism

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 7200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains //TODO. 
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. Also there will be integration tests covering the pallets and modules of milestone 1 & 2. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the bidding mechanism module, what purpose it serves and why it's necessary. governance structure for onboarding a house and flows that are possible. 
| 1. | **pallet-bidding** | The bidding mechanism is key part of what makes FS fair, the bidding pallet focuses on calculating the allocations from the `housing_fund` it will assemble different investors according to the fair rule-set, which needs to be configurable on-chain. The Rules are as follows: _1._ First come, first serve (blocknr) _2._ If a share of the contribution is taken out the user will drop in the ranking (points ranking) _3._ No more than X% share per participant and no more than X participants. _4._ The housing fund is programmed to make a bid, but has to adhere to the above rules, then a bid can be placed.|
| 3. | Module: **timer** | We need an on-chain mechanism that checks every X hours (session) if new and old assets are available and it can bid if it has enough funds in housing fund. If already a bid took place it takes no action. If the housing-fund doesn't have the 
| 4. | Module: **fractioning** | When the bidding-pallet has assembled the set of investors. The percentages owned by the investors is known on-chain from the rules. 
| 5. | Substrate chain | The combination of the previous milestones and this one, with **pallet-bidding** gives us the automation that fs can bid on a house, with a set of investors selected by the fair algorithm. If the bid is successful there be an asset with fractionalized owners based on the selection done by the bidding pallet. **Note**: _for this milestone we will take a shortcut with finalizing the sale, the next milestone we will focus on making it more secure the interaction with the off-chain world._ |  

### Milestone 4  — finalizing sale and finding a tenant 

//New business roles, on-chain reporters ( notary)
- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 7200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains //TODO. 
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. Also there will be integration tests covering the pallets and modules of milestone 1,2,3. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** that explains the the usage of the functionality, why it's designed this way. 
| 1. | Module: **finalize** |Before the house title can be transfered to the fractional new owners if an asset sale is succesful, there needs to be check done by the appointed notary. It's needs to check if the asset is able to be transferred based on checks from it's own system. This will be ingrained in the **pallet-roles**|
| 2. | Module: **representative** | When the sale of an asset is finalized, the new fractionalized owners need a representative is required to pick a tenant  that will represent the house owners and find a tenant. The house owners  |

| 2. | Substrate chain | The combination of the previous milestones and this one, with **pallet-bidding** gives us the automation that fs can bid on a house, with a set of investors. This is what we want to achieve with this milestone.  | 

### Milestone 5 — UI development

- **Estimated Duration:** 6 weeks
- **FTE:**  2
- **Costs:** 7200 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**  that explains how the user can navigate through the interface. 
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** and **video** that explains what actions you can take on the front-end does and the build up of the several pages. 
| 1. |  **front-end** | With the back-end being finished, we need an interface to showcase Before the house title can be transfered to the fractional new owners if an asset sale is succesful, there needs to be check done by the appointed notary. It's needs to check if the asset is able to be transferred. |
| 2. | Total product FS | The combination of the previous milestones and this one, with UI gives us the  us the automation the first iteration of the Fair Squares platform that will allow us a crowdfunded fair housing protocol. | 


## Future Plans

### Short to medium term

- We intend to enter the substrate builders program with our developed solution, hopefully we are elegible to be fast-tracked. 
- We intend to bring-up a public live testnet with an interface in which everyone can use Fair squares. The developed solution is based on all of the functionality on the milestones. The time frames  might be tweaked so the platform can work faster. Setting roles will be publicly available and we will be monitoring the chain to see if we can assist and verify users. 
- We will notify partners we have interviewed and see based on our solution we have built to get their feedback and see if we can continue experimenting with them to build a next iteration, not only the software but also the 
- On the medium term we are looking to have funding that is neutral and benefits from this solution. This is usually governments. 

## Medium Term
- how you intend to use, enhance, promote and support your project in the short term, and


### Long Term
In 1-3 years from now we hope to found a legal framework and partnership with municipality, state or governmental level that gives us the pass to implement this. We aim to organize from the bottom-up with other parties that find this relevant and iterate together with them. Ideally we would needed to get funded by a neutral party that benefits from this. But we like to take it step for step. 

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** We have been around in the ecosystem for some time and we knew from the W3F grants program since it's inception.



 Work you have already done?
  - We have all finished most of the substrate.dev tutorials and guides that are available. We are well aware of all usable pallets the tools and support places we can ask.
  - Since the amsterDOT some teams such as Acala have offered to also support technically and other ways. Before the amsterDot we were in talks with Litentry for the DID programme, this resulted in a technical chat with their runtime engineers that we can get technical support from, but the application is not continuing anymore because of a change in their structure. 
  - We are in talks with municipalities in the Netherlands to build towards a case and apart from the technical part, we just need the partnerships and coalition just as much as the node-software.
  - Some structural parts of the milestones are done in the branche [structure-template](https://github.com/Fair-Squares/fair-squares/tree/structure_template)