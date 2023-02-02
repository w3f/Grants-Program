# FuzzLand

- **Team Name:** FuzzLand
- **Payment Address:** 0x3a2a700d9d822D23D3F0F55F4b097753b5B2FC9A (ERC20 DAI/USDT)
- **[Level](https://github.com/w3f/Grants-Program/tree/master#level_slider-levels):** 2

## Project Overview :page_facing_up:

### Overview


tldr: FuzzLand is a DAO leveraging crowd-sourced computation power to achieve **fast**, **accurate**, and **cheap** automated auditing. 

The importance of auditing has grown significantly in recent years as organizations strive to ensure the integrity and security of their systems. However, despite the importance of auditing, it remains challenging, with many auditing companies struggling to provide comprehensive and accurate reports. 

The use of human auditors by auditing firms presents several challenges, including the high costs of recruiting and training qualified personnel and the potential for human error. With the increasing complexity of software systems and the growing volume of data to be analyzed, manual audits can become increasingly time-consuming and error-prone. On the other hand, automated auditing solutions also present their own set of challenges. These solutions typically require high computational power and incur high running time overhead. Thus, many traditional automated auditing tools sacrifice completeness and soundness of the analysis for faster response time, resulting in both false negative and positive results.
 
In contrast, FuzzLand aims to parallelize novel automated program analysis techniques to gain accurate results in a reasonable amount of time. To achieve high parallelism with low costs, FuzzLand platform allows the public to contribute computation power to accomplish the automated auditing in return for token rewards. In the meantime, all the program analysis intermediate statistics and waypoints are verified and stored on the chain, which can finally be leveraged to mint the auditing reports. 

Unlike traditional collaborative manual auditing platforms, FuzzLand uses sound automated program analysis techniques to provide auditing reports. Since the program analysis results and intermediate waypoints can be easily verified through a fully automated oracle, the manual confirmation process is no longer needed. While it is impossible to quantify the performance of human auditors, FuzzLand can quantify the auditing progress and completeness of auditing reports based on metrics backed with on-chain data. 

The FuzzLand platform can offer two key benefits to the ecosystem. Firstly, it allows Substrate module and Ink developers to access low-cost, highly accurate auditing reports for their projects with on-chain guarantees. Secondly, the platform will be implemented as a Substrate chain, and the platform's implementation as Substrate pallets allows for easy reuse by other projects.

### Project Details

#### Stakeholders

* Project Owners: Anyone who needs an audit for their program. 
* Validator Nodes (i.e., Judges): A proof of stake network that verifies the audting information. Note that these nodes are not necessary the validators of the *chain*. 
* Auditor Nodes (i.e., Wardens): Anyone can run a nodes on their computers or even inside browsers to supply computation power for program analysis in return of token rewards. 

#### High Level Auditing Workflow

```
+---------+                  +-------------+ +-------------+ +-------------------+                                +-------+
| Auditor |                  | Validator 1 | | Validator 2 | |   Project Owner   |                                | Chain |
+---------+                  +-------------+ +-------------+ +-------------------+                                +-------+
     |                              |               |                  |                                              |
     |                              |               |                  | 0. Onboard a project                         |
     |                              |               |                  |--------------------------------------------->|
     |                              |               |                  |                                              |
     |                              |               |                  |  1. Ask for partition plan based on project  |
     |                              |<--------------------------------------------------------------------------------|
     |                              |               |                  |                                              |
     |                              | 1. Claim a partition plan and submit it                                         |
     |                              |-------------------------------------------------------------------------------->|
     |                              |               |                  |                                              |
     |                              |               | 1. Challenge the partition plan if it is not correct            |
     |                              |               |---------------------------------------------------------------->|
     |                              |               |                  |                                              |
     |                              |               |                  |      2. Send the partition of the project    |
     |<---------------------------------------------------------------------------------------------------------------|
     | -----------------------\     |               |                  |                                              |
     |-| 2. Auditing with DPA |     |               |                  |                                              |
     | |----------------------|     |               |                  |                                              |
     |                              |               |                  |                                              |
     | 3. When a testcase leading to vulnerability / new coverage found, submit the testcase                          |
     |--------------------------------------------------------------------------------------------------------------->|
     |                              |               |                  |                                              |
     |                              | 3. Challenge the testcase if it is not correct                                  |
     |                              |-------------------------------------------------------------------------------->|
     |                              |               |                  |                                              |
     |                              |               |                  | 4. Stop the auditing and mint the report     |
     |                              |               |                  |--------------------------------------------->|
     |                              |               |                  |                                              |
     |                              |              4. Provide share of bounties based on the # of testcases submitted |
     |<---------------------------------------------------------------------------------------------------------------|
     |                              |               |                  |                                              |
     |                              |               |                  |       4. Provide share of bounties as reward |
     |                              |<--------------------------------------------------------------------------------|
     |                              |               |                  |                                              |
```


0. Project owner can create an auditing request by staking tokens as bounties and providing the compiled program.  

1. The program being audited is divided into smaller subprograms of equal exploring complexity using static analysis by validator nodes. Each node is assigned a unique subprogram to audit for a specific period. This process, known as partitioning, is extremely fast and helps prevent auditor nodes from wasting computational power on code other nodes have already explored. The partitioning plan is deterministic and can be easily verified by other validator nodes, reaching consensus among all validator nodes before the auditing campaign begins.
 
2. Each auditor nodes pick up a specific partition in the partitioning plan minted based on weighted sampling. Then, auditor nodes leverage fuzz testing techniques to analyze their subprogram. 

3. When auditor nodes detect a test case leading to vulnerability or new code coverage, they mint an NFT for the test case. Judge nodes then verify the test case by re-executing it. Since the execution is deterministic, the outcome must also be deterministic, allowing validator nodes to reach consensus about the validity of test case NFTs. 

4. Project owner can terminate an audit request. The termination requests also mint an NFT for an auditing report automatically based on the intermediate statistics, test cases, and vulnerabilities. A reward (i.e., bounties) is then given to the validator nodes and auditor nodes that generated or verified the test case NFTs.


#### Technical Details
**Reaching Consensus**: Verifying partition plans and interesting test cases can be costly or even impossible on the chain. Thus, validator nodes use off-chain oracles. FuzzLand uses rollup techniques to move the oracle results onto the chain and reach consensus. Specifically, an optimistic rollup pallet is implemented to achieve consensus on partition plans and interesting test cases. Once a validator node mints a partition plan or an auditor node mints a test case NFT, other validator nodes can submit fraud proofs to challenge it within 50 blocks, or it will be committed. Unlike human auditors or judges, validator nodes can find evidence to challenge false claims in microseconds, as the verification process is automated and inexpensive, making optimistic rollups effective.

**Auditing Requests Prioritization**: Auditor nodes are incentivized to prioritize auditing requests that are new, have high program complexity, and offer higher rewards. This is because auditor nodes are motivated to find more test cases that lead to vulnerabilities and new coverage, as well as to receive higher rewards for the test case NFTs they mint.

**Partitioning Plan Synthesis**: By converting a program into LLVM bytecode, we can create a control flow graph (CFG) of it. A basic static analysis can estimate the relative difficulty of exploring each edge in the CFG. Graph partitioning algorithms can then partition the CFG into sub-trees, with the starting node of the CFG as the root of each tree. The partition plan can be concisely represented in O(log n) bytes, where `n` is the size of the CFG, making it possible to be fit into an on-chain variable. 

**Dynamic Program Analysis (DPA)**: We support automated auditing of any program that can be compiled to LLVM bytecode by leveraging fuzz testing techniques, which involve sending random input to the program. This method, also known as heuristic search, aims to achieve 100% code coverage and uncover all vulnerabilities. While infinite time would guarantee zero false negatives, we use formal methods such as symbolic and concolic execution for guiding the fuzz testing search to reduce the time needed. Additionally, by partitioning the program into smaller, more manageable subprograms for each node, we can reduce the time required linearly as the number of nodes increases.


#### Technology Stack

- Substrate
- Rust
- LLVM

#### Implementation Details

We are going to implement two Substrate modules with following traits:


**Optimistic Rollups**:
```rust
// Optimistic rollups pallet maintains a set of challengers and claimers. 
// The claimers can claim arbitrary things that can be executed. 
// The challengers can challenge arbitrary claims submitted previously.
// Optimistic rollups can transition costly on-chain execution to off-chain oracle while still reaching consensus with the execution correctness. 
trait OptimisticRollups {
    // When a challenge / dispute is submitted, use this function to determine whether the dispute is valid.
    // Decision can be: wait for new argument (multi-round interactive rollups only); confirmed fraud; confirmed proof incorrect.  
    verifier: fn (proof: bytes) -> Decision;
    
    // When a claim is committed, the executor is invoked to execute the claim. 
    executor: fn (claim: bytes);
    
    // Claim something.
    Claim(origin, data: bytes);
    
    // Challenge / Dispute a claim with proof.
    Challenge(origin, proof: bytes);
    
    // Argue a challenge / dispute by challenger or claimer.  
    // Used for multi-round interactive rollups.
    ArgueChallenge(origin, proof: bytes);
    
    // Commit latest block that may contain multiple claims.
    Commit(origin);
    
    // Vote to ban a specific challenger / claimer.
    // after an account gets enough vote, it gets removed from challenger / claimer set.
    Ban(origin, account: Address);
    
    // Join with minimum token staked to be a challenger or claimer.
    Join(origin, role: Role);
}

```

Both partition plan and testcase can be interactively challenged and proved on chain efficiently by partial re-evaluation. 


**Auditing**:
```rust
trait Audit {
    // Onboard a project with minimum token (bounty) staked
    // note: llvm_bytecode arg can be replaced by IPFS hash if the target is very large
    OnboardProject(origin, llvm_bytecode: bytes) -> u256;
    
    // Offboard a project and mint a report
    OffboardProject(origin, project_id: u256);
    
    // Submit a parition plan for the project by validator
    SubmitPartitionPlan(origin, project_id: u256, plan: bytes);
    
    // Submit a testcase by auditor
    SubmitTestcase(origin, project_id: u256, testcase: bytes);
    
    // Join with minimum token staked to be a validator or auditor
    Join(origin, role: Role);
    
    // ...challenging methods
}
```

We are also going to implement the off-chain oracle. Specifically, oracle needs to generate partition plans. This can be implemented using Kernighan–Lin algorithm. Oracle also needs to implement the DPA for LLVM targets that respect the partition plan. We use LLVM pass to modify the bytecode and use LibAFL to manage the DPA campaign. 

### Ecosystem Fit
Our platform can serve the project owners who have auditing requests for their projects, regardless of Web2 or Web3: as long as they can be compiled into LLVM (e.g., any Ink, Solidity, Rust, C++, etc. programs). The auditing reports and how they correlate with the on-chain statistics can also be reviewed by anyone: not just the project owner, but also the project users. Project owners can gain more trust by sharing the auditing reports backed with *consensus* with their users. 

Downstream DeFis, including insurance, using the auditing intermediate information and results can be deployed to our chain. As we enable the contracts pallet in our chain, the DeFis can be developed in the form of Ink smart contracts. XCM also makes it possible to pipeline the auditing results to other chains. 

Other projects can reuse the components of FuzzLand platforms. For example, the optimistic rollups pallet can be used by Layer 2 solutions. Collaborative manual auditing projects can also use the audit pallet or our chain by replacing the rollups pallet with consensus pallets. 

We have yet to see any similar projects in Substrate / Polkadot / Kusama ecosystem. Code4rena, Immunefi, Secure3, Sherlock, etc. are similar projects in other ecosystems, but they all rely on human auditors. 


## Team :busts_in_silhouette:

### Team members (In order of joining time)

Jeff Liu (PM & Marketing) 

Chaofan Shou (Core Dev) - https://scf.so/

Shangying Tan (Core Dev) - https://shangyit.me/

Ben Fong (Core Dev + QA)

Yiqi Hu (Core Dev)


### Contact

- **Contact Name:** Jeff Liu
- **Contact Email:** jeff@fuzz.land
- **Website:** <https://fuzz.land/>

### Legal Structure

- **Registered Address:** N/A
- **Registered Legal Entity:** N/A

### Team's experience

Chaofan is a PhD student at UC Berkeley working on program analysis and distributed system. He has multiple research papers about fuzz testing in top conferences (e.g., [CorbFuzz](https://arxiv.org/pdf/2109.00398.pdf), [Rare Path Fuzzer](https://arxiv.org/pdf/2212.09004.pdf)). He has also participated in auditing and found numerous critical vulnerabilities in well-known software and Web3 protocols. He will work on the technical portion of the project, including implementing the aforementioned Substrate pallets and the offchain oracle.

Shangyin is a PhD student at UC Berkeley working on formal methods and fuzzing. He has previously worked at Microsoft and contributed to well-known symbolic / concolic execution tools (e.g., [sai](https://github.com/Kraks/sai)). He will be developing the algorithm for partition plan synthesis and interactive verifiers in optimistic rollups. 

Yiqi Hu graduated with a master's degree from Carnegie Mellon University. She has a strong background in program analysis and will be working on implementing the fuzz testing algorithm. 

Ben graduated from SJSU and has a strong background in full-stack development and automated QA. He will be in charge of Web App development and CI/CD pipeline. 

Jeff is the founding engineer and PM at VMware Cloud Infra org and has founded multiple startups that have been acquired by companies like Alibaba. He has co-invested in well-known Web3 companies like Deeper Network, Holokit, etc. He will be overseeing the development process. 

### Team Code Repos

- <https://github.com/fuzzland/chain>
- <https://github.com/fuzzland/oracle>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- <https://github.com/shouc> Chaofan Shou
- <https://github.com/shangyint> Shangying Tan
- <https://github.com/benjaminfong> Ben Fong
- <https://github.com/YiqiHu> Yiqi Hu

### Team LinkedIn Profiles (if available)


## Development Status :open_book:

- <https://github.com/fuzzland/chain> This is the Substrate chain implementation. We have just started to work on it. 
- <https://github.com/fuzzland/ityfuzz> (Private for now, can share upon requests) This is our fuzz testing tool that can conduct DPA as described before. Supports for partitioning programs and conduct DPA on subprograms are WIP. Will be moved to `oracle` repo. 
- <https://github.com/fuzzland/protocol_v1> We have built a simple FuzzLand protocol PoC for EVM-compatible chain in Solidity. However, due to high gas fee, low throughput, and hard to customize the chain, we decide to switch to implement a Substrate chain. Frontend and telemetry API in this repo will be reused. 
- <https://github.com/AFLplusplus/LibAFL/pull/557> Adds the necessary analysis datasource for partition plan generation to the fuzzing library. 
- <https://dev.fuzz.land/> We also have the first version of our website.


#### Related Papers
* AFLTeam: https://ieeexplore.ieee.org/document/9678810/
* LibAFL: https://dl.acm.org/doi/abs/10.1145/3548606.3560602

## Development Roadmap :nut_and_bolt:

### Overview

- **Total Estimated Duration:** 5 months
- **Full-Time Equivalent (FTE):** 4 FTE
- **Total Costs:** 30,000 USD

### Milestone 1 — Substrate Chain

- **Estimated duration:** 5 month
- **FTE:** 4 FTE
- **Costs:** 30,000 USD

| Number | Deliverable                 | Specification                                                                                                                                                                                                                                                                                                  |
| -----: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                     | GPLv3                                                                                                                                                                                                                                                                                                          |
|    0b. | Documentation               | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.                                                                  |
|    0c. | Testing Guide               | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.                                                                                                                                                              |
|    0d. | Docker                      | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.                                                                                                                                                                                                  |
|    0e. | Article                     | We will publish an **article**/workshop that explains the technical details and how to initiate an audit request. We will also publish research papers based on effectiveness of our solution and metrics collected from operating our platform.                                                                                                                                                                                                    |
|     1. | Substrate module: optimistic_rollups       | We will create a pallet that implements the optimistic rollups algorithm and a Rust SDK can that can interact with the pallet. |
|     2. | Substrate module: audit | We will create a pallet for accepting auditing requests onboarding, storing testcases, and distributing rewards. The pallet can also generate auditing reports in txt format automatically.                                                                   |
|     3. | Substrate chain             | Module `optimistic_rollups` and `auditing` can be integrated into a substrate node, to enable auditor nodes to submit intermediate auditing results and information. This chain will integrate contracts, treasury, council, democracy and also other essential pallets, to build a full-featured blockchain.                                                     |
|     4. | Offchain oracle             | We will implement off-chain oracle that conducts dynamic program analysis and outcome verification for auditor nodes and validator nodes in Rust.                                                    |
|     5. | Web App                     | We will create a web app, to let users easily interact with our substrate node. Users can create auditing requests, visualize intermediate auditing information, and view final auditing report.                                                                     |

## Future Plans

* Allowing project owners to define their own types of vulnerabilities (e.g., business logic violations). 
* Bring in ZK-SNARKs for testcase sharing.

## Additional Information :heavy_plus_sign:

**How did you hear about the Grants Program?** Personal recommendation
