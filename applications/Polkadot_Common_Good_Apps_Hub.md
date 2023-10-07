# Polkadot Common Good Apps Hub

- **Team Name:** Polkadot Common Good Apps Hub
- **Payment Address:** 16a9hgY6qv2U8UkwKeerosoNzFhwN1Tp3B6HYy6JcRbXxT7R (Polkadot AssetHub / USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Project Objective

The primary goal of our project is to establish a parachain tailored to support a diverse range of applications. These applications will play a pivotal role in making contributions to the network, such as bolstering the treasuries of both Polkadot and Kusama, ensuring a robust financial foundation for the ecosystem's continuous evolution, promoting governance voting, and facilitating any application that serves the greater good. We're committed to fostering an environment within this parachain where the community is empowered to create applications.

### Future Outlook

Our aspiration is for this project to flourish as a parachain on Kusama. If successful, we intend to replicate this model on Polkadot. Our first mission is the well-being of Polkadot and Kusama treasuries, ensuring they function optimally.

For transactions, our parachain will default to KSM/DOT as the native asset. All transaction fees will find their way back to the relay chain treasury. The mode of asset provision will be dictated by the specific role our parachain assumes within the network, be it via reserve transfer or acting as a trusted teleporter on the relay chain (this last statement depends on the community decission).


# Project Details

## Technology Stack

 - Polkadot SDK (FRAME, Cumulus, XCM)
 - Rust
 - Zombienet

## Core Components

Outlined below are the fundamental elements that constitute the Polkadot Common App Hub parachain:

### 1. Runtime and Parachain Node

Our contribution will include both the parachain node and its runtime, complete with the necessary configurations to operate with the relay chain asset (DOT or KSM) as the parachain's native asset.


Additionally, we will be restricting direct access to the Root origin on a local level. The only way to engage this privileged origin will be through the execution of a Transact XCM command from the relay chain governance, leveraging the SuperUser OriginKind, which is consistent with the configuration of system chains.

### Core Components of the Parachain

### Randomness Pallet

In the realm of blockchain, randomness is intricate. Fortunately, with Babe block production, we can harness the epoch randomness from the relay chain. This value will supply the randomness required for applications running in the parachain.

Our solution will explore randomness generation, utilizing validator signatures across the network. Each block will contain a cryptographic signature, which will be used as an input for the subsequent block's randomness generation.

Additionally, we intend to integrate epoch-based randomness. This method will aggregate the cryptographic outputs from validators throughout an entire epoch. At the onset of a new epoch, these cryptographic outputs will be collectively processed to yield a cryptographically secure random value.

Our pallet will feature a state-of-the-art on-chain VRF (Verifiable Random Function) mechanism. This will be anchored on the cryptographic input from the block's author, combined with certain unpredictables, such as the parent block's hash. This synergy ensures a high degree of unpredictability in the randomness generated.


The `cumulus_pallet_parachain_system` offers `validation_data` and `relay_state_proof` methods, forming the cornerstone of our randomness generation.

Moreover, this pallet will be crafted with a generic design, allowing any parachain in the ecosystem to seamlessly integrate it into their runtimes to obtain random values.

### Pallet Contracts and Custom Upload Development

To reduce barriers for builders creating applications, we plan to implement pallet contracts that support ink! based smart contracts. This approach provides a more accessible avenue for builders to deploy applications without the need for developing a separate pallet. Crafting a pallet can sometimes be time-consuming as it necessitates adhering to runtime requirements, benchmarking, and other considerations. By offering pallet contracts, we're not dissuading the community from constructing their own pallets and integrating them into the parachain runtime.

We envision applications developed on the parachain to be overseen by the relay chain governance. Consequently, direct contract uploads from any runtime origin will be disallowed. An intermediary pallet will be introduced to regulate which specific contracts can be uploaded.

#### Registration Process:

1. The intermediary pallet will maintain a storage map that records the hash of an authorized contract code.
2. Only a privileged origin (Root) can insert this entry. As highlighted earlier, exclusive access to the Root origin will be granted to the relay chain governance. Thus, the registration call can only be made via a Transact XCM call with SuperUser permissions from the relay chain's governance.
3. If the origin from the XCM Transact aligns, the item will be recorded in the storage map, signifying that the contract has been authorized for upload to the pallet contracts.
4. Once the contract hash is registered in the pallet's storage, an extrinsic will be made available to facilitate the upload to the pallet contracts.

#### Key Considerations:

- The intermediary pallet will be closely integrated with both the pallet contracts and the pallet utility.
- To prevent any unauthorized origin from uploading a contract, the proxy pallet will be utilized to impose restrictions on upload functionalities:

```rust
RuntimeCall::Contracts(runtime_call) => match runtime_call {
            <Any interacting contract call> { .. } => true,
            // e.g., uploads are not permitted
            _ => false,
},
```

Upon verifying the authorized contract via its registered hash, the utility.dispatch_as call can be invoked to facilitate the contract's upload.




### Destroy Asset Pallet

Given that the parachain's native token will be either DOT or KSM, it's crucial to initiate the chain with a balance. Without it, the chain risks becoming non-functional. The `chain_spec` will preconfigure initial accounts with requisite balances for startup operations, ensuring continued on-chain activity.

However, upon acquisition of genuine KSM/DOT tokens, the preliminary balance must be eradicated to maintain equilibrium within the ecosystem.

Here's a Rust snippet illustrating how this balance dissolution can be implemented:

```rust
pub type PositiveImbalanceOf<T> =
	<<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::PositiveImbalance;
pub type NegativeImbalanceOf<T> =
	<<T as Config>::Currency as Currency<<T as frame_system::Config>::AccountId>>::NegativeImbalance;
    
let mut imbalance = <PositiveImbalanceOf<T>>::zero();
let (debit, credit) = T::Currency::pair(amount);
imbalance.subsume(debit);

T::ToBurn::on_unbalanced(credit);
```

Through this mechanism, we ensure that the parachain operates without any distortions induced by superfluous balances.


### Sudo pallet

During the parachain launching period, the pallet-sudo will be configured such that the root key is assigned to a multisig managed by the Polkadot Common Good Apps core team. This measure is predicated on the notion that should unforeseen issues arise, they can be swiftly rectified.
For future references, this pallet will be excised from the runtime once the system's stability is ascertained.

### FRAME pallet assets and pallet NFT

Given that fungible and non-fungible assets are integral functionalities for decentralized applications, our runtime will include instances of both the FRAME `pallet-assets` and `pallet-nft`. By doing so, we ensure that applications requiring these functionalities can easily leverage the built-in capabilities of existing FRAME pallets, streamlining the development process for builders.

### FRAME Utility and Proxy pallet.

For executing the custom upload process for contracts as described, it's imperative to configure both `pallet-utility` and `pallet-proxy` within the runtime.

### Zombienet Configuration File

A dedicated Zombienet configuration file will be shared, allowing users to launch the network on a local environment and conduct hands-on interactions.

### Tasks Excluded from This Grant

- Any costs associated with deploying the parachain.
- Ongoing maintenance expenses for the parachain.
- Governance-related activities or decisions.

## Ecosystem Fit

Born from the collective vision of the Polkadot community, this project is tailored exclusively for the Polkadot network, utilizing its specific tech stack and network elements.

We will replicate the functioning of system parachains where all decisions—whether such as runtime upgrades or the introduction of a novel application—will be determined through a voting process from the relay chain governance.

The foundation for this initiative is rooted in the community's concerns surrounding the health of the treasury. Below are links to discussions that highlight these concerns:

- [Adjusting the Current Inflation Model to Sustain Treasury Inflow](https://forum.polkadot.network/t/adjusting-the-current-inflation-model-to-sustain-treasury-inflow/3301)
- [Kusama Treasury Follow-up Analysis: Continued Budgeting Incompetence](https://forum.polkadot.network/t/kusama-treasury-follow-up-analysis-continued-budgeting-incompetence/3143)
- [Kusama Historical Analysis: Spending, Core Time Demand, and Treasury ROI](https://forum.polkadot.network/t/kusama-historical-analysis-spending-coretime-demand-and-treasury-roi/3436)
- [A Better Treasury System](https://forum.polkadot.network/t/a-better-treasury-system/291)
- [Kusama Treasury Analysis & Reconfiguration](https://forum.polkadot.network/t/kusama-treasury-analysis-reconfiguration/2484)

While this project doesn't propose a radical transformation to the treasury protocol, it can certainly be perceived as a novel approach to address the prevailing concerns in the ecosystem.


## Team :busts_in_silhouette:

### Team members

- **Albert Burgos**: Product & Project Manager
- **Javier Matias Jimenez**: Fullstack Blockchain Engineer
- **Sebastian Matias Nuñez Leal**: Fullstack Blockchain Engineer


### Contact

- **Contact Name**: Albert Burgos Carrero
- **Contact Email**: albertpolkadotspain@gmail.com


### Legal Structure

- **Registered Address**: No registered address
- **Registered Legal Entity**: No registered entity


### Team's experience

**Albert** is Head Ambassador of Polkadot in Spain where he helps and guides the country's 20 ambassadors. Founder of Polkadot World, a project dedicated to helping Polkadot be one of the best Web3 projects in all possible areas.
Albert has organized important events for the community including Polkadot World Madrid, Polkadot World Barcelona, Polkadot Hackathon Latam and the Polkadot Ambassadors Gathering in Europe, he is also the curator of the Spanish-speaking bounty.
His entrepreneurial soul has no limits and he wants to continue giving his best to continue building and contributing to the ecosystem.
Currently Albert has his own events company while he combines it with his role as Head Ambassador.


**Sebastian**, a seasoned IT professional adept at steering technology projects from inception to fruition, ensuring adherence to strict deadlines. Boasts a rich background as an information systems architect, underpinned by robust analytical prowess. Proficient in object-oriented programming methodologies, he has consistently demonstrated his ability to work harmoniously within teams throughout all project phases, from testing to final deployment. He prides himself on his exceptional communication aptitude, and proven managerial expertise. He has a track record of guiding and mentoring team members to achieve peak productivity while fostering a harmonious team atmosphere.
Sebastian was a member of the Polkadot Blockchain Academy in August 2023: Successfully completed a comprehensive course, gaining in-depth knowledge and practical experience with Polkadot's decentralized blockchain platform.
W3 Experience:
Freelance Software Engineer, P4 Games – NFT Ludus Game:Collaborated on a diverse array of projects tailored to meet specific client requirements.


Specialized in:


Web3 development
Smart Contract creation
Full-stack development


**Javier** is an experienced Software Developer with a passion for continuous learning. 
With years of hands-on experience in software development, he possesses a strong foundation in creating efficient and reliable solutions. 
Over the past six months, he has taken his curiosity to the next level by immersing himself in Rust programming. This endeavor led him to the Polkadot Blockchain academy, where he gained valuable insights into blockchain architecture and practical experience with the Substrate framework. 
He’s looking forward to creating innovative solutions at the intersection of software development and blockchain technology.


### Team Code Repos

- [Polkadot-Common-Good-Apps Github](https://github.com/orgs/Polkadot-Common-Good-Apps) <Organization> 
- https://github.com/smnunezleal <Sebastian>
- https://github.com/javiermatias <Javier>

### Team LinkedIn Profiles

**Github Organization**
- https://www.linkedin.com/in/albert-burgos/<Albert>
    
**Github profiles**
- https://www.linkedin.com/in/javier-matias-jimenez/ <Javier>
- https://www.linkedin.com/in/smnunezleal/<Sebastian>


## Development Status :open_book:


### Proof of Concept

Currently, our team has delved into certain facets of FRAME and XCM development as a preparatory step for this endeavor. Stemming from this, a rudimentary proof of concept was conceived, showcasing interactions with the existing FRAME pallet and a bespoke randomness implementation. The 'LikeRandomness' pallet, while not generating a truly random value, serves as an adequate proof of concept to liaise with the Randomness trait needed by the pallet. In addition, the FRAME  pallet underwent modifications to tightly integrate with the pallet-xcm, enabling it to invoke extrinsics from this pallet, such as `teleport_assets`.

[Repository Link](https://github.com/Polkadot-Common-Good-Apps/polkadot-sdk#polkadot-common-good-apps)

## Development Roadmap :nut_and_bolt:
### Overview

- **Total Estimated Duration:** 3 months.
- **Full-Time Equivalent (FTE):**  3 FTE
- **Total Costs:** 29,900 USD

### Milestone 1 — Parachain node and runtime setup.

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code. |
| **0c.** | Zombienet | We will provide a zombienet configuration file to spin up the chain locally. |
| 1. | Runtime | The parachain runtime with its corresponding XCM configuration will be delivered.|
| 2. | Parachain node | A cumulus-based node containing the runtime chain specs will be developed and provided. |
| 3. | FRAME Pallets | The NFT, Assets, Proxy and Utility FRAME pallets will be configured. |

### Milestone 2 — Contracts pallet and custom upload pallet

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 10,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code. |
| **0c.** | Testing and Testing Guide | The custom contracts upload pallet will contain the corresponding unit testing for assuring code quality. A comprehensive guide to test the milestone will be delivered detailing each step. |
| 1. | Contracts Pallet | The pallet will be configured in the runtime to allow WASM based smart contracts executions in the parachain. |
| 2. | Custom contract upload process | According to the contracts upload process described, the corresponding logic for the pallet will be delivered including it's documentation, XCM related work and it's corresponding testing guide |

### Milestone 3 — Pallet Randomness.

- **Estimated duration:** 1 month
- **FTE:**  3
- **Costs:** 9,900 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide a user tutorial to visualize the random value generated from the pallet. |
| 1. | Randmoness Pallet | Develop the specifications and details described in the pallet randomness section. |
| 2. | Dummy Random Testing Pallet | A testing pallet for reading the random value generated form the randomness pallet. This pallet will test mostly the Randmoness trait implementaion. |

## Future Plans

- The subsequent phase post this grant will revolve around liaising with the community to showcase the project, aiming to secure funding for running operational costs such as infrastructure fees, parachain support and maintenance, and novel developments.
- If consensus is reached within the community, this chain might operate following the model of existing Common Good Parachains (now known as system chains). As this chain is tailored for a more specific common good purpose rather than system utility, labeling it as a system chain wouldn't be fitting. In case this is feasible, we would implement the the following XCM configuration to recognize the Asset Hub as the reserve of relay chain assets.



```rust=
parameter_types! {
	pub const DotLocation: MultiLocation = MultiLocation::parent();
	pub AssetHub: MultiLocation = (Parent, Parachain(1000)).into();
	pub DotAssetHub: LocatableAssetId = LocatableAssetId {
		location: AssetHub::get(),
		asset_id: DotLocation::get().into(),
	};
}

pub struct XcmConfig;
impl xcm_executor::Config for XcmConfig {
	type IsTeleporter = ConcreteNativeAssetFrom<DotLocation>;
}
  
```
- Create applications that incentives the the governance voting.
- Aligning with Polkadot's new vision built on Core Time, the parachain will need to navigate through the process of acquiring core time to secure the necessary block space. The team will craft a robust strategy to ensure seamless operations.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 
Web3 Foundation Website / Medium / Twitter / Element / Announcement by another team / personal recommendation / etc.

Albert has been an active participant in the ecosystem for a substantial period. The team has been aware of the Grants Program for some time through various channels: notably, other teams that have benefited from the grant.


