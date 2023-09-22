# Substrate Tutorials

- **Team Name:** Rusty Crewmates
- **Payment Address:** Payment in DAI at address 0x157018C40D7BCcf3A2683fbd7E9D9A2E9f60eF77 on the ethereum mainet
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview

We want to create a series of Substrate Tutorials.

One of the main issues in the Substrate ecosystem right now is the lack of developers. This is because Rust is hard to learn and so is Substrate. Thankfully, Rust has a ton of great documentation and tutorials. But Substrate doesn't.

Rusty Crewmates is already training Rust developers to Substrate, then finding them positions or bounties. In order to scale this process we started to develop this exact kind of tutorials and open sourced it. Now we would like to gain Parity’s support in order to make those tutorials the referefence for anybody willing to get his hands on Substrate. 

### Project Details

https://github.com/rusty-crewmates/substrate-tutorials  
This repository contains the current state of our tutorials. We open sourced it last month and it has already been used and starred by a dozen people.

It consists of multiple pairs of exercise and solution branches. Each exercise asks the user to fill in some gaps in the code, until all tests pass.

Those exercises are designed to teach about Substrate features and good practices but also some core blockchain mechanisms. As an example you will learn basic pallet building by writing an NFT pallet and pallet coupling by building the marketplace to sell those NFTs.
 
### Ecosystem Fit

Right now, the core resource for developers keen to discover Substrate - which is provided by Parity - can be found here: https://docs.substrate.io/tutorials/v3/.

Only the first four tutorials are general purpose tutorials, and they only consist in copying and pasting lines of code, which turns out to be irrelevant when applying for actual jobs. Realistically, most companies working with Substrate want to focus on their own project and move on quickly. They all need experienced developers and are not confident with hiring juniors and training them, making it even harder for newcomers to gain real world experience.

To break this deadlock, we want to bring more exercises to our fellow Substrate enthusiasts. Exercises that force them to think and try stuff by themselves, skyrocketing their learning curves.

Our project aims to make it easier for new developers to enter the Substrate space, so beginners and intermediate Substrate developers are our primary target.

On another hand it will greatly help Substrate based chains to recruit and train developers, so they can be seen as our secondary target. Moreover we got a lot of positive feedback from projects in the ecosystem. We can name Ternoa, Subql, Nodle, GameDAO, Edgeware, T3rn, Phala Network. All of them were really interested in a solution to train new Substrate developers.
This learning content will fill the missing block between Parity's documentation and tutorials, and the Substrate receipt repository, which is only relevant for developers that already master Substrate core features and want to implement a specific business logic. This repository has recently been taken over by Edgeware, with whom we are working closely at the moment. We expect to be able to create good synergies between all those resources, without duplication because they all are useful, but at different moments in the Substrate developer’s journey.

Our repository being open source, we can attest to a real interest for this project from the community: open sourced two month ago, we already have 25 stars and a dozen of forks, meaning that at least a dozen people started a tutorial. If it means a dozen more Substrate developers on the market, it's already a big win for the ecosystem.


## Team :busts_in_silhouette:

### Team members

- Timothée Delabrouille
- Charlie Armstrong

### Contact

- **Contact Name:** Timothée Delabrouille
- **Contact Email:** timothee.delabrouille@gmail.com
- **Website:** https://rustycrewmates.com/

### Legal Structure

- **Registered Address:** 78 Avenue des Champs-Élysées, Bureau 562, 75008 Paris FRANCE
- **Registered Legal Entity:** Rusty Crewmates SAS  

### Team's experience

Timothée Delabrouille has been working with substrate for the past year at Soramitsu/PolkaSwap and Ternoa. He implemented bridges to Bitcoin, using InterLay protocol, and to Ethereum, using ChainSafe protocol. Also worked with TEE, writing an IntelSGX application, thanks to IntegriTEE project, that interacts with a Substrate chain through a light client running inside the enclave.

Recently he has been working on a Starknet based application, written in Cairo (the Starknet programing language). He is also giving workshops, endorsed by Starkware, to onboard new developers on this difficult and unusual language. One took place at DevCon Amsterdam 2022, another will took place in May at Activate Build Miami.

Charlie Armstrong has a strong background in C, C++ and all sort of different languages and even some electronics. 
He is currently helping with automatisation of neural cells analysis in a research project on spinal cells regeneration.
He recently learned Rust and is going to follow those tutorials as a Beta tester in order to currate them with relevant feedbacks.

Together Timothée and Charlie are Rusty Crewmates, a company that trains Rust developers to Substrate and onboards them on exciting projects. Started in January 2022, they have trained three developers so far, currently working for Ternoa, Subql and Edgeware/Kabocha.


### Team Code Repos

- https://github.com/rusty-crewmates
- https://github.com/rusty-crewmates/substrate-tutorials

- https://github.com/tdelabro
- https://github.com/charMstr

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/in/timotheedelabrouille/
- https://www.linkedin.com/in/charlie-armstrong-b15130227/

## Development Status :open_book:

https://github.com/rusty-crewmates/substrate-tutorials

Here is a link to a list of ideas for new tutorials:
https://github.com/rusty-crewmates/substrate-tutorials/issues/3

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** around 4 month
- **Full-Time Equivalent (FTE):** 0,5 FTE
- **Total Costs:** 25,000 USD

### Milestone 1 - Rework the repository architecture

- **Estimated duration:** 2 weeks
- **FTE:**  0,5
- **Costs:** 5,000 USD

While building the first four exercises we tried different ways to organise the repository and chosed to create one branch per exercise and one branch per solution.

It progressively appeared that it was not scaling very well and that it would make upgrading the exercises to new Substrate releases really time consuming. So before adding any new exercises we want to put all of them in one single `exercises` branch.

Moreover those exercises are just pallets so far, without any requirements for runtime, so we can get rid of the runtime each one of them implements. Instead we are going to add one minimalistic empty runtime, which students can customize at will if they want to run their exercise pallets, along with an exercise teaching how to implement a Substrate runtime.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | For each exercise we will provide a **README** that explains what to do, along with **inline instructions** for the user to follow in the code files  |
| 0c. | Testing Guide | Each exercise will be fully doable with a `solution` branch, passing all tests being the proof |
| 0d. | Docker | We will provide a docker file that will run all solutions |
| 0e. | Article | We will provide a [medium](https://medium.com/) article that presents our repository and invites users to learn from it|
| 1. | Create `exercise` branch | We will get rid of everything in the runtime that is inherited from the substrate template repository (no license) and which is not needed, leaving only a minimalistic working runtime implementation |  
| 2. | Exercise `pallet testing` | We will merge the `ex/pallet_testing` branch into the `exercises` one and adapt it to the new design |  
| 3. | Exercise `fungible token` | We will merge the `ex/fungible_token` branch into the `exercises` one and adapt it to the new design |  
| 4. | Exercise `nft` | We will merge the `ex/nft` branch into the `exercises` one and adapt it to the new design |  
| 5. | Exercise `marketplace` | We will merge the `ex/marketplace` branch into the `exercises` one and adapt it to the new design |  
| 6. | Exercise `runtime` | We will add an exercise explaining how to integrate a pallet into a runtime, compile it and run it. It will come first so students can do this by themselves for any later exercises |
| 7. | Branch `solutions` | We will create a branch `solutions` that mirrors the `exercises` branch, but with working code and all the tests passing |


### Milestone 2 - Add more basic tutorials

- **Estimated duration:** 2 months
- **FTE:**  0,5
- **Costs:** 20,000 USD

At this point we want to enrish our repository with exercises allowing to discover and use more of Substrate basics features.  
We listed a few of them: mocks, running runtime benchmarks to set weights, genesis config, hooks, imbalances, external workers.  
Any Substrate developer will end up using those at some point.  

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | For each exercise we will provide a **README** that explains what to do, along with **inline instructions** for the user to follow in the code files  |
| 0c. | Testing Guide | Each exercise will be fully doable with a `solution` branch, passing all tests being the proof |
| 0d. | Docker | We will provide a docker file that will run all solutions |
| 0e. | Article | We will provide a [medium](https://medium.com/) article that presents the new exercises and invites users to learn from it |
| 1. | Exercise `genesis_config` | We will add a pallet that will teach users how to create a genesis config for their pallets |  
| 2. | Exercise `mocks` | We will add a pallet that will teach users how to mock a pallet in order to test it without overhead |  
| 3. | Exercise `weight` | We will add a pallet that will teach users how to weights to their extrinsics by runing runtime benchmarks |  
| 4. | Exercise `hooks` | We will add a pallet that will teach users how to add usefull hooks to a pallet |  
| 5. | Exercise `imbalances` | We will add a pallet that will teach users about a recuring feature of Substrate's architecture, imbalance. They will understand its role and get familiar with the associated functions |  
| 6. | Exercise `external_workers` | We will add a pallet that will teach users how to make use of external workers |

## Future Plans

We intend to use this tutorials to continue to train developers internaly.
We will promote as Rusty Crewmates on multiple platforms (Linkedin, Twitter, Reddit).

We want to make it a trully colaborative projet where everybody can contribute and add more ressources for newcomers.  
We may ask for a continuation grant either to develop more exercises ourselves or to redistribute to developers with an advanced Substrate level that are eager to contribute.  
We may ask the Edgeware DAO for a complementary grant, as we are already working with them and they are really supportive of any project that gives back to the Substrate ecosystem. This would be coherent with them recentrly taking the responsability of Substrate Recipes from Josh Orndorff. 

On the long term we want this repository to be funded by the Substrate ecosystem as a whole, not just Parity. The feedbacks we got from companies building in the ecosystem were really good and we think some will be happy to sponsor the project with a yearly contribution. The counterparty would be having their logo and a link to their respective websites and hiring pages on our main `README.md`. Visibility against funds. We can even imagine some companies sponsoring by themselves an exercise related to their own specific product, and having their communication elements included on the subject of this exercise.
We saw every Substrate companies struggling to hire, our bet is that they will be happy to have their links on a repository which becomes an obvious step for everybody learning Substrate.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Web3 Foundation Website

The work we have already done so far can be found here: https://github.com/rusty-crewmates/substrate-tutorials  
No other teams have contributed financially to this project.  
No other grants have been apllied for at the moment, but we had several talks with people at Edgeware DAO whom were willing to support this project to apply for some funds of them.
