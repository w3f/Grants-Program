# Solang Playground


- **Team Name:** Salaheldin Soliman
- **Payment Address:** 0x9036b20920ddf473e796d24afd0fe04d4dde0b68
- **Payment Details:** DAI (ERC20)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2


## Project Overview :page_facing_up:

This application is a follow-up grant for this [grant](https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md). The main theme is improving Solidity developer experience on non-EVM chains.

### Overview

Solang compiles Solidity smart contracts to Substrate and Solana targets. An in-depth overview of Solang's purpose and motivation can be found at https://hyperledger.github.io/hyperledger-hip/HIPs/solang.html.

Solang Playground will be a web based IDE that allows users to compile and interact with Solidity smart contracts in a browser environment, without prior installation of any of the needed components: `Solang`or `Substrate contracts node`. The aim here is to provide an experience similar to what [Remix IDE](https://remix.ethereum.org/) provides, as Remix is the first tool Solidity developers get introduced to in their smart contract learning track.


### Project Details
The aim of this project is to implement a web based IDE for Solang, and continue to improve it until full maturity. Therefore, improving Solidity developer experience on Substrate based chains through undertaking the following milestones:

#### First Milestone: Solang's language server integrated in a Solidity Web Editor Client

##### Task 1: Language server package
As of now, `Solang` has a builtin language server. That is, the language server is a subcommand of the Solang executable. If the language server code is separated from Solang, in a standalone crate, and compiled to `wasm`, it should be able to run in a browser environment.
Compiling Solang as a whole to `wasm` would be a more challenging task since its dependence on `LLVM`, so this would be considered as a future improvement to the IDE.
The aim of this task is to develop a version of Solang's language server that could be compiled to `wasm`, and could be integrated to a web code editor.


##### Task 2: The Web IDE client.
Now that the language server `wasm` executable is ready from task one, we are ready to integrate it to a front-end which will provide the following functionalities:
1- uses `Monaco editor` to edit `solidity` and `.toml` files.
2- uses the `wasm` Solang language server to improve Solidity code editing experience.

At this point, the client should take its initial design: A simple web IDE with a file explorer and a code editor
![](https://hackmd.io/_uploads/Sy8wDpAi2.jpg)

###### Note: This is a mock UI where Solidity code is not hinted by the language server. At the end of the project, there would be a section showing the deployed contracts and how to interact with them.

#### Second Milestone: Solang Playground Backend Service

The aim of this milestone is to develop a back-end server that is responsible for the following:
1- Compile Solidity source files.
2- Return Compiled byte-code as well as contracts metadata to the client (front-end)

To achieve this functionality, the server will host the following:
1- Solang Compiler docker image.

The back-end server will be built using the `actix framework`.

In the end of this milestone, the client should be able to interact with the back-end server, and the architecture will look like this:
![](https://hackmd.io/_uploads/ByjxjgFjh.png)

At this point in the project, The client should be able to save and edit Solidity source files, compile them and save the compiled byte-code and metadata.




#### Third Milestone: Substrate contracts nodes interaction


##### Task 1: Investigate and integrate means for Substrate node interaction

In order to deploy and interact with a smart contract, a run-time is needed (Substrate contracts pallet). Here are the existing options:

1- Interact with a public test-net.

2- There is [Drink](https://github.com/Cardinal-Cryptography/drink), which provides a minimal substrate run-time with a an interface to interact with. This Could be compiled to `wasm` and won't need to be hosted in the back-end server.

3- Host a substrate contracts node on the back-end server.

###### Note: My decision will be more inclined towards the first two options. The reason is that in the near future, `llvm` wasm package would be up-streamed and `Solang` can be compiled to `wasm` then. A future plan for the IDE is that it doesn't depend on any back-end service.


At the end of this milestone, the architecture will evolve into this:
![](https://hackmd.io/_uploads/HksDHFAoh.png)


The front-end will be responsible for providing language smarts from Solang's language server, and taking the following from the user and sending them to the Back-end: 
1- Solidity source files
2- Compiler options

The back-end will respond with compilation results: compiled bytecode and contracts metadata. The contracts will then be deployed and interacted with through scripts accessible to the client. The aim of this milestone is to merge milestones one and two, and to provide a test suite ensuring that front-end and back-end interactions are happening seamlessly. After this milestone, I will share blog posts and articles inviting Solidity developers to try out the IDE.


#### Fourth Milestone: IDE Improvements

Remix IDE has some attractive functionalities to any solidity developer, which we would like to see on the Substrate side:


1- Calling a  specific function by the click of a button, alongside with the required parameters. E.G. similar to `contracts UI`. (Only possible on the Substrate side)

2- Initializing the work-space with an example contract in a `Solang project` file structure ready for deployment and interaction.


These functionalities will be implemented as a first step towards improving the IDE.



#### Important Note: This grant will be more focused on achieving core functionality rather than making the IDE visually attractive. This would be considered as a future plan for improving the IDE.


### Ecosystem Fit

- **Where and how does your project fit into the ecosystem? Who is your target audience? What need(s) does your project meet?**

Quoted from the Ecosystem Fit section of the previous completed grant application, this statement still holds: "We still have a long way to go in terms of developer experience with Solidity on Substrate based chains. Although Solang as a compiler itself can be considered a huge step towards attracting solidity developers to the Polkadot/Kusama ecosystems: The Solidity developer experience on Ethereum far exceeds that of "Solidity Contracts on Substrate", caused by our inferior tooling and debugging story."

The story stays the same, but the solution offered here is different: By Offering an `EVM` developer an easy portal to the Substrate echo-system, especially with the language they love (Solidity) alongside a fairly good IDE that will be comparable to Remix in the long run, Substrate based chains will be an easy to try option without any prior installation of any component.

This project would benefit any para-chain using the `wasm` contracts pallet.

- **Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?**

Yes. There exists paritytech's [Ink! Playground](https://github.com/paritytech/ink-playground). As the name implies, Ink! Playground would compile and deploy ink! contracts, not Solidity.
As a matter of fact, I investigated integrating Solang to Ink! playground, but this implied two problems:
1- Changing the name of the project. (Not likely to take place)
2- Convincing the contributors to integrate Solana. (Not likely to take place)



## Contributer :busts_in_silhouette:


### Contact

- **Contact Name:** Salaheldin Soliman
- **Contact Email:** salaheldin_sameh@aucegypt.edu


### Relevant experience

1- Worked on Solang as part of the [Hyperledger Mentorship Program](https://wiki.hyperledger.org/display/INTERN).

a. Implemented [array bounds checks optimization](https://solang.readthedocs.io/en/latest/code_gen_options.html#array-bound-checks-optimization).
b. Implemented [multiplication overflow detection during runtime](https://github.com/hyperledger/solang/pull/988).
c. Implemented [constant overflow detection during compilation](https://github.com/hyperledger/solang/pull/1024#ref-commit-baaa425).
d. Improved [Solang's parser resilience](https://github.com/hyperledger/solang/pull/1068).


2- Worked on Solang as part of a previous W3F [grant](https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md). 

### Github Handle

- https://github.com/salaheldinsoliman


### LinkedIn Profile

- https://www.linkedin.com/in/salaheldinsoliman/


## Development Status :open_book:

The project can be considered as a helper project for Hyperledger Solang.
Designing the milestone structure was based on some existing IDE structures and design choices. To achieve the desired result, various open-source projects will be integrated.
A list of these projects and their use are briefly documented in this [notion page](https://www.notion.so/Solang-Playground-dfe85d3493a943849af67991e56adbf2?pvs=12).

There were also talks, via mail, with members from the foundation explaining interest in the project.

## Development Roadmap :nut_and_bolt:


### Overview

- **Total Estimated Duration:** 13 months
- **Full-Time Equivalent (FTE):**  ~0.5
- **Total Costs:** 25,000 USD
- **Start Date:** September 1, 2023
- **Spare Period(time extension for unexpected events):** 4 months spare (1 for each milestone) 
### Milestone 1: Solang’s language server integrated in a Solidity Web Editor Client

- **Estimated duration:** 5 month
- **FTE:**  0.75
- **Costs:** 10,000 USD


| Number | Deliverable                | Specification                                                                                                                                                                                                                   |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                    | Apache 2.0                                                                                                                                                            |
| **0b.** | Documentation             | - We will provide both **inline documentation** of the client code and a readme that shows the build steps of the language server `.wasm` binary. |
| **0c.** | Testing and Testing Guide  | - The functionalities of the `.wasm` language server will be tested against the existing test suite of the current language server to ensure robustness.<br/>- Evaluators can fire up the docker container locally and try to edit Solidity source files with smarts provided from the language server.|
| **0d.** | Docker                     | A docker image will be provided so that an evaluator can easily set it up an try out the client locally.               |
| 0e.   | Solang Playground Client |  We will provide a functional web editor in which a developer can edit and save Solidity source files with the help of Solang's language server.(documented code base). |


###### Note: To make things clear, this milestone **only** invovles the integration of the language server into the client. It does not involve compiling or deploying contracts.

### Milestone 2: Solang Playground Backend Service

- **Estimated Duration:** 3 month
- **FTE:**  0.75
- **Costs:** 6,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0  |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a `readme` that shows how to run and interact with the actix web server. |
| **0c.** | Testing and Testing Guide | - Unit tests to be provided to test for the compilation result of the web server. The unit tests will be a part of the server's source code. <br/> - Test scripts for the client's compile functionality. |
| **0d.** | Docker | - A `Docker` container will be provided for the actix web server.  <br/> - A `Docker compose` script to be provided to build both the client container and the backend container and set their networking. |
|1. |  Initial skeleton  | - The client  should have a `compile` functionality in which the bytecode and metadata can be viewed. This would be done by the interaction with the backend server implemented in this milestone. |


### Milestone 3: Substrate node interaction

- **Estimated Duration:** 3 month
- **FTE:**  0.5
- **Costs:** 5,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | Added code to the client will be documented. Steps for deploying and interacting with a smart contract will also be provided at this point. |
| **0c.** | Testing and Testing Guide | - A testing suite will be provided to ensure that the front-end sends the correct requests `(compile, deploy and test)` with correct parameters. The tests will ensure the contracts are deployed and could be interacted with as expected.  |
| **0d.** | Docker | Since this milestone is considered added functionality to the client `(milestone 1)`, the docker provided in the first milestone would be updated and a new container for the client will be provided. |
| 1. | First Working Version | - At this point, a Solidity developer should be able to edit, compile, deploy and interact with a smart contract through the IDE without installing any components.|


### Milestone 4 Solang IDE Improvements

- **Estimated Duration:** 2 month
- **FTE:**  0.5
- **Costs:** 4,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | Apache 2.0 |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and update the `readme` of the playground with the newly added functionalities |
| **0c.** | Testing and Testing Guide | The added functionality will be tested against the test suite provided in milestone 4  |
| **0d.** | Docker | Since this milestone is considered added functionality to the client `(milestone 1)`, the docker provided in the first milestone would be updated and a new container for the client will be provided. |
|**0e.** | Article | I will share a blog-post on multiple platforms inviting Solidity developers to try out Solidity on Substrate using the IDE.|
| 1.| IDE Improvements | 1- Call a specific function by the click of a button, alongside with the required parameters. E.G. similar to `contracts UI`. (Only possible on the Substrate side)<br/>2- Initializing the work-space with an example contract in a Solang project file structure ready for deployment and interaction.


## Future Plans

### Future improvements

#### 1- Removing the Backend Component:

Removing the Back-end component of the web IDE consists of a collection of tasks:

- Investigate compiling Solang to `wasm` to run in the browser. This will imply investigating a suitable way to compile `LLVM` to `wasm`.

- There are implementations of mock Substrate contracts run-time, but they don't support full chain operations. Compiling the runtime with full functionality to `wasm` will be investigated.


#### 2- Making the IDE visually attractive



## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** 

I have already completed a grant under this program. I was first introduced to it by my mentor [Sean Young](sean@mess.org) and the awesome [Cyrill leutwiler](bigcyrill@hotmail.com).
