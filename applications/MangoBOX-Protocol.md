# W3F Grant Proposal



- **Project Name:** MangoBOX  Protocol
- **Team Name:** MangoBOX  labs
- **Payment Address:** 0x33e69715988126eB3653bFAfd338320BE9A10cd0(USDC))
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2 



## Project Overview :page_facing_up:



MangoBOX is a fork and upgrade of fund-raising protocol Juicebox on Ethereum. It rewrites the logic and functions of Juicebox in the smart contract language of Ink! and allows the ecological projects in Polkadot to raise funds from their community and introduce the Juicebox treasury management model into the Polkadot ecosystem. Anyone can utilize the MangoBOX platform to freely create a project fundraising page, customize the funding structure, customize how the project allocates funds and reward community members with tokens.



### Overview

- **If the name of your project is not descriptive, a tag line (one sentence summary).**

The Ethereum fundraising protocol Juicebox is the fundraising platform of the famous DAO organizations ConstitutionDAO and AssangeDAO, while the MangoBOX Protocol is a fork and upgrade of Juicebox. We introduce Juicebox into the Polkadot ecosystem and rewrite the logic and functions of Juicebox in the smart contract language of Ink!.  MangoBOX allows all types of projects in the Polkadot ecosystem to raise funds from the community. Anyone can utilize the MangoBOX platform to freely create a project fundraising page, customize the funding structure, customize how the project allocates funds and reward community members with tokens.



- **A brief description of your project.**

Through MangoBOX, anyone or any organization can configure and deploy Ink! smart contracts with no need for coding and ultimately achieve the project's fund-raising and token allocation.

Through MangoBOX,  each payment made to the project by the community users will mint and allocate the project's Tokens to payers, and allocate a certain percentage of Token (retention rate) to a set of addresses preset by the project owner. The total number of Token minted for payment will be affected by the allocation discount rate. All funds received by a project will be considered as premium if it exceeds the funding target. These funds will become the community vault. Every Token holder can choose to how to allocate these capital premiums  by redeeming(burning) their tokens. 

Projects crowdfunded on MangoBOX can configure Token distribution in multiple ways. For example a project with 0% discount rate, 10% redemption bonding curve, 10% retention rate and 1000DOT financing target is completely different from  a project with 20% discount rate, 100% redemption bonding curve, 50% retention rate and 500DOT financing target. There can be many interesting configurations in these gradients, and there is no way for the project sponsor to know in advanc e what the best model will be, that simply because the vision and goals of each project are different, and that there is no precedent or data for decision-making. Each project can experiment on its own and find what works best for its needs.

The core function of MangoBOX is fund-raising which contains flexible financing, capital allocation and exit mechanisms. The beauty of MangoBOX is that it enables dynamic ownership to transfer between project providers and project funders. By funding a project, community members can obtain the project's original tokens and become the partial owner of the project. This enables community members to benefit from being involved in the project and encourages them to help the project succeed. 

On the smart contract platforms built on Polkadot para-chains via MangoBOX,  every project provider can raise and use funds transparently which ultimately helps the project providers and funders build a stronger trustful relationship. 

Each of every contribution, redemption, withdrawal and deposit on MangoBOX is transparent. MangoBOX makes the source and whereabouts of funds very clear, and allows the community to assess the value and risk of the project. This complies with DAO requirements and represents the spirit of Web3, from community to community.



- **An indication of why your team is interested in creating this project.**

On November 11, 2021,  a group of crypto enthusiasts launched the ConstitutionDAO, in a bid to raise funds through the DAO to buy the first printed version of the U.S. Constitution auctioned by Sotheby's. As of November 19,  Constitution DAO raised  $47 millions worth of ETH with over 17000 contributors. During the fundraising process of ConstitutionDAO, contributors contribute a certain amount of ETH  and will be rewarded with the corresponding PEOPLE Token. By voting, Token decides the usage of the copy of the ConstitutionDAO, including its exhibition venue and method.

On February 8, 2022, AssangeDAO, a decentralized autonomous organization aiming to rescue Assange, raised more than 17,000 ETH. Vtalik Buterin, the founder of Ethereum, participated in the donation.

The two DAO organizations, ConstitutionDAO and AssangeDAO, have also become the two most popular DAO organizations in the past six months, triggering a wave of development in the entire DAO industry.

However, how did these two DAO organizations raise tens of millions of dollars and manage these capital funds ? They both made the same choice: Juicebox.

Indeed, AssangeDAO and ConstitutionDAO are both DAO organizations built on the Juicebox platform which is responsible for fundraising, fund management, community token issuance and incentives. The huge success of AssangeDAO and ConstitutionDAO also indirectly proves that Juicebox is a trusted DAO capital management tool.

Juicebox is a programmable treasury built on the Ethereum mainnet and a governance-minimized protocol that provides community funding for individuals and projects. In the crypto world, independent artists, developers, DAOs, and general public products, need a simple, convenient, fast, and secure way to capture the value they create, generate reliable cash flow from it, and then share it back to the community. Juicebox is one such fund raising and management platform.

Juicebox offers a brand new solution for DAO treasury management and arranges the funds and its usage by the project in advance, and then raises funds from the community. According to the current operation, Juicebox has attracted over 500 DAO organizations to raise funds, and there have emerged ConstitutionDAO and AssangeDAO that drew the attention of the entire crypto community. It is fair to say that the treasury management model   of Juicebox has been proven to be a success to a certain extent. Hence, we hope to introduce Juicebox's product model into the Polkadot ecosystem and this is why the Ink! version of MangoBOX came into being.



- **An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.**

We hope to introduce Juicebox's product model into the Polkadot ecosystem and now are building the brand new MangoBOX. We plan to utilize Ink! smart contracts to rewrite Juicebox's product functions and logic, and deploy the MangoBOX on all WASM supported para-chains on Polkdot and Kusama, to make all types of DAO organizations, independent artists, developers and more general public products achieve fund raising and management possible via MangoBOX.

But meanwhile, MangoBOX is more than Juicbox's fork and duplicate. It has its own unique product logic which is an innovation and upgrade based on Juicebox's fundamental features. For example, the project provider of the Juicebox treasury has unlimited power to mint governance tokens, which poses a huge threat potential to the treasury of the entire community. Any unethical project provider can steal all the funds in the treasury through the unlimited token minting power. The MangoBOX product function can set a limit on the project provider's minting power, which greatly reduces the potential threat to the DAO treasury.



### Project Details



-  **Documents of the main functions possessed by the MangoBOX protocol**



| Number | Subject                                                | Specification                                                |
| -----: | ------------------------------------------------------ | ------------------------------------------------------------ |
|     1. | Deploy an NFT that represents ownership over a project | Each project within the MangoBOX protocol is represented as an ERC-721 NFT.   Whoever is the owner of a project's NFT has access to [admin functionality]for that project within the protocol, which ultimately gives it control over the project's funds. |
|     2. | Configure funding cycles for a project                 | Funding cycles define contractual constraints according to which the project will operate. |
|     3. | Mint tokens                                            | By default, a project starts with 0 tokens and mints them when its treasury receives contributions.A project can mint and distribute tokens on demand if its current funding cycle is configured to allow minting. |
|     4. | Burn tokens                                            | Anyone can burn a project's tokens if the project's current funding cycle isn't configured to paused burning. |
|     5. | Bring-your-own token                                   | A project can bring its own token, as long as it adheres to [`IMBToken`]and uses fixed point accounting with 18 decimals. |
|     6. | Splits                                                 | A project can pre-program token distributions to splits. The destination of a split can be an Polkadot address, the project ID of another project's MangoBOX treasury . |
|     7. | Protocol fee                                           | All funds distributed by projects from their treasuries to destinations outside of the MangoBOX  ecosystem (i.e. distributions that do not go to other MangoBOX  treasuries) will incure a protocol fee. |
|     8. | Custom treasury strategies                             | Funding cycles can be customized.                            |
|     9. | Accept multiple tokens                                 | A project can specify any number of payment terminal contracts where it can receive funds denominated in various tokens. This allows projects to create distinct rules for accepting DOT, any ERC-20, or any asset in general. |
|    10. | Forkability and migratability                          | A project can migrate its treasury's controller to any other contract that adheres to [`IMBController`]. This allows a project to evolve into updated or custom treasury dynamics over time as it wishes. |



- **Documents of configure funding cycles**

Funding cycles define contractual constraints according to which the project will operate.

The following properties can be configured into a funding cycle:



| Number | Subject                                             | Specification                                                |
| -----: | --------------------------------------------------- | ------------------------------------------------------------ |
|     1. | Start timestamp                                     | The timestamp at which the funding cycle is considered active. Projects can configure the start time of their first funding cycle to be in the future, and can ensure reconfigurations don't take effect before a specified timestamp.Once a funding cycle ends, a new one automatically starts right away. If there's an approved reconfiguration queued to start at this time, it will be used. Otherwise, a copy of the rolled over funding cycle will be used. |
|     2. | Duration                                            | How long each funding cycle lasts (specified in seconds). All funding cycle properties are unchangeable while the cycle is in progress. In other words, any proposed reconfigurations can only take effect during the subsequent cycle.A cycle with no duration lasts indefinitely, and reconfigurations can start a new funding cycle with the proposed changes right away. |
|     3. | Distribution limit                                  | The amount of funds that can be distributed out from the project's treasury during a funding cycle. The project owner can pre-program a list of addresses to split distributions between. Treasury funds in excess of the distribution limit is considered overflow, which can serve as runway or be reclaimed by token holders who redeem their tokens. |
|     4. | Overflow allowance                                  | The amount of treasury funds that the project owner can distribute on-demand.This allowance does not reset per-funding cycle. Instead, it lasts until the project owner explicitly proposes a reconfiguration with a new allowance. |
|     5. | Weight                                              | A number used to determine how many project tokens should be minted and transferred when payments are received during the funding cycle. In other words, weight is the exchange rate between the project token and a currency during that funding cycle. |
|     6. | Discount rate                                       | The percent to automatically decrease the subsequent cycle's weight from the current cycle's weight.The discount rate is not applied during funding cycles where the weight is explicitly reconfigured. |
|     7. | Ballot                                              | A common implementation is to force reconfigurations to be submitted at least X days before the end of the current funding cycle, giving the community foresight into any misconfigurations or abuses of power before they take effect. |
|     8. | Reserved rate                                       | The percentage of newly minted tokens that a project wishes to withhold for custom distributions. |
|     9. | Redemption rate                                     | The percentage of a project's treasury funds that can be reclaimed by community members by redeeming the project's tokens during the funding cycle.A rate of 100% suggests a linear proportion, meaning X% of treasury overflow can be reclaimed by redeeming X% of the token supply. |
|    10. | Ballot redemption rate                              | A project can specify a custom redemption rate that only applies when a proposed reconfiguration is waiting to take effect.This can be used to automatically allow for more favorable redemption rates during times of potential change. |
|    11. | Pause payments,distributions,  redemptions and burn | Projects can pause various bits of its treasury's functionality on a per-funding cycle basis. These functions are unpaused by default. |
|    12. | Hold fees                                           | By default,MangoBOX membership fees are paid automatically when funds are distributed out of the ecosystem from a project's treasury. During funding cycles configured to hold fees, this fee amount is set aside instead of being immediately processed. |



- **Contract Architecture of  the MangoBOX protocol**

  

  The MangoBOX protocol is made up of 7 core contracts and 3 surface contracts.

  - Core contracts store all the independent components that make the protocol work.

  - Surface contracts glue core contracts together and manage funds. Anyone can write new surface contracts for projects to use.

    

| Number | Subject                           | Specification                                                |
| -----: | --------------------------------- | ------------------------------------------------------------ |
|     1. | MBTokenStore                      | Manages token minting and burning for all projects.          |
|     2. | MBFundingCycleStore               | Manages funding cycle configurations and scheduling.         |
|     3. | MBProjects                        | Manages and tracks ownership over projects, which are represented as ERC-721 tokens.The protocol uses this to enforce permissions needed to access several project-oriented transactions. |
|     4. | MBSplitsStore                     | Stores information about how arbitrary distributions should be split. The surface contracts currently use these to split up payout distributions and reserved token distributions. |
|     5. | MBPrices                          | Manages and normalizes price feeds of various currencies.    |
|     6. | MBOperatorStore                   | Stores operator permissions for all addresses. Addresses can give permissions to any other address to take specific indexed actions on their behalf, while confining the permissions to an arbitrary number of domain namespaces. |
|     7. | MBDirectory                       | Keeps a reference of which terminal contracts each project is currently accepting funds through, and which controller contract is managing each project's tokens and funding cycles. |
|     8. | MBController                      | Stitches together funding cycles and project tokens, allowing for restricted control, accounting, and token management. |
|     9. | MBPayoutRedemptionPaymentTerminal | Manages all inflows of funds into the ecosystem.             |
|    10. | MBSingleTokenPaymentTerminalStore | Manages accounting data on behalf of payment terminals that manage balances of only one token type. |



- **Technology Stack**


- Web UI

  - JavaScript –   the world's most popular programming language. 
  - [Vue](https://vuejs.org/index.html/) – An approachable, performant and versatile framework for building web user interfaces. 
- Data Processing

  - [PolkaApi](https://github.com/polkadot-js/api) – This library provides a clean wrapper around all the methods exposed by a Polkadot/Substrate network client and defines all the types exposed by a node .
- Contract

  - [ink!](https://github.com/paritytech/ink) – ink! is an eDSL to write smart contracts in Rust for blockchains built on the Substrate framework. ink! contracts are compiled to WebAssembly.

  - [cargo-contract](https://github.com/paritytech/cargo-contract) ‒ CLI tool for ink! contracts.
  - [Contracts UI](https://paritytech.github.io/contracts-ui/) ‒ Frontend for contract instantiation and interaction.
  - [Substrate Contracts Node](https://github.com/paritytech/substrate-contracts-node) ‒ Simple Substrate blockchain which includes smart contract functionality.


- **Some UI Mock-ups of   MangoBOX protocol**

**Some UI Mock-ups of   MangoBOX protocol-01**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/01.png)


**Some UI Mock-ups of   MangoBOX protocol-02**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/02.png)

**Some UI Mock-ups of   MangoBOX protocol-03**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/03.png)

**Some UI Mock-ups of   MangoBOX protocol-04**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/04.png)


**Some UI Mock-ups of   MangoBOX protocol-05**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/05.png)


**Some UI Mock-ups of   MangoBOX protocol-06**

![image](https://raw.githubusercontent.com/Mangoboxlabs/Mangoboxdocs/main/UI/6.png)




### Ecosystem Fit



- **Where and how does your project fit into the ecosystem?**

Under the leadership of Web3 and Parity team, after five years of development, the Polkadot ecosystem has entered a formal auction era for parachains, and more and more parachains have entered the operational stage, making Polkadot ecosystem flourish. Meanwhile, it has also entered into a new stage of development which is in great demand for applications on every para-chain to make the whole ecosystem truly prosper and create a Web3 world.

In the world of web3, decentralized governance and transparent fund management are the most basic requirements of ecology, which are also the requirements for every ecological participant. When we saw the great success of ConstitutionDAO and AssangeDAO, we also saw the great value of juicebox. Therefore we created MangoBOX Protoco, using Ink! to reconstruct Juicebox's core logic and carry out some certain innovations and upgrades. We hope that when MangoBOX Protocol is fully created, it can serve various participants in the Polkadot ecosystem and provide a complete set of treasury management solutions.

- **Who is your target audience?**

Our main target audience are all types of DAO organizations, artists, DAPP development teams and public product developers. MangoBOX Protocol can provide fund-raising and capital management services for them.

- **What need(s) does your project meet?**

Whether it's for a project provider or a DAO organization, it is a complex and tedious process to create a treasury and issue tokens to community members and raise funds. The vast majority of the projects failed due to the lack of technical capabilities. MangoBOX system allows teams to configure and manage the whole fund-raising process with no need for coding, tackling the complexity of fund-raising from the community by the project providers.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

In the Substrate/Polkadot/Kusama ecosystem,  we have not found any similar product. But there are some project in DAO's frame, such as subDAO and Dorafactory,  that can provide some certain DAO infrastructure products and create all types of DAOs. Only MangoBOX has treasury management as its core function to raise and allocate funds transparently.



## Team :busts_in_silhouette:

### Team members

- **Jason Zhao**: Team leader, project architect, PM and technical leader. He has over 15 years of experience in Internet technology as a senior developer. He began to know Bitcoin in 2015 and gradually emerged himself in the R&D of blockchain technology.  He started to notice Polkadot in 2021 and decided to focus on the development of the Polkadot ecosystem.
- **Frank  Yu:** Full stack IT developer,  10 years of experience in IT,  in command of programming languages such as  PHP,Java, C++.  Looked into the study and development of Ethereum in 2018;  Committed to the Polkadot ecosystem in 2021.
- **Owen Hu:** Full stack developer,  smart contract engineer, 8 years of experience in IT development, currently focuses on the R&D of the blockchain technology in Web3.
- **Kevin   Luo:** Full stack developer, front-end engineer, 6 years of IT experience,  currently focuses on the R&D of the blockchain technology.
- **Alex Li:** Senior designer , 10 years of experience in Internet design, maintains a high standard of design and art.

### Contact

- **Contact Name:Jason Zhao** 
- **Contact Email:** MangoBOXLabs@gmail.com
- **Website: mangobox.xyz**

### Legal Structure

- We are preparing to register a legal entity in Hong Kong.

### Team's experience

We are a  Web3 start-up team from Beijing, China with Jason Zhao as our team leader and technical leader. Our team members come from different fields, from architects, product managers to full stack developers. Although we do not have a rich experience in Web3, our team has never been short of strong execution and high technical development capabilities. Our endless enthusiasm for Web3 led us to the start-up wave.  As traditional Web2 practioners, our team has been engaged in the IT development in China for the last decade. As soon as Web3 opened a window to a brand new world, we immediately seized the opportunity.

We found that the crypto industry holds endless opportunities like no other industry can match. The core vision of crypto and Web3 is to provide everyone with a native and open-source digital economy. Web3 is structured on the basis of blockchain, smart contracts and oracles, which holds a great potential to build a brand new and open ecology.

Our team has been devoted to the R&D on the Ethereum ecosystem and not until 2021 when the Polkadot para-chains began to be deployed and applied that we had a better understanding of the ideas, principles and technology of the Polkadot ecosystem. We realized that whether it's from the top-tier ideas or the bottom technical structure, Polkadot represents the future and that's why we decided to commit to the build-up of the Polkadot ecosystem. Now as all para-chain on Polkadot are being operational, there is an emerging demand for DAPP's deployment and bulid-up, which is our unprecedented opportunity.

Meanwhile, we found that no matter which ecology started to build, the DAO organization is the most active force in each ecology, and DAO is the future of the crypto world. In particular, the huge success of ConstituionDAO and AssangeDAO confirms our high recognition of DAOs. Hence, we decide to reconstruct Juicebox's functions and logic, using Ink! smart contract to build MangoBOX protocol, which is our first step to building up the Polkadot ecosystem.



### Team Code Repos

- https://github.com/Mangoboxlabs

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/Jasonweb3

- https://github.com/luckelf

- https://github.com/Kevinluoo



## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:**  2 months
- **Full-Time Equivalent (FTE):**   4FTE
- **Total Costs:** 40000 USD

This is the link of Juicebox's solidity code, we will use Ink to rewrite all the functional logic with reference to this code, and add some optimizations and innovations of our own.

https://github.com/Mangoboxlabs/juice-contracts-v2



### Milestone 1 — Ink!  contract Modules

- **Estimated duration:** 1 month
- **FTE:**  4
- **Costs:** 20,000 USD

| Number | Deliverable                   | Specification                                                |
| -----: | ----------------------------- | ------------------------------------------------------------ |
|    0a. | License                       | Apache 2.0                                                   |
|    0b. | Documentation                 | We will provide a basic **tutorial** that explains how a user can deploy and test our ink contract. |
|    0c. | Testing Guide                 | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                        | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|     1. | Ink！Contract:                |         In the first milestone, we mainly implement how to create a fundraising project.It mainly consists of two parts, the first part is to create an NFT to represent the ownership and management of the project.Each project within the MangoBOX protocol is represented as an ERC-721 NFT.   Whoever is the owner of a project's NFT has access to [admin functionality]for that project within the protocol, which ultimately gives it control over the project's funds.The second part is the basic rules for initializing this project. It mainly needs to set the following parameters:Start timestamp、  Duration、Distribution limit、Overflow allowance、Weight、Discount rate、Reserved rate, etc. Here we need to clarify that,the NFT we developed here is not a standard ERC721 token, it represents a management authority.What we are doing is a DAO fundraising system, anyone can build a DAO organization to raise funds. When this fundraising system is established, it is necessary to have administrative rights to configure parameters for this organization. At this time, we did not directly set the management rights from the code, but abstracted the management rights into an NFT. Whoever owns the NFT can control the DAO organization and adjust the corresponding fundraising parameters.Such a logical design can make the management authority of the DAO organization very easy to transfer, which is very convenient for the project party to manage the project.                                                    |



### Milestone 2 — Ink!  contract Modules and  Frontend files

- **Estimated Duration:** 1 month
- **FTE:**  4
- **Costs:** 20,000 USD


| Number | Deliverable                | Specification                                                |
| -----: | -------------------------- | ------------------------------------------------------------ |
|    0a. | License                    | Apache 2.0                                                   |
|    0b. | Documentation              | We will provide a basic **tutorial** that explains how a user can deploy and test our ink contract. |
|    0c. | Testing Guide              | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
|    0d. | Docker                     | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone. |
|    0e. | Article                    | We will publish an **article** that explains how to use our product. |
|     1. | Ink！Contract:             | In the second milestone, we mainly implement how to manage the funds raised by the project. It also contains two parts. The first part is the allocation and management of funds. The project will allocate the raised funds to designated accounts according to the pre-determined settings. The second part is the management of governance tokens. Donors can burn the corresponding governance tokens to redeem a certain percentage of overflow funds. |
|     2. | Frontend files             | We will provide front-end files and deployment tutorials.    |





## Future Plans

- **how you intend to use, enhance, promote and support your project in the short term, and**

We first hope to develop the smart contract of the product. It will then proceed to deploy on a parachain for initial testing.



- **the team's long-term plans and intentions in relation to it.**

When our product starts testing, we hope to build our global community based on the Polkadot ecosystem, and start to incubate DAO organizations to start raising funds through our platform.



## Additional Information :heavy_plus_sign:

- **How did you hear about the Grants Program?** 

Web3 Foundation Website.


- **Work you have already done.**

We have deeply researched the function and logic of juicebox, and we hope to use ink! Smart contracts refactor it.

- **If there are any other teams who have already contributed (financially) to the project.**

NO.

- **Previous grants you may have applied for.**

NO.

