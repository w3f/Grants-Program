# RegionX

- **Team Name:** RegionX
- **Payment Address:** 0x1e86CD18E4443B5f57b0133077954Cd84896964d (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

Please provide the following:

- This project is named RegionX, with 'X' representing 'exchange,' as the project serves as a Region exchange.
- RegionX is a marketplace and a set of tools for Coretime manipulation and data tracking, with the goal of making development on Polkadot faster, easier, more flexible, and, as an end result, cheaper.
- RegionX is a project that builds upon the ideas presented in the Agile Coretime RFC. The project will be developed under the assumption that the functionality described in the RFC will be implemented within the Polkadot/Kusama ecosystem.
  Given that the `pallet-broker` already exists, we will have the capability to undertake all the development outlined in this proposal.
- Creating robust tooling and a market for Coretime can have a significant impact on the development that takes place on Polkadot. It will enable experiments and small personal projects to be deployed to Polkadot with minimal effort and cost.

### Project Details

This project, in its final phase, will have four cohesive components. These components are the following:
1. Coretime UI
2. Coretime Market
3. Data Analytics
4. Development Hub

This proposal exclusively addresses the first two components, while information regarding the remaining components is available in the 'Future Plans' section below.

The following sections describe only the components that will be developed for this grant.

#### Coretime UI

Considering that the entire project is built upon the ideas presented in the Agile Coretime RFC, users must be able to perform actions on their Coretime using RegionX. For this reason, we will provide the Coretime UI, which will simplify the management of regions. The following is a list of components we intend to incorporate into RegionX.

- **Regions Dashboard** will serve as a central hub for users, allowing them to browse all of the regions they own. The regions will be presented as UI card components containing all relevant metadata and actions that users can perform on their region.

<p align="center">
    <img width="800" src="https://i.postimg.cc/bYk1D15p/Frame-11.jpg"/>
</p>

- **Partitioning UI** will offer users a convenient method for splitting their region. The UI will visually represent the region as a timeline, highlighting all potential pivotal points available for partitioning.

  The Partitioning UI visualizes the region as a timeline and divides it into the selected TIME UNIT. This allows the user to easily determine the pivot point.

<p align="center">
    <img width="800" src="https://i.postimg.cc/GtWMQrCt/Frame-18.jpg"/>
</p>

- **Interlacing UI** will also allow users to easily interlace the region they own. The user will have the option to specify the region core mask as a fraction.

<p align="center">
    <img width="800" src="https://i.postimg.cc/RFMx77Ty/Frame-17.jpg"/>
</p>

- **Naming Regions & Tasks**: Users will have the option to assign names to their regions and tasks, making it simple to differentiate them.

- **Assignment UI** will make it straightforward for users to allocate a task to their owned regions. The UI will display a dropdown menu containing all the tasks that the user has published to the relay chain, simplifying the selection process.

<p align="center">
    <img width="800" src="https://i.postimg.cc/7ZFx2Jdr/Frame-16.jpg"/>
</p>

- **Transfer** UI will offer a straightforward modal for users to perform transfers.

<p align="center">
    <img width="800" src="https://i.postimg.cc/9058PCVM/Frame-19.jpg"/>
</p>

#### Secondary Market

Coretime is a resource that goes to waste if not utilized during its intended time. When you purchase a core for a month, it means you can use a maximum of one core at any given moment during that specific time period. If the core is not utilized, the Coretime is essentially squandered.

After buying Coretime during the bulk period, one may realize that the purchased Coretime is either too much or too little for the intended use. The secondary market assists these individuals and teams in rectifying their mistakes by enabling them to sell or buy more Coretime.

Coretime can be partitioned and interlaced, meaning most of the Coretime on sale will hardly be the same. For this reason, we are going to utilize the order book model.

The seller will need to specify the price for the entire region, and based on that, the contract will calculate the price of one bit, which is equivalent to 1/80th of the price of the entire region.

This bit-based valuation means that the total value of the Coretime owned by the seller will decrease every time the smallest computation unit is not used. From here, we can conclude that the price of the region on sale is dynamic.

**The steps of selling and buying Coretime:**

1.  A user decides to sell one of their regions.
	-   The user defines the price that they intend to sell the region for.
	-   The contract calculates the price per bit. 
2.  Another user decides to buy some Coretime.
	-   They are browsing the market and have decided they want to buy a specific region.   
	-   The user will have to pay the price for the region; however, this won't be the price of the entire region. The price will be defined by `remaining_smallest_units * price_per_unit`.
3.  The user pays the price, the seller receives the paid amount, and the buyer receives the region.

If a user doesn't want to buy the entire region but only a part of it, the buyer will need to specify which parts of the region they want and provide the steps to create a region with the properties they desire. This way, the user pays only for the portion of the region they wish to acquire.
We refer to this feature as **Region Derivation**. It will give buyers more options when purchasing Coretime, making it easier to meet their specific needs. This feature is not implemented as part of this milestone, but is part of our future plans.

**Defining the price of Coretime**

The price of Coretime will be highly influenced by supply and demand. Since we are constructing a market with an NFT order book model, users will have the authority to establish the price of the Coretime they intend to sell.

Depending on whether the seller owns an entire core, only partitioned parts, or has it interlaced, the selling price of the Coretime will be affected.

As mentioned earlier, we will determine the pricing of a region at a bit level. This approach proves particularly useful because it allows us to establish a pricing structure that decreases when Coretime is wasted.

In situations where the buyer's instructions involve partitioning the region and performing interlacing on the partitioned region, we will determine the price based on the bit price of the resulting partitioned region.

This approach allows us to easily calculate the price of the region the buyer intends to purchase, even in situations where the buyer requires multiple instructions to be executed on the region.

**Formula to calculate the price when partitioning:**
`price = bit_price * pivot_defined_as_bit`

**Formula to calculate the price when interlacing:**
`price = bit_price * active_bits`

**Market Architecture**

The Coretime marketplace can be implemented in four different ways, which include:

1.  Ink! smart contract
2.  Solidity smart contract
3.  Actor (Not yet implemented in Polkadot/Kusama)
4.  Parachain

From these options, we've selected the Ink! smart contract as our initial approach. As the project evolves, we anticipate transitioning to either an actor or a separate parachain to access greater possibilities to improve our services.

**Implementation Requirements**

We came up with an implementation design that makes it possible to develop the market as an ink! smart contract located on a contracts parachain in the Polkadot/Kusama ecosystem.
Our solution has very minimal and reasonable assumptions required to make this possible.

Our sole assumption is that the concepts outlined in the Agile Coretime RFC are implemented in Polkadot/Kusama. We do not have any specific assumptions concerning the XCM configuration on the Coretime parachain to make this work. We only require that the Coretime parachain allows basic reserve transfers.

**Region NFT Contract**

To create a marketplace on a contracts parachain, we'll need an NFT region contract. We'll use the [Openbrush](https://openbrush.brushfam.io/) psp34 contract as a starting point for the code we develop.

**Coretime Market UI**

This section outlines the design of the Coretime market developed as part of this proposal. If additional relevant data is identified, we will expand upon the design.

- The main market dashboard allows users to browse and filter, making it easier for them to find the region they are looking for.

	Users will have the flexibility to choose a time unit for inputting values, which will serve as the basis for region filtering. The maximum time unit available will be a day, allowing users to input values using a calendar input field. For other durations, users can simply provide numeric input in a designated field.

	The Core ownership field will be represented as a percentage range of the total Coretime ownership that the region has on a specific core.

<p align="center">
    <img width="800" src="https://i.postimg.cc/50yHKvcM/Frame-20-3.jpg"/>
</p>

- The UI for performing cross-chain region transfers which will be utilized when transferring regions between the Coretime chain and the smart contract chain where RegionX is deployed, or vice versa.
<p align="center">
    <img width="800" src="https://i.postimg.cc/TYqCRz1w/Frame-21.jpg"/>
</p>

- The UI for selling regions will become accessible to users once they choose one of their regions from the Region Dashboard. Any region listed for sale must be located on the smart contract parachain where RegionX is situated. In situations where the region is on the Coretime chain, users should first utilize the Cross-Chain UI for transferring the region.
<p align="center">
    <img width="800" src="https://i.postimg.cc/DzJQmtZG/Frame-22.jpg"/>
</p>

### Ecosystem Fit

RegionX will offer a Coretime market and a suite of tools, making it easy for teams to develop their projects on Polkadot or Kusama. This project will empower smaller teams by providing flexible options to purchase regions from the market.

The xcRegion and Coretime market contracts are designed for use by future teams interested in developing Coretime-related projects.

[Lastic](https://github.com/w3f/Grants-Program/pull/2008) is a project in the Polkadot ecosystem with similar goals to ours. However, we have already defined many of our future ideas, which they have not yet mentioned implementing into their project. We have also developed a feasible solution for creating a flexible Coretime market with a dynamic pricing model.
Given that the contracts developed as part of this grant are intended for use by many future projects, we would like Lastic to consider utilizing these contracts. As briefly mentioned in the _Future Plans_ section, we are also in the process of designing an economic model to incentivize the use of the same Coretime market. We believe this can foster healthy competition.

## Team :busts_in_silhouette:

### Team members

- Sergej Sakac
- Oliver Lim

### Contact

- **Contact Name:** Sergej Sakac
- **Contact Email:** sakacszergej@gmail.com
- **Website:** https://regionx.tech

### Legal Structure

- **Registered Address:** Kanalska 7 Novi Sad Serbia
- **Registered Legal Entity:** MASTER UNION LLC.

### Team's experience

Sergej is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for more than a year now. Sergej is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.

Sergej has previously worked on a project that applied for a W3F. The details of the project can be found [here](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md).

Oliver is a full stack blockchain developer who was involved in 3 projects granted by the Web3 Foundation. He worked with Sergej on [Dotflow](https://github.com/thedotflow).

Some of the past projects Oliver has worked on are [fs-dapp](https://github.com/fair-squares/fs-dapp), [imbue-frontend](https://github.com/imbuenetwork/imbue-frontend), [dotflow](https://github.com/TheDotflow/dotflow-ui)

### Team Code Repos

Github organization:  https://github.com/RegionX-Labs

Github profiles of team mebers:

- https://github.com/Szegoo
- https://github.com/cuteolaf

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/sergej-sakac-334a47252
- https://www.linkedin.com/in/cuteolaf

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **FTE:** 2
- **Total Costs:** 30,000 USD

### Milestone 1 - Coretime UI & xcRegions

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 12,000 USD

|  Number | Deliverable                     | Specification                                                                                                                                                                                                                                                                              |
| ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                         | GPLv3                                                                                                                                                                                                                                                                                    |
| **0b.** | Documentation                   | We will create documentation that thoroughly explains all aspects of the UI. Our goal is to design the UI to be as intuitive as possible, so users require minimal familiarization with the project.                                                                                       |
| **0c.** | Testing and Testing Guide       | All interactions with the Coretime parachain will undergo comprehensive testing to guarantee a seamless experience for users when using the RegionX UI. We will be running a local Zombienet network to simulate the existence of a Coretime parachain.                                     |
| **0d.** | Docker                          | We will provide a Dockerfile that will set up and run the RegionX Coretime UI.                                                                                                                                                                                             |
|     0e. | Article                         | We'll compose a Medium article to explain the UI abstractions we've introduced around Coretime, offering insights into the capabilities achievable through the utilization of the Coretime UI.                                                                                                                                                                                                                                                                          |
|      1. | Mock Coretime Parachain runtime | We will establish a parachain dedicated to testing the Coretime abstractions and all future milestones. Essentially, this involves creating a parachain runtime that implements the `pallet-broker`. This parachain will simulate the Coretime chain. |
|      2. | Simulated Local Network | Using the mock Coretime parachain, we will create a local Zombienet network consisting of a relay chain, Coretime chain, and a smart contract chain for the Coretime market. |
|      3. | Coretime UI         | We will implement all the sections and components described in the _Coretime UI_ section above. To summarize, this will consist of the following components: region dashboard, partitioning UI, interlacing UI, naming regions & tasks components, assignment UI and transfer UI |
|      4. | Cross-chain Regions            | As described in the previous sections, we will create an ink! smart contract that will be representing regions on the contracts parachain where we choose to deploy RegionX. This essentially means that users will have the capability to transfer their regions from the Coretime chain to another parachain. This NFT contract will be expanded to include the option for the region owner to initially set the region's end. The contract will perform certain sanity checks, although it's important to note that the accuracy of this information is not guaranteed. The UI client will be responsible for ensuring the correctness of this information when querying the region. |
|      5. | xcRegion developer documentation         | We will create documentation to explain how to easily integrate the xcRegion contract developed in this milestone. Our goal is to enable many teams in the future to integrate the contracts that are developed as part of this proposal. |

### Milestone 2 - xcRegions UI & Coretime market contract

- **Estimated duration:** 1.5 month
- **FTE:** 2
- **Costs:** 18,000 USD

|  Number | Deliverable                    | Specification                                                                                                                                                                                                                                                                 |
| ------: | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                        | GPLv3                                                                                                                                                                                                                                                                       |
| **0b.** | Documentation                  | The ink! smart contract will be well-written and documented. We will also create documentation that thoroughly explains all aspects of the UI. Our goal is to design the UI to be as intuitive as possible, so users require minimal familiarization with the project.        |
| **0c.** | Testing and Testing Guide      | The ink! smart contract will undergo thorough testing, including e2e testing with a simulated zombienet network, to ensure maximum correctness. All UI interactions will undergo comprehensive testing to guarantee a seamless experience for users when using the RegionX UI. |
| **0d.** | Docker                         | We will provide Dockerfiles for the ink! smart contracts that will set up the environment and execute the contract tests. Additionally, we will offer a Dockerfile that will configure and run the RegionX UI.                                                                 |
|     0e. | Article                        | We will compose a Medium article to offer a high-level explanation of the project's architecture. Within this article, we will clarify the significance of cross-chain region transfers and their crucial role in the Coretime market.                                                                                                                                                                                                                                                              |
|      1. | Cross-chain Transfer UI        | We will create the UI for transferring the region NFTs from the Coretime parachain to the contracts parachain and vice versa.                                                                                                                                                 |
|      2. | Coretime Market Dashboard UI        | In this milestone, we will also develop the Coretime Market dashboard UI. This section will be similar to the 'My Regions' dashboard, with the difference that it will display all the valid regions from the market instead of the regions owned by the user. Additionally, it will provide users with relevant information such as the cost of each region. The UI will also provide the option to buy or sell a region on the market. |
|      3. | Coretime Market contract   | We will develop the Coretime market as an ink! smart contract, as described above in the _Secondary Market_ section. This contract will use the xcRegions contract developed in the previous milestone. It will introduce listing functionality, enabling sellers to set the price for their regions. The contract will implement a bit-level pricing model, which will gradually reduce the cost of regions over time as the region remains unused. When a buyer acquires a listed region, they will only be charged for the Coretime they are going to receive thanks to the dynamic pricing model. |
|      4. | Coretime Market developer documentation         | We will create documentation to explain how to easily integrate the market contract developed in this milestone. Our goal is to enable many teams in the future to integrate the contracts that are developed as part of this proposal. |

## Future Plans

As mentioned at the beginning of the project details, this project consists of two other parts that are not developed as part of this application. The next describes the future plans categorized into these components.

### Coretime Market

As mentioned in the proposal we intend to further implement the **Region Derivation** feature. This will allow users to buy only a portion of the region that is being listed on sale.

We also plan to finish the Coretime market UI, which will include more user-friendly region search and the ability to purchase portions of listed regions directly through the UI.

Our plan is to have the market contract used by many other projects in the future. Since it would be highly beneficial for greater liquidity to utilize the same contract and not have many deployed, we plan to incorporate an economic model that incentivizes each of the projects using the same Coretime market contract.

In the future, we also plan to transition from an Ink! contract to a parachain. This will provide us with greater flexibility over XCM, improved performance, and the possibility to more easily integrate with other pallets. Thanks to the greater flexibility on the parachain runtime side, in comparison to a contract, we have the potential to add a totally new way of buying Coretime. This would be possible by enabling users to pool funds, pre-define the ownership, and directly purchase a region from the Bulk market.

### Data Analytics

This component will provide users with the relevant information they need to better understand the Coretime market, empowering them to make informed decisions when buying or selling Cores. 

One of the pieces of data that will be displayed here is Coretime utilization. As a small prior experiment, we have created the following website that tracks the weight utilization from its maximum potential of each Polkadot and Kusama parachain: https://polkadot-weigher.com [twitter post](https://x.com/SakacSergej/status/1714270223489245505?s=20)

### Developer Hub

The developer hub will assist teams that have deployed tasks on Polkadot or Kusama in understanding their Coretime usage better. This is accomplished by providing a service of tracking Coretime consumption over time and presenting the data in graph form for the team.
In the developer hub, users can register custom KPIs and use built-in ones. By utilizing KPIs along with previous months' data, we could potentially create an advisor to suggest the ideal Coretime allocation.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** GitHub
