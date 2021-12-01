# W3F Grant Proposal

- **Project Name:** Project Idiyanale - Phase 1
- **Team Name:** Anagolay
- **Payment Address:** `0x3da76bca7ccc8f92dc9c3bc000ea5fc64d7f76b8` (USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

We applied for a grant in 2020 and got approved under the name [Sensio Network](https://github.com/w3f/Grants-Program/pull/5). Since then we did a lot of research and improved the approach. We did rebranding; SensioPhoto is [Kelp Digital](http://Kelp.Digital) and SensioNetwork is [Anagolay Network](http://Anagolay.Network).

### Overview

Anagolay is a peer-to-peer network that stores records of Rights (Copyright, Licenses, and Ownership), Restrictions, and Proofs of any digital content. It empowers the users to store, claim, sell, and rent their work with the correct transfer of Rights and usage of Licenses. Actual digital data is _never_ stored on the chain, only the respective cryptographic proof. As such, it acts as an identifier, verifiable by users who have access to that same data without disclosing it in the process.


In this grant we will focus on the core building blocks, **Operation** and a **Workflow**. 


#### Operation 
Operation is a well-structured library with standardized input and output signatures, written in Rust and compiled to WASM. It acts as a lego piece, which you use to connect to other pieces, creating a Workflow. Operation itself consists of two parts, a manifest and its version. The version uses a content versioning system which allows the version to be used as a dependency exactly as it is, always. This solves the problem when a dependency introduces breaking changes at the patch version or gets sold to a bad actor and they ship malicious code, or it's removed from the centralized registry.

 Manifest is ...... 

 There are three types of Operations: `User`, `FlowControl`, and `System`. In this grant, we will focus on `System` Operations and their execution.

#### Workflow 
Workflow is a collection of Operations, chained together producing a tree-like structure where the leaf Operation is the entry-point. Once executed, they produce the list of strings that act as the input data identifiers, we call them **Proofs**. The way how Operations are linked together is by following this rule `OperationA.outputType === OperationB.inputType`, this is a standardized interface that every Operation must implement. Execution is performed from bottom to top, where the most bottom operation acts as an entry point for receiving the data. When Operation is executed the Workflow execution function will pass the output as an input to the parent Operation, and so on until the execution reaches the top level when it stops. The Workflow doesn't contain the Operation manifest, rather direct links to the Versions.
You can see [here](#workflow-for-image-poe) a diagram how one Workflow might look like. 

**Execution**

The most important environment for Workflow execution is Browser (WebWorkers) and Nodejs. All the Operations are compiled to WASM which can be run almost [anywhere](https://webassembly.org/roadmap/). Each Operation passes the data to its parent as a `bincode ByteArray`, then the parent Operation deserializes it and uses it. It's the most efficient way we found which still keeps the execution in optimal speed limits. 


#### Example how this approach affects other things
The most obvious examples where this approach is a game-changer are the NFT marketplaces. Especially when it comes to the definition of uniqueness. NFT is considered to be a unique thing, but it's not. What is unique is the identifier and not the content. It is possible to mint the same image as an NFT on different marketplaces ( [Kelp Digital Are NFTs as Unique as We Think? video](https://www.youtube.com/watch?v=ntyZ1tCy9Is) ) and on some marketplaces slightly modified image you can mint again, this alone states that there is no uniqueness. What we are building is a way to determine the uniqueness of the digital content. The Proofs are plural, they are the describing identifiers of the image. When this gets implemented, the NFT will be obsolete and either die out or become something else. Why? Because we rely on the identifiers of the content rather than on the incrementing value which is obtained through the minting process and that makes every image or digital data potential NFT without minting. Third parties ( current NFT marketplaces ) can execute specific Workflow to obtain the Proofs, which they can store internally, or query Anagolay Network to see are these Proofs match any records with claimed Copyrights or Ownerships. Due to the nature of the Operation and its return, not every time, all Proofs will match, especially for an image; remember that the 2 out of 3 are cryptographic proofs, and one is [LSH](https://en.wikipedia.org/wiki/Locality-sensitive_hashing) proof which can be used to calculate the similarity between the original image data and one that is already claimed. We can say that the distance of 0.98 will be considered as valid Proof of equality which means that the uploaded data is already known to the system and already has the owner. Example Workflow is [here](#workflow-for-image-poe)

#### Workflow for image PoE
Here is a working example of the Workflow, represented as a diagram for the dependencies only which at the end of the execution provide 3 proofs; 2 CIDs and 1 Perceptual hash. These Proofs are tied together and represent the identifiers of an image.  

Image is located [here](https://bafybeieh5nuwrr2f75ejf4nalc5xyhrspj67yl7ha27toupsrg5wnowedm.ipfs.dweb.link/universe.jpg)

![Diagram of a workflow that creates the PoE of any image](https://bafybeihrkjwjgfqrhnlgtmjbd3zkfmdzyqmbdjsqj3hghxtiobi7ng7ilm.ipfs.dweb.link/AnagolayNetwork-Workflow_for_PoE_of_an_image.jpg)


### Project Details

We expect the teams to already have a solid idea about your project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI components 
  - N/A
- Data models / API specifications of the core functionality
  - N/A
- An overview of the technology stack to be used
  - Substrate, Rust, Wasm, wasm-bindgen, Typescript, Svelte or React
- Documentation of core components, protocols, architecture, etc. to be deployed
  - After every milestone, we will deploy the deliverables on our infra for testing.
- PoC/MVP or other relevant prior work or research on the topic
  - check [Anagolay Dev](https://anagolay.dev)
- What your project is _not_ or will _not_ provide or implement
  - The scope of the project is experimental and is not going to produce a production-ready artifact

### Ecosystem Fit

Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit into the ecosystem?
  - Substrate based projects ( standalone pallets )
    - can include and use the Anagolay pallets if they wish to maintain the Proofs and Statements for themselves
    - can include and use the Anagolay pallets to store and build the Workflows and Operations
  - Substrate based projects ( using Anagolay chain )
    - define their Workflows which are stored on the Anagolay chain and then execute them on the runtime or in off-chain-workers
    - chains that require Rights management for Copyrights and Ownerships of digital content where they would create them and assign to the users
    - using the Anagolay Workflows on any rust or wasm able runtime
- Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?
  - any chain, dApp, or a hybrid app that requires the Rights management for Copyrights and Ownerships
  - ourselves with the [Kelp.digital](https://kelp.digital) project
- What need(s) does your project meet?
  - Rights management for Copyrights and Ownerships
  - Verifiable Proofs using the transparent process ( Workflow )  
- Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?
  - NONE

## Team :busts_in_silhouette:

### Team members

- Daniel Maricic
- Adriano Dalpane
- Suraj Kumar

### Contact

- **Contact Name:** Daniel Maricic
- **Contact Email:** daniel@woss.io
- **Website:** [https://anagolay.network](https://anagolay.network)

### Legal Structure

No legal structure yet. We are planning to create an Anagolay Foundation in the future. All IP is held by Daniel Maricic which he will transfer to the Anagolay Foundation at the time of its creation.

### Team's experience

#### Daniel Maricic

An IT generalist with 13 years of on-hand experience in different business domains and building large and scalable applications from Fintech to real-time auctions and image management software. Four years ago he came up with the idea to create software that would help him share his photos with built-in copyrights and licenses. That idea evolved into two distinct projects, Anagolay and Kelp.

#### Adriano Dalpane

He is a developer with 11 years of experience in the domain of several telecom operators and travel industry. Passionate about AI, he implemented a Monte Carlo Tree Search artificial intelligence for a game and a Bayesian classifier to perform match-making on a marketplace platform. He has been working with Rust and Substrate blockchain technologies for about two years and more recently he joined the Anagolay team.

#### Suraj Kumar

He is a Computer Science Engineer with hands-on experience with substrate framework. He was a part of a successful w3f grant in the past where he created substrate pallets for music management. He joined the team 5 months ago to help us build the next-generation blockchain for Copyrights and Ownerships.

### Team Code Repos

- [https://gitlab.com/anagolay/docs](https://gitlab.com/anagolay/docs)
- [https://github.com/anagolay/anagolay-chain](https://github.com/anagolay/anagolay-chain)
- [https://github.com/anagolay/js-sdk](https://github.com/anagolay/js-sdk)

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- [https://github.com/woss](https://github.com/woss)
- [https://github.com/digitalillusion](https://github.com/digitalillusion)
- [https://github.com/s5k0651](https://github.com/s5k0651)

### Team LinkedIn Profiles (if available)

- [https://www.linkedin.com/in/danielmaricic/](https://www.linkedin.com/in/danielmaricic/)
- [https://www.linkedin.com/in/adriano-dalpane/](https://www.linkedin.com/in/adriano-dalpane/)
- [https://www.linkedin.com/in/s5k0651/](https://www.linkedin.com/in/s5k0651/)

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 3 months
- **Full-Time Equivalent (FTE):** 3 FTE
- **Total Costs:** 45,000 USDT

### Milestone 1 — Implement core functionality

- **Estimated duration:** 1 month
- **FTE:** 3
- **Costs:** 15,000 USDT

This milestone will set the base for the next milestones.
| Number | Deliverable                      | Specification                                                                                                                                                                                    |
| -----: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License                          | All `an_` prefixes will be GPLv3, all `op_` Apache2                                                                                                                                              |
|    0b. | Documentation                    | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create Operations and their versions. How to store them on the chain and query them |
|    0c. | Testing Guide                    | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                |
|    0d. | Docker                           | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                       |
|    0e. | Article                          | We will publish an article that explains what was done as part of the grant, with the focus on the developers' community                                                                         |
|     1. | Substrate module: `an_operation` | [See here](#substrate-module---an_operation)                                                                                                                                                     |
|     2. | Benchmarks: `an_operation`       | Improving the benchmarking and re-calculation.                                                                                                                                                   |
|     3. | Anagolay CLI: Operation Part 1   | [See here](#anagolay-cli-operation-part-1)                                                                                                                                                       |
|     4. | Operation: `op_file`             | [See here](#operation---op_file)                                                                                                                                                                 |
|     5. | Rust demo crate - Part 1         | Part 1 of the rust demo crate. Setup the initial structure for the demo as a lib and binary.                                                                                                     |


#### Substrate module - an_operation
We will create a Substrate pallet that will contain the storage and extrinsics for creating the `Operation`s and `OperationVersion`s and their storage items. The storage items include all the stores we will need (not 100% decided yet) and mapping storage for `OperationVersion <-> Operation`. The list of extrinsics is not 100% defined yet and what we have might be subject to change, but what we have defined is the following:

__Extrinsics__:

  * `create` - This extrinsic is used to store the Operation, their version, and the mapping. All mandatory checks are run before the saving. The submitting account ID will be the owner of the data.
  * `approve_version` - This extrinsic is used to approve the OperationVersion after a successful test from the community. This part will come later and this is used now to build a base for new features and as a rule where every OperationVersion must be approved before being used in the Workflow  

__Storage__:

* `Operations` -  `StorageDoubleMap` is a mapping between the `Operation_CID`, `AccountID`, and the actual data
* `OperationCount` -  `StorageValue` a `u64` incremented when we create Operation
* `OperationVersions` - `StorageMap`, a mapping between the `Operation_CID` and `Vec<OperationVersion>`, where the last item is considered to be the latest

> 💡 Note that there is no `DELETE` on the Operations or OperationVersions. We can implement that in the future but then we need to figure out what to do with the `OperationVersion` since that is stored on the IPFS + Filecoin for maximum availability ( and we all know that it's almost impossible to remove them once they end up with the FIL deal ). So, we are not deleting anything now, rather using the `approve` approach. 

[V1 of Operation is explained here](https://anagolay.dev/about/operation/) 


[ ◀️ Go back to Milestone 1](#milestone-1--implement-core-functionality)


#### Operation - op_file
We will create an Anagolay operation called file. This operation can take a string or a file buffer. In the case of the string, it will read the file and return the file buffer instance, in the case of a buffer it will return the correct instance. This way we can make sure that all targeted environments are using the same file reading approach and correct return data. Of course, the wasm will accept the `ArrayBuffer` and it will be correctly returned for any other operation that is executed after in the browser environment. Nodejs and Rust can simply pass the file path as a string and the `op_file` will read it.

[ ◀️ Go back to Milestone 1](#milestone-1--implement-core-functionality)


#### Anagolay CLI: Operation Part 1
The purpose of the CLI is to build the Operation artifacts, rehost the repository, store all the links to the Anagolay chain, and scaffold new Operation

We will implement this list of features:
* build WASM with `.d.ts` for 
  * web environment as per [wasm-bindgen doc](https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html#without-a-bundler)
  * nodejs environment as per [wasm-bindgen doc](https://rustwasm.github.io/docs/wasm-bindgen/reference/deployment.html#nodejs)
* Upload the artifacts to the IPFS
* Store the info on the chain
  * Operation Version
  * Operation
  
The following code snippet illustrates how the process should look like. 

```shell

 > anagolay operation publish
Packing the operation op_file ... 
Packing is done ✅

Publishing ...
Publishing is done ✅

Saving to the Anagolay network...
Saving is done ✅


Operation published and the ID is bafybeifcmrf2ulnwdrhjpkwi2ifbixegegcs22rqbvlzhlcfklzw2ye4fu 
```


[ ◀️ Go back to Milestone 1](#milestone-1--implement-core-functionality)



### Milestone 2 — Implementing the Workflow pallet, execution, manifest generation, and CID and Multihash Operations

- **Estimated duration:** 1 month
- **FTE:** 3
- **Costs:** 15,000 USDT

| Number | Deliverable                                | Specification                                                                                                                                                                                    |
| -----: | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License                                    | All `an_` prefixes will be GPLv3, all `op_` Apache2                                                                                                                                              |
|    0b. | Documentation                              | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create Operations and their versions. How to store them on the chain and query them |
|    0c. | Testing Guide                              | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                |
|    0d. | Docker                                     | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                       |
|    0e. | Article                                    | We will publish an article that explains what was done as part of the grant, with the focus on the developers' community                                                                         |
|     1. | Substrate module: `an_workflow`            | [See here](#substrate-module---an_workflow)                                                                                                                                                      |
|     2. | Benchmarks: `an_workflow`                  | Creating the benchmarking                                                                                                                                                                        |
|     3. | Anagolay CLI: workflow manifest generation | [See here](#anagolay-cli-workflow-manifest-generation)                                                                                                                                           |
|     5. | Operation: `op_cid`                        | [See here](#operation---op_cid)                                                                                                                                                                  |
|     6. | Operation: `op_multihash`                  | [See here](#operation---op_multihash)                                                                                                                                                            |
|     7. | Demo nodejs app part 2                     | Creating the nodejs app which will use implemented operations as WASM and produce the CID of an image                                                                                            |
|     9. | Rust demo crate - Part 2                   | Creating the rust crate which will use the implemented Operation as a rust library to read a file and generate the CID.                                                                          |

> __NOTE__: All the apps, _Nodejs_, and _Rust demo crate_ when executed must produce the same CID. WHY? Because if they use the same data and the same Workflow they must produce the same output. Same Workflow means using the same Operation manifest which means using the same Operation Version. 100% the same code execution!


#### Substrate module - an_workflow
We will be implementing the `an_workflow` pallet which will contain extrinsics and storage. This pallet is used to store and retrieve the Workflow manifest which is then used by developers to create or verify the set of proofs. The [Workflow execution](#workflow-execution) depends on this pallet and its storage. For Workflow explanation click [here](#workflow-explanation).

#### Anagolay CLI: Workflow manifest generation
 We will build an interactive CLI which will be used to generate the Workflow manifest, validate it and store it on the chain. The CLI will be written in Typescript for Nodejs environment and published on IPFS and maybe NPM. The exact structure is not yet defined but here is the idea of what it should look like:
 ```text

 > anagolay workflow create
Please select the starting operation from the list:
✅: op_file
🟢: op_multihash
🟢: op_cid

Do you want to add a dependency? (Y:n)
Please select the next operation from the list:
✅: op_multihash (blake3)
✅: op_multihash (sha2)
✅: op_multihash (blake2b)

Enter Workflow name: Anagolay Image PoE workflow
Enter Workflow description: Proof of existence for any image with multiple identifiers

Are you done? (Y:n)

Saving to the Anagolay network...

Workflow created with the ID: bafybeifcmrf2ulnwdrhjpkwi2ifbixegegcs22rqbvlzhlcfklzw2ye4au 
```

As you can see the second question shows only the operations that can be connected to the previously selected operation. Example of the "Image PoE Workflow" is [here](#workflow-for-image-poe)

[ ◀️ Go back to Milestone 2](#milestone-2--implementing-the-workflow-pallet-execution-manifest-generation-and-cid-and-multihash-operations)


 #### Operation - op_cid
We will create an Anagolay operation called `op_cid`. This takes any Multihash type and generates the CID with the multicodec set as `RAW` and the multibase set as `base32`.

#### Operation - op_multihash
 We will create an Anagolay operation called `op_multihash`. The Operation takes a buffer and creates the multihash instance. Possible multihashes will be `sha2-256`, `blake2b-256`, and `blake3`     

### Milestone 3 — Finalizing the feature set

- **Estimated duration:** 1 month
- **FTE:** 3
- **Costs:** 15,000 USDT

| Number | Deliverable                    | Specification                                                                                                                                                                                    |
| -----: | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    0a. | License                        | All `an_` prefixes will be GPLv3, all `op_` Apache2                                                                                                                                              |
|    0b. | Documentation                  | We will provide both inline documentation of the code and a basic tutorial that explains how a developer can create Operations and their versions. How to store them on the chain and query them |
|    0c. | Testing Guide                  | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                |
|    0d. | Docker                         | We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.                                                                                       |
|    0e. | Article                        | We will publish an article that explains what was done as part of the grant, with the focus on the developers' community                                                                         |
|     1. | Workflow: execution            | [See here](#workflow-execution)                                                                                                                                                                  |
|     2. | Anagolay CLI: Operation Part 2 | [See here](#anagolay-cli-operation-part-2)                                                                                                                                                       |
|     3. | Demo nodejs app part 3         | Improve Part 2 with automatic Workflow execution which will produce correct Proofs.                                                                                                              |
|     4. | Demo web app                   | Simple web app which will use the Workflow automatic execution and produce correct Proofs. Tech used Svelte or React with Typescript and Bulma for CSS                                           |



> __NOTE__: All the apps, _Nodejs_, and _Web app_ when executed must produce the same Proofs. WHY? Because if they use the same data and the same Workflow they must produce the same output. Same Workflow means using the same Operation manifest which means using the same Operation Version. 100% the same code execution!
> 
#### Workflow: execution
Execution of the Workflow manifest created in [#3](#workflow-manifest-generation). We will implement basic recursive and automatic execution of the Workflow only for `SYSTEM` Operations. The execution will load all the dependencies and execute them in the correct order.  We will NOT implement any kind of optimizations like caching or memoization to gain a boost in speed.  


#### Anagolay CLI: Operation Part 2
Part 2 will focus on rehosting the operation source code git repository and scaffolding new ones. The rehosting creates an immutable link that replaces the traditional semver and it must be used as a dependency in the package.json files. If you want to know more about the approach in general, Daniel wrote an article about it [here](https://dev.to/woss/part-1-rehosting-git-repositories-on-ipfs-23bf). 

We will implement this list of features:
* rehost the repo to the latest revision
* simple scaffolding of the Operation file structure

The invocation will be like this :

```bash
> anagolay operation init op_create_qrcode
Scaffolding...
Done ✅!

Next steps: cd op_create_qrcode && start developing
``` 


## Future Plans

Later, we will implement the social aspect of the Operation and Workflow credibility creating the revenue streams for developers who will be testing the Operations and the developer who creates the Operation. This is part of the Reputation system for the Developers, Operations, and Workflows.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?**

We already applied for a grant which got selected and approved. The details are in the [Project Overview](#project-overview-page_facing_up)

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
  - We have done the V1 of the Operations which are currently written in Typescript. They didn't scale and they needed to revamp.
  - JS SDK written in Typescript is created to support V1 and used in our pilot project [Kelp.digital](https://kelp.digital) which is still in the development phase.
- If there are any other teams who have already contributed (financially) to the project.
  - Founders only, Daniel Maricic and Elena Tairova
- Previous grants you may have applied for.
  - Mentioned in [Project Overview](#project-overview-page_facing_up)
