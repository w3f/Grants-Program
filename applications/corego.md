# Corego

- **Team Name:** Corego
- **Payment Address:** 0x1e86CD18E4443B5f57b0133077954Cd84896964d (USDC)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 3 🐓

## Project Overview :page_facing_up:

### Overview

Please provide the following:

- Corego is a marketplace and a set of tools for Coretime manipulation and data tracking, with the goal of making development on Polkadot faster, easier, more flexible, and, as an end result, cheaper.
- Corego is a project that builds upon the ideas presented in the Agile Coretime RFC. The project will be developed under the assumption that the functionality described in the RFC will be implemented within the Polkadot/Kusama ecosystem.
  Given that the `pallet-broker` already exists, we will have the capability to undertake all the development outlined in this proposal.
- Creating robust tooling and a market for Coretime can have a significant impact on the development that takes place on Polkadot. It will enable experiments and small personal projects to be deployed to Polkadot with minimal effort and cost.

### Project Details

The project essentially consists of four parts that will create a cohesive application. For practical purposes, we have chosen to include only the initial two components in this grant proposal. However, the complete proposal can be viewed [here](https://github.com/CoregoLabs/Proposal).

The following sections describe only the components that will be developed for this grant.

#### Coretime UI

Considering that the entire project is built upon the ideas presented in the Agile Coretime RFC, users must be able to perform actions on their Coretime using Corego. For this reason, we will provide the Coretime UI, which will simplify the management of regions. The following is a list of components we intend to incorporate into Corego.

- **Regions Dashboard** will serve as a central hub for users, allowing them to browse all of the regions they own. The regions will be presented as UI card components containing all relevant metadata and actions that users can perform on their region. The following is a list of components we intend to incorporate into Corego.

    Region dashboard when nothing is selected: 
   <p align="center">
    <img width="800" src="https://i.postimg.cc/dt0kKhFS/a2.png"/>
   </p>

    Region dashboard when a region is selected: 
   <p align="center">
    <img width="800" src="https://i.postimg.cc/4NMCN0CR/a1.png"/>
   </p>

- **Partitioning UI** will offer users a convenient method for splitting their region. The UI will visually represent the region as a timeline, highlighting all potential pivotal points available for partitioning.


  The Partitioning UI visualizes the region as a timeline and divides it into the selected TIME UNIT. This allows the user to easily determine the pivot point.
  <p align="center">
    <img width="800" src="https://i.postimg.cc/XYLnN8gf/b2.png"/>
  </p>

  When the pivot point is selected:
    <p align="center">
    <img width="800" src="https://i.postimg.cc/PJj7wGXP/b3.png"/>
    </p>

- **Interlacing UI** will also allow users to easily interlace the region they own. The user will have the option to specify the region core mask as a fraction, with the denominator fixed at the number 8. The UI will visually display a block colored with two distinct colors based on the fraction to represent the amount of Coretime that can be utilized by the two overlapping regions.

- **Naming Regions & Tasks**: Users will have the option to assign names to their regions and tasks, making it simple to differentiate them.

- **Assignment UI** will make it straightforward for users to allocate a task to their owned regions. The UI will display a dropdown menu containing all the tasks that the user has published to the relay chain, simplifying the selection process.

- **Transfer** UI will offer a straightforward modal for users to perform transfers.

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
We refer to this feature as **Region Derivation**. It will give buyers more options when purchasing Coretime, making it easier to meet their specific needs.

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

**Region Derivation**
As demonstrated in the previous example, buyers have the option to acquire only a portion of a region, which is achieved by the buyer submitting a set of instructions to generate the desired region. A high-level description of how this will work: 

1. User will transfer a deposit that is equal to `region_price + bit_price * DERIVATION_DURATION_LIMIT`.
2. The contract will transfer the entire region to the user and will write a record in the 'pending_derivations' mapping.
3. The region will be transferred to the Coretime parachain, and the instructions will be executed on the region.
4. The newly created regions will be transferred back to the contracts chain.
5. The regions that the user doesn't need will be returned to the market, and the user will receive a partial refund of their deposit. The rest of the deposit goes to the seller
6. The regions received by the market are relisted for sale under the original seller.

In the event that the buyer doesn't return the regions before `DERIVATION_DURATION_LIMIT` elapses, the seller is entitled to claim the entire deposit.

```rs
/// The duration limit of a derivation.
///
/// The buyer will only receive a refund when returning the expected regions before the 
/// derivation duration limit is reached.
//
// NOTE: The value of the duration limit will be adjusted.
const DERIVATION_DURATION_LIMIT: BlockNumber = 15;

struct RegionInfo {
    core_index: u16,
    begin: Timeslice,
    end: Timeslice,
    mask: CoreMask,
    bit_price: Balance,
}

struct DerivationInfo {
    /// All the regions that are expected to be returned from the buyer for a refund.
    expected_regions: Vec<RegionInfo>,
    /// The amount of refund the buyer can receive.
    refund: Balance,
    /// The block number when the buyer purchased the region for derivation.
    derivation_timestamp: BlockNumber,
}

#[ink(storage)]
struct CoretimeMarket {
	/* ... */
	/// The `AccountId` represents the buyer.
	pending_derivations: Mapping<AccountId, DerivationInfo>
}
```

However, manually specifying these instructions can be a challenging task for users.

The approach we aim to adopt here is to enable users to describe the desired characteristics of the region they require. Using all the provided input, the frontend will determine whether the specified region can be generated from any of the regions listed on the market. If a match is found, the user will be presented with a price for their region. Future iterations of this feature may include Natural Language Processing (NLP) to describe the region's characteristics.

**Market Architecture**

The Coretime marketplace can be implemented in four different ways, which include:

1.  Ink! smart contract
2.  Solidity smart contract
3.  Actor (Not yet implemented in Polkadot/Kusama)
4.  Parachain

From these options, we've selected the Ink! smart contract as our initial approach. As the project evolves, we anticipate transitioning to either an actor or a separate parachain to access greater possibilities to improve our services.
We possess a much more comprehensive overview of all these options, which we chose not to include here to avoid making this proposal too lengthy. However, we can provide it if there is interest.

**Implementation Requirements**

We came up with an implementation design that makes it possible to develop the market as an ink! smart contract located on a contracts parachain in the Polkadot/Kusama ecosystem.
Our solution has very minimal and reasonable assumptions required to make this possible.

Our sole assumption is that the concepts outlined in the Agile Coretime RFC are implemented in Polkadot/Kusama. We do not have any specific assumptions concerning the XCM configuration on the Coretime parachain to make this work. We only require that the Coretime parachain allows basic reserve transfers.

**Region NFT Contract**

To create a marketplace on a contracts parachain, we'll need an NFT region contract. We'll use the [Openbrush](https://openbrush.brushfam.io/) library to simplify development, as it only requires a few adjustments.

### Ecosystem Fit

Corego stands out as a pivotal player within the ecosystem, strategically built atop the Coretime-chain. Corego is committed to optimizing resource allocations, and to do so, we'll leverage the chain's unique functionalities to offer advanced abstractions, a Coretime-focused indexer, a secondary market, and a developer console. 

This multifaceted approach caters to teams across the Polkadot and Kusama ecosystems. It provides them with the tools to seamlessly interact with the Coretime chain, gain deep insights into Coretime markets, trade execution cores effectively, and react based on usage details.

As integrating the novel Coretime concept into Polkadot unfolds, we remain vigilant, anticipating potential competitors in this emerging space.

## Team :busts_in_silhouette:

### Team members

- Julian Saks
- Sergej Sakac

### Contact

- **Contact Name:** Julian Saks, Sergej Sakac
- **Contact Email:** juliansaks@gmail.com, sakacszergej@gmail.com
- **Website:** https://corego.org

### Legal Structure

- **Registered Address:** Kanalska 7 Novi Sad Serbia
- **Registered Legal Entity:** MASTER UNION LLC.

### Team's experience

Julian is the President of Texas Blockchain and a third-year student at the University of Texas at Austin. He has scaled Texas Blockchain to one of the largest university blockchain clubs in the United States and the world. Julian is also a recent Founder alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.

Sergej is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for more than a year now. Sergej is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.

Sergej has previously worked on a project that applied for a W3F. The details of the project can be found [here](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md).

### Team Code Repos

Github organization:
https://github.com/CoregoLabs

Github profiles of team mebers:

- https://github.com/Szegoo
- https://github.com/kingjulio8238

### Team LinkedIn Profiles (if available)

- linkedin.com/in/juliansaks/
- linkedin.com/in/sergej-sakac-334a47252

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 4 months
- **FTE:** 3.5
- **Total Costs:** 90000 USD

### Milestone 1 - Coretime UI & xcRegions

- **Estimated duration:** 1 month
- **FTE:** 3.5
- **Costs:** 22500 USD

|  Number | Deliverable                     | Specification                                                                                                                                                                                                                                                                              |
| ------: | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **0a.** | License                         | MIT                                                                                                                                                                                                                                                                                    |
| **0b.** | Documentation                   | We will create documentation that thoroughly explains all aspects of the UI. Our goal is to design the UI to be as intuitive as possible, so users require minimal familiarization with the project.                                                                                       |
| **0c.** | Testing and Testing Guide       | All interactions with the Coretime parachain will undergo comprehensive testing to guarantee a seamless experience for users when using the Corego UI. We will be running a local Zombienet network to simulate the existence of a Coretime parachain.                                     |
| **0d.** | Docker                          | We will provide a Dockerfile that will set up and run the Corego Coretime UI.                                                                                                                                                                                             |
|     0e. | Article                         | We'll compose a Medium article to explain the UI abstractions we've introduced around Coretime, offering insights into the capabilities achievable through the utilization of the Corego Coretime UI.                                                                                                                                                                                                                                                                          |
|     1. | Video about Coretime UI                        | We will create a brief video that explains all the functionality provided by the Coretime UI. The video will be similar to the [Polkadot staking video](https://youtu.be/mq3SFJPti4o).                                                                                                                                                                                                                                                                       |
|      2. | Design finalization             | We will complete the design for the Coretime UI, and based on that, we will proceed to develop the frontend code.                                                                                                                                                              |
|      3. | Mock Coretime Parachain runtime | We will establish a parachain dedicated to testing the Coretime abstractions and all future milestones. Essentially, this involves creating a parachain runtime that implements the `pallet-broker`. This parachain will simulate the Coretime chain. |
|      4. | Simulated Local Network | Using the mock Coretime parachain, we will create a local Zombienet network consisting of a relay chain, Coretime chain, and a smart contract chain for the Coretime market. |
|      5. | Coretime UI         | We will implement all the sections and components described in the _Coretime UI_ section above. To summarize, this will consist of the following components: region dashboard, partitioning UI, interlacing UI, naming regions & tasks components, assignment UI and transfer UI |
|      6. | Cross-chain Regions            | As described in the previous sections, we will create an ink! smart contract that will be representing regions on the contracts parachain where we choose to deploy Corego. This essentially means that users will have the capability to transfer their regions from the Coretime chain to another parachain.                                              |

### Milestone 2 - xcRegions UI & Coretime market contract

- **Estimated duration:** 1.5 month
- **FTE:** 3.5
- **Costs:** 33750 USD

|  Number | Deliverable                    | Specification                                                                                                                                                                                                                                                                 |
| ------: | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                        | MIT                                                                                                                                                                                                                                                                       |
| **0b.** | Documentation                  | The ink! smart contract will be well-written and documented. We will also create documentation that thoroughly explains all aspects of the UI. Our goal is to design the UI to be as intuitive as possible, so users require minimal familiarization with the project.        |
| **0c.** | Testing and Testing Guide      | The ink! smart contract will undergo thorough testing, including e2e testing with a simulated zombienet network, to ensure maximum correctness. All UI interactions will undergo comprehensive testing to guarantee a seamless experience for users when using the Corego UI. |
| **0d.** | Docker                         | We will provide Dockerfiles for the ink! smart contracts that will set up the environment and execute the contract tests. Additionally, we will offer a Dockerfile that will configure and run the Corego UI.                                                                 |
|     0e. | Article                        | We will compose a Medium article to offer a high-level explanation of the project's architecture. Within this article, we will clarify the significance of cross-chain region transfers and their crucial role in the Coretime market. Additionally, we will provide a brief overview of how the region derivation feature functions.                                                                                                                                                                                                                                                               |
|     1. | Video about Cross-Chain Regions                        | We will create a short video to explain the project's architecture and the user interface for cross-chain transfers. The video will be similar to the [Polkadot staking video](https://youtu.be/mq3SFJPti4o).                                                                                                                                                                                                        |
|      2. | Finalize cross-chain UI Design | We will finalize the design for the cross-chain region transfer UI. Following this, we will proceed to develop the frontend code.                                                                                                                                             |
|      3. | Cross-chain Transfer UI        | We will create the UI for transferring the region NFTs from the Coretime parachain to the contracts parachain and vice versa.                                                                                                                                                 |
|      4. | Coretime Market contract   | We will develop the Coretime market as an ink! smart contract, as described above in the _Secondary Market_ section.                                                                                                                                                    |

### Milestone 3 - Coretime Market UI & Region derivation

- **Estimated duration:** 1.5 months
- **FTE:** 3.5
- **Costs:** 33750 USD

|  Number | Deliverable                | Specification                                                                                                                                                                                                                                                           |
| ------: | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                    | MIT                                                                                                                                                                                                                                                                |
| **0b.** | Documentation              | The ink! smart contracts will be well-written and documented. We will also create documentation that thoroughly explains all aspects of the UI. Our goal is to design the UI to be as intuitive as possible, so users require minimal familiarization with the project. |
| **0c.** | Testing and Testing Guide  | The ink! smart contracts will undergo thorough testing, including ink! integration and end-to-end tests, to ensure maximum correctness. All UI interactions will undergo comprehensive testing to guarantee a seamless experience for users when using the Corego UI.   |
| **0d.** | Docker                     | We will provide Dockerfiles for the ink! smart contracts that will set up the environment and execute the contract tests. Additionally, we will offer a Dockerfile that will configure and run the Corego UI.                                                           |
|     0e. | Article                    | We will write a Medium article that elaborates on the significance of a secondary Coretime market and the substantial benefits it offers. The article will delve into our dynamic pricing model, ensuring users have a clear understanding that unused Coretime essentially goes to waste.                                                                                                                                                                                                                                                                   |
|     1. | Video about Coretime Market                        | We will create a brief video to provide an explanation of the Coretime Market and the region derivation feature. The video will be similar to the [Polkadot staking video](https://youtu.be/mq3SFJPti4o).                                                                                                                                                                                                        |
|      2. | Region derivation        | We will implement region derivation as described in the project details section. This feature will be used by the Coretime market to enable users to buy only a chunk of a listed region.                                                                                                                                 |
|      3. | Finalize market UI designs | We will finalize the design for the Coretime market UI. Following this, we will proceed to develop the frontend code.                                                                                                                                                   |
|      4. | Coretime Market UI         | We will create the UI for interacting with all the functionality exposed by the Coretime market contract. The UI will also offer an intuitive design that allows the buyer to describe their desired region.                                                            |


## Future Plans

Please include here

All our future plans can be seen in our [full proposal](https://github.com/CoregoLabs/Proposal). More precisely, the _Data Dashboard_, _Developer Console_, and the _Future Plans_ sections of the full proposal offer comprehensive details regarding all of our upcoming plans.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website
